import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, exhaustMap, forkJoin, from, map, mergeMap, of, tap } from 'rxjs';
import {WeatherService} from "./weather.service";
import {WeatherActions} from "./weather.actions";
import {Weather} from "../weather";


@Injectable()
export class WeatherEffects {

  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  loadWeather$ = createEffect(() => this.actions$.pipe(
    ofType(WeatherActions.loadWeather),
    exhaustMap(({ data }) =>
      from(data).pipe(
        mergeMap(city =>  this.weatherService.getWeather(city).pipe(
          map<Weather, Weather>(res => ({...res, name: city}))
        )),
        map(entity => WeatherActions.loadWeatherSuccess({ data: entity, isLast: true })),
        catchError(err => of(WeatherActions.loadWeatherFailure({ error: 'Failed to load weather details!' })))
      )
    )
  ));
}
