import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {loadingWeather, weather} from "./weather.selectors";
import {WeatherActions} from "./weather.actions";

@Injectable({
  providedIn: 'root'
})
export class WeatherFacade {

  weather$ = this.store.select(weather);
  loadingWeather$ = this.store.select(loadingWeather);

  constructor(private store: Store) { }

  loadWeather(cities: string[]) {
    this.store.dispatch(WeatherActions.loadWeather({data: cities}));
  }
}
