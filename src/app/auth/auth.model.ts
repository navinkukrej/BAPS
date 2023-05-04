export type AuthCallBack = {
  EmailVerified: string;

  PhoneVerified: string;

  StatusCode: string;
  authenticationInfo: string;

  errorMessage: string | null;

  refreshToken: string;

  token: string;
};
