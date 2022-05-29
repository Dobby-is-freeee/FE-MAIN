import { createRequest } from './instance';

export const requestSignin = ({ email, password }: { email: string; password: string }) =>
  createRequest<{ success: boolean; code: number }>({
    method: 'POST',
    endpoint: '/members/login',
    body: { email: email, password: password },
  });

export const requestSignUp = ({
  name,
  email,
  password,
  position,
}: {
  name: string;
  email: string;
  password: string;
  position: string;
}) =>
  createRequest<{ success: boolean; code: number; message: string }>({
    method: 'POST',
    endpoint: '/members/login',
    body: { name: name, email: email, password: password, position: position },
  });
