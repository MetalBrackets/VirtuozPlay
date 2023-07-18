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
        title: string;
        notes: Array<{
            __typename?: 'Note';
            measure: number;
            note: string;
            fret: number;
            string: number;
            octave: number;
            start: any;
            end: any;
        } | null>;
    } | null>;
};

export declare const GetSong: import('graphql').DocumentNode;

export const GetSongDocument = /*#__PURE__*/ gql`
    query GetSong {
        songs {
            title
            notes {
                measure
                note
                fret
                string
                octave
                start
                end
            }
        }
    }
` as unknown as DocumentNode<GetSongQuery, GetSongQueryVariables>;
