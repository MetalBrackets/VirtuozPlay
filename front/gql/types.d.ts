// Code generated using `yarn codegen`, DO NOT EDIT.
//
// no really though, do not edit this file.
// noinspection JSUnusedGlobalSymbols

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
};

export type InputNote = {
    /** The offset of the note's start from the beginning of the performance, in milliseconds. */
    readonly at: Scalars['Int']['input'];
    /** The duration of the note, in milliseconds. */
    readonly duration: Scalars['Int']['input'];
    /** Human-readable representation of the note (e.g. 'C#', 'D', 'Fb', etc.) */
    readonly value: Scalars['String']['input'];
};

/** The root mutation type. */
export type Mutation = {
    readonly __typename?: 'Mutation';
    /** Add notes to a performance, each new note must have a 'at' value greater than any existing note's 'at' value in the performance. */
    readonly addNotesToPerformance: Performance;
    readonly finishPerformance: Performance;
    /** Begin a new performance for the given song. */
    readonly startPerformance: Performance;
};

/** The root mutation type. */
export type MutationAddNotesToPerformanceArgs = {
    notes: ReadonlyArray<InputNote>;
    performanceId: Scalars['ID']['input'];
};

/** The root mutation type. */
export type MutationFinishPerformanceArgs = {
    performanceId: Scalars['ID']['input'];
};

/** The root mutation type. */
export type MutationStartPerformanceArgs = {
    songId: Scalars['ID']['input'];
};

export type Performance = {
    readonly __typename?: 'Performance';
    /** The creator of this performance, null when user was not logged in */
    readonly author?: Maybe<User>;
    readonly createdAt?: Maybe<Scalars['String']['output']>;
    /** The total duration of the performance, in milliseconds. */
    readonly duration: Scalars['Int']['output'];
    readonly id: Scalars['ID']['output'];
    /** An array of *all* notes in the performance, sorted by their start time. */
    readonly notes: ReadonlyArray<PerformanceNote>;
    /** The song that is being/was performed */
    readonly song: Song;
};

export type PerformanceNote = {
    readonly __typename?: 'PerformanceNote';
    /** The offset of the note's start from the beginning of the performance, in milliseconds. */
    readonly at: Scalars['Int']['output'];
    /** The duration of the note, in milliseconds. */
    readonly duration: Scalars['Int']['output'];
    /** Human-readable representation of the note (e.g. 'C#', 'D', 'Fb', etc.) */
    readonly value: Scalars['String']['output'];
};

/** The root query type. */
export type Query = {
    readonly __typename?: 'Query';
    /** Retrieve a performance by its ID. */
    readonly performance?: Maybe<Performance>;
    readonly songs: ReadonlyArray<Song>;
    readonly virtuozPlay: VirtuozPlay;
};

/** The root query type. */
export type QueryPerformanceArgs = {
    id: Scalars['ID']['input'];
};

export type Song = {
    readonly __typename?: 'Song';
    readonly id: Scalars['ID']['output'];
    readonly notes: ReadonlyArray<SongNote>;
    readonly title: Scalars['String']['output'];
};

/** This is a separate type from PerformanceNote for now */
export type SongNote = {
    readonly __typename?: 'SongNote';
    readonly end: Scalars['Int']['output'];
    readonly fret: Scalars['Int']['output'];
    readonly measure: Scalars['Int']['output'];
    readonly note: Scalars['String']['output'];
    readonly octave: Scalars['Int']['output'];
    readonly start: Scalars['Int']['output'];
    readonly string: Scalars['Int']['output'];
};

export type User = {
    readonly __typename?: 'User';
    readonly email?: Maybe<Scalars['String']['output']>;
    readonly id: Scalars['ID']['output'];
    readonly name?: Maybe<Scalars['String']['output']>;
};

export type VirtuozPlay = {
    readonly __typename?: 'VirtuozPlay';
    readonly version: Scalars['String']['output'];
};
