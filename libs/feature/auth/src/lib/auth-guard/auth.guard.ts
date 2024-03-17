import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject, Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {AuthFacade} from "~challenge/auth";

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuard).canActivate(route, state);
};

@Injectable()
export class AuthGuard {

  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let isLoginOrRegister = route.url.find(url => url.path.match('login|register'));
    return this.authFacade.userLoggedIn$.pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigateByUrl('/unauthorized');
        } else if (isLoginOrRegister && loggedIn) {
          this.router.navigateByUrl('/home');
        }
      })
    );
  }
}
