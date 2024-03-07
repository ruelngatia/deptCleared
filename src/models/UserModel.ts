export interface UserModel {
  _id: string;
  username: string;
  email: string;
  verified: boolean;
  verificationHash: string;
  loginVerificationCode: string;
  plan: string;
  project: string;
  requests: number;
  __v: number;
  company: string;
}
