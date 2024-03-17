import {createAction, emptyProps, props} from '@ngrx/store';
import {User} from "./user";

export const authLogin = createAction(
  '[Auth] Login',
  props<{user: User}>()
);

export const authLoginSuccess = createAction(
  '[Auth] Login Success',
  emptyProps
);

export const authLoginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const authLogout = createAction(
  '[Auth] Logout',
  emptyProps
);

export const authLogoutSuccess = createAction(
  '[Auth] Logout Success',
  emptyProps
);

export const authLogoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: string }>()
);

