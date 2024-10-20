import { BaseParams } from './common';

export interface User {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  id: string;
  accountId: string;
  email?: string;
  username?: string;
  fullName: string;
  kanaJapanese?: string;
  companyName: string;
  description: string;
  gender: string;
  nationality: string;
  ageRange: string;
  birth: string;
  avatarUrl: string;
  address: string;
  language: string;
  receive_mail: string;
  collection_address: string[];
  phone_number: string;
}

export interface GetUsersRequest extends BaseParams {
  search?: string;
  filterUser?: string;
}

export interface UserParams extends GetUsersRequest {}

export interface GetUsersResponse {
  users: any[];
}
