import {createFeatureSelector, createSelector} from '@ngrx/store';
import {adapter, WEATHER_FEATURE_KEY, WeatherState} from './weather.reducer';

export const weatherFeature = createFeatureSelector<WeatherState>(WEATHER_FEATURE_KEY);

export const isWeatherLoading = (state: WeatherState) => state.loadingWeather;

export const {
  selectIds: selectWeatherIds,
  selectEntities: selectWeatherEntities,
  selectAll: selectAllWeather,
  selectTotal: selectWeatherTotal,
} = adapter.getSelectors();

export const weather =
  createSelector(weatherFeature, selectAllWeather);

export const loadingWeather =
  createSelector(weatherFeature, isWeatherLoading);
