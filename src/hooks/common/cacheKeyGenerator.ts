enum APP {
  MAIN = 'haky',
}

enum ADMIN {
  NOTIFICATIONS = 'admin-notifications',
  USERS = 'admin-users',
}

export const SWRCacheKey = {
  APP: () => `${APP.MAIN}`,
  ADMIN_NOTIFICATIONS: (startDate: string, endDate: string) =>
    `${ADMIN.NOTIFICATIONS}-${startDate}-${endDate}`,
  ADMIN_USERS: () => `${ADMIN.USERS}`,
};
