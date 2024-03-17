import { createReducer, on } from '@ngrx/store';
import { WeatherActions } from './weather.actions';
import {Weather} from "../weather";
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const WEATHER_FEATURE_KEY = 'weather';

export interface WeatherState extends EntityState<Weather>{
  loadingWeather: boolean
}

export function selectCityName(w: Weather): string {
  return w.name;
}

export function sortByName(w1: Weather, w2: Weather): number {
  return w1.name.localeCompare(w2.name);
}

export const adapter: EntityAdapter<Weather> = createEntityAdapter<Weather>(
  {
    selectId: selectCityName,
    sortComparer: sortByName
  }
);

export const initialState: WeatherState = adapter.getInitialState({
  loadingWeather: false
});

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.loadWeather, state =>
    adapter.setAll([], ({...state, loadingWeather: true}))),
  on(WeatherActions.loadWeatherSuccess, (state, {data}) =>
    adapter.upsertOne(data, ({...state, loadingWeather: false}))),
);

export const isWeatherLoading = (state: WeatherState) => state.loadingWeather;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectWeatherIds = selectIds;

// select the dictionary of user entities
export const selectWeatherEntities = selectEntities;

// select the array of users
export const selectAllWeather = selectAll;

// select the total user count
export const selectWeatherTotal = selectTotal;
