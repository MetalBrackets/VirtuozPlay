package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.34

import (
	"context"
	"github.com/99designs/gqlgen/graphql"
	"virtuozplay/graph/model"
	db "virtuozplay/models"
	"virtuozplay/models/repository"

	"github.com/vektah/gqlparser/v2/gqlerror"
)

// StartPerformance is the resolver for the startPerformance field.
func (r *mutationResolver) StartPerformance(ctx context.Context, songID string) (*model.Performance, error) {
	_ = ctx
	song, err := r.Songs.FindByNanoID(db.NanoID(songID))
	if err != nil {
		return nil, err
	}
	return ToGraphQLPerformance(r.Performances.New(song))
}

// AddNotesToPerformance is the resolver for the addNotesToPerformance field.
func (r *mutationResolver) AddNotesToPerformance(ctx context.Context, id string, notes []*model.InputNote) (*model.Performance, error) {
	_ = ctx
	perf, err := r.Performances.FindInProgressByNanoID(db.NanoID(id))
	if err != nil {
		return nil, err
	}

	errors := make(gqlerror.List, 0)

	for i, note := range notes {
		err = perf.AppendNote(i,
			note.At,
			note.Duration,
			note.Value,
		)
		// Append the invalid notes to the errors list, but only if we haven't reached the limit (to avoid spamming the user)
		if err != nil && uint(len(errors)) < db.NoteValidationLimit {
			errors = append(errors, gqlerror.Wrap(err))
		}
	}
	// Append the notes that are not invalid
	gqlPerf, gqlErr := ToGraphQLPerformance(perf, r.Performances.Update(perf))

	if gqlErr != nil {
		return nil, gqlErr
	}
	if len(errors) > 0 {
		// Return invalid note errors, note that the valid ones are still saved
		return gqlPerf, errors
	}
	return gqlPerf, nil
}

// FinishPerformance is the resolver for the finishPerformance field.
func (r *mutationResolver) FinishPerformance(ctx context.Context, id string) (*model.Performance, error) {
	_ = ctx
	perf, err := r.Performances.FindByNanoID(db.NanoID(id))
	if err != nil {
		return nil, err
	}

	return ToGraphQLPerformance(perf, r.Performances.MarkAsFinished(perf))
}

// DebugCreateSong is the resolver for the debug_createSong field.
func (r *mutationResolver) DebugCreateSong(ctx context.Context, title string) (*model.Song, error) {
	// TODO: TEMPORARY, remove this once we have a proper song creation flow
	_ = ctx
	id, err := db.NewNanoID()
	if err != nil {
		return nil, err
	}
	song := &db.Song{
		NanoID: id,
		Title:  title,
	}
	err = r.Songs.Create(song)
	return &model.Song{
		ID:    string(song.NanoID),
		Title: song.Title,
		Notes: []*model.SongNote{},
	}, wrapError(err)
}

// VirtuozPlay is the resolver for the virtuozPlay field.
func (r *queryResolver) VirtuozPlay(ctx context.Context) (*model.VirtuozPlay, error) {
	_ = ctx
	return &model.VirtuozPlay{Version: "0.1.0"}, nil
}

// Performance is the resolver for the performance field.
func (r *queryResolver) Performance(ctx context.Context, id string) (*model.Performance, error) {
	fields := graphql.CollectAllFields(ctx)
	nanoID := db.NanoID(id)

	return ToGraphQLPerformance(r.Performances.FindByNanoID(nanoID, fields...))
}

// Songs is the resolver for the songs field.
func (r *queryResolver) Songs(ctx context.Context) ([]*model.Song, error) {
	_ = ctx

	// FIXME: Remove this when we have a proper loading for songs
	allSongs := make([]*model.Song, 0, len(repository.HardcodedSongs))
	for _, song := range repository.HardcodedSongs {
		s, _ := ToGraphQLSong(song, nil)
		allSongs = append(allSongs, s)
	}
	return allSongs, nil
}

// Song is the resolver for the song field.
func (r *queryResolver) Song(ctx context.Context, id string) (*model.Song, error) {
	_ = ctx
	return ToGraphQLSong(r.Resolver.Songs.FindByNanoID(db.NanoID(id)))
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
