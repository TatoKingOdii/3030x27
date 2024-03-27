import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from "rxjs";
import {ToastUiService} from "../../../../../apps/challenge/src/app/core/toast-ui-service/toast-ui.service";
import {authLoginFailure, authLogoutFailure} from "~challenge/auth";
import {
  createLocationFailure,
  deleteLocationFailure,
  loadLocationsFailure,
  updateLocationFailure
} from "~challenge/location";
import {QuoteActions} from "~challenge/quote";
import {WeatherActions} from "~challenge/weather";
import {WorldActions} from "~challenge/economic";


@Injectable()
export class ErrorEffects {

  constructor(private actions$: Actions, private toastUiService: ToastUiService) {}

  errorEffect$ = createEffect(() => this.actions$.pipe(
    ofType(authLoginFailure, authLogoutFailure, createLocationFailure,
      deleteLocationFailure, updateLocationFailure, loadLocationsFailure,
      QuoteActions.getQuotesFailure, WeatherActions.loadWeatherFailure,
      WorldActions.loadFreshWorldsFailure, WorldActions.loadWorldPageFailure),
    switchMap(action => this.toastUiService.presentToast(action.error))
  ), {dispatch: false});
}
