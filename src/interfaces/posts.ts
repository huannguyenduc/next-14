import { BaseParams } from './common';

export interface GetPostsRequest extends BaseParams {}

export interface GetPostsResponse {
  posts: any[];
}
