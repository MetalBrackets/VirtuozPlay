// Code generated using `yarn codegen`, DO NOT EDIT.
//
// no really though, do not edit this file.
// noinspection JSUnusedGlobalSymbols

import * as Types from '../types.d';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type GetSongQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetSongQuery = {
    __typename?: 'Query';
    songs: Array<{
        __typename?: 'Song';
        id: string;
        title: string;
        img_url: string;
        music_path: string;
        url: string;
        notes: Array<{
            __typename?: 'SongNote';
            measure: number;
            note: string;
            fret: number;
            string: number;
            octave: number;
            alter: number;
            beat: number;
            duration: number;
            type: string;
            default: number;
        }>;
    }>;
};

export declare const GetSong: import('graphql').DocumentNode;

export const GetSongDocument = /*#__PURE__*/ gql`
    query GetSong {
        songs {
            id
            title
            img_url
            music_path
            url
            notes {
                measure
                note
                fret
                string
                octave
                alter
                beat
                duration
                type
                default
            }
        }
    }
` as unknown as DocumentNode<GetSongQuery, GetSongQueryVariables>;
