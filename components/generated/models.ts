// Code generated by wunderctl. DO NOT EDIT.

import type function_UsersGet from "../../.wundergraph/operations/users/get";
import type function_UsersSubscribe from "../../.wundergraph/operations/users/subscribe";
import type function_UsersUpdate from "../../.wundergraph/operations/users/update";
import type { ExtractInput, ExtractResponse } from "@wundergraph/sdk/operations";

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}

export type UsersGetInput = ExtractInput<typeof function_UsersGet>;

export type UsersSubscribeInput = ExtractInput<typeof function_UsersSubscribe>;

export type UsersUpdateInput = ExtractInput<typeof function_UsersUpdate>;

export interface InternalUsersGetInput {
	id: string;
}

export interface InternalUsersSubscribeInput {
	id: string;
}

export interface InternalUsersUpdateInput {
	id: string;
	name: string;
	bio: string;
}

export interface DragonsResponse {
	data?: DragonsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface EpisodesResponse {
	data?: EpisodesResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface UsersGetResponse {
	data?: UsersGetResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface UsersSubscribeResponse {
	data?: UsersSubscribeResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface UsersUpdateResponse {
	data?: UsersUpdateResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface DragonsResponseData {
	spacex_dragons?: {
		name?: string;
		active?: boolean;
	}[];
}

export interface EpisodesResponseData {
	rickAndMorty_episodes?: {
		info?: {
			count?: number;
		};
	};
}

export type UsersGetResponseData = ExtractResponse<typeof function_UsersGet>;

export type UsersSubscribeResponseData = ExtractResponse<typeof function_UsersSubscribe>;

export type UsersUpdateResponseData = ExtractResponse<typeof function_UsersUpdate>;
