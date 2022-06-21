import { createRequest } from './instance';

export interface RequestSigninParams {
  email: string;
  password: string;
}

export const requestSignin = (params: RequestSigninParams) =>
  createRequest<{ success: boolean; code: number }>({
    method: 'POST',
    endpoint: '/members/login',
    body: { ...params },
  });

export interface RequestSignUpParams {
  name: string;
  email: string;
  password: string;
  position: string;
}

export const requestSignUp = (params: RequestSignUpParams) =>
  createRequest<{ success: boolean; code: number; message: string }>({
    method: 'POST',
    endpoint: '/members/login',
    body: { ...params },
  });
