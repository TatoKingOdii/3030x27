import {Routes} from '@angular/router';
import {LandingPage} from "./views/landing/landing.page";
import {HomePage} from "./views/home/home.page";
import { AuthGuard, authGuard, LoginComponent } from '~challenge/auth';
import {LocationPage} from "~challenge/location";
import {PageNotFoundComponent} from "~challenge/error-pages";
import {UnauthorizedComponent} from "~challenge/error-pages";
import {InactiveComponent} from "~challenge/error-pages";
import {WeatherPage} from "~challenge/weather";
import { CatUrlPipe } from '~challenge/cats';
import {EconomicPage} from "~challenge/economic";

export const routes: Routes = [
  {path: 'home', component: HomePage, canActivate: [authGuard]},
  {path: 'weather', component: WeatherPage, canActivate: [authGuard]},
  {path: 'world', component: EconomicPage, canActivate: [authGuard]},
  {path: 'location', component: LocationPage, canActivate: [authGuard]},
  {path: 'location/:id', component: LocationPage, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'inactive', component: InactiveComponent},
  {path: 'unauthorized', component: UnauthorizedComponent},
  // Add redirect to home if logged in
  {path: '', component: LandingPage},
  {path: '**', component: PageNotFoundComponent}
];

export const INJECTABLES = [AuthGuard, CatUrlPipe] as const;
