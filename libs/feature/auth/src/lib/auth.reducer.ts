import { createReducer, on } from '@ngrx/store';
import {
  authLogin,
  authLoginFailure,
  authLoginSuccess,
  authLogout,
  authLogoutFailure,
  authLogoutSuccess
} from "./auth.actions";

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  loggedIn: boolean,
  pendingLogin: boolean
}

const initialState: AuthState = {
  loggedIn: false,
  pendingLogin: false
};

export const authReducer = createReducer(
  initialState,
  on(authLoginSuccess, state => ({...state, loggedIn: true, pendingLogin: false})),
  on(authLoginFailure, state => ({...state, loggedIn: false, pendingLogin: false})),
  on(authLogin, state => ({...state, pendingLogin: true})),

  on(authLogoutSuccess, state => ({...state, loggedIn: false, pendingLogin: false})),
  on(authLogoutFailure, state => ({...state, loggedIn: false, pendingLogin: false})),
  on(authLogout, state => ({...state, loggedIn: false, pendingLogin: false})),
);

