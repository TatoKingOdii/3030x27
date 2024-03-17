import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import {INJECTABLES, routes} from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {AuthEffects, authReducer} from "~challenge/auth";
import {LocationEffects, locationReducer} from "~challenge/location";
import {ErrorEffects} from "~challenge/error";
import {QuoteEffects, quoteReducer} from "~challenge/quote";
import {WeatherEffects, weatherReducer} from "~challenge/weather";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideIonicAngular({}),
    provideEffects(AuthEffects, LocationEffects, ErrorEffects, QuoteEffects, WeatherEffects),
    provideStore({location: locationReducer, auth: authReducer, quote: quoteReducer, weather: weatherReducer}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withFetch()),
    ...INJECTABLES
  ]
};
