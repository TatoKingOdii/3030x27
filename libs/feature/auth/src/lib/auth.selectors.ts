import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AUTH_FEATURE_KEY, AuthState} from "./auth.reducer";

export const authFeature = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const loggedIn = createSelector(
  authFeature,
  (state: AuthState) => state.loggedIn
);

export const pendingLogin = createSelector(
  authFeature,
  (state: AuthState) => state.pendingLogin
);


