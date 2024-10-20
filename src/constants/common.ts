// Routing
export enum RouterPath {
  LOGIN = '/auth/login',
  HOME = '/',
  DASHBOARD = '/admin',
}

export const PRIVATE_ROUTES = [RouterPath.DASHBOARD];
export const AUTH_ROUTES: string[] = [RouterPath.LOGIN];

// Http request
export enum ResponseCode {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  VALIDATION_ERROR = 422,
  SERVER_ERROR = 500,
}

// Params
export enum SortOrder {
  DESC = 'DESC',
  ASC = 'ASC',
}

// Date
export const DATE_FORMAT = {
  SHORT_MONTH_YEAR: 'MM/yy',
  BASIC_DATE: 'DD-MM-YYYY',
  FULL_DATE_TIME: 'YYYY/MM/DD HH:mm',
  ISO_DATE: 'YYYY-MM-DD',
  FULL_DATE_WITH_TIME: 'HH:mm DD MMM YYYY',
} as const;

// RegExp
export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const WEBSITE_PATTERN =
  /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/i;
