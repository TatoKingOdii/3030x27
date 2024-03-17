import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {loggedIn, pendingLogin} from "./auth.selectors";
import {authLogin, authLogout} from "./auth.actions";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  userLoggedIn$ = this.authStore.select(loggedIn);
  pendingLogin$ = this.authStore.select(pendingLogin);

  constructor(private authStore: Store) { }

  login(user: User) {
    this.authStore.dispatch(authLogin({user: user}));
  }

  logout() {
    this.authStore.dispatch(authLogout());
  }

}
