// TODO: 참고를 위한 샘플입니다.
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isLogged: boolean;
}

const getInitialAuthState = (): AuthState => {
  return {
    isLogged: false,
  };
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: getInitialAuthState(),
  reducers: {
    loginUser(state) {
      state.isLogged = true;
    },
    logoutUser(state) {
      state.isLogged = false;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
