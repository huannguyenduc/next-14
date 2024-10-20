export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiredAccess: string;
  expiredRefresh: string;
}

export interface PaginationInterface {
  current?: number;
  pageSize?: number;
  total?: number;
}
