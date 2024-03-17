import { createFeatureSelector, createSelector } from '@ngrx/store';
import { isWeatherLoading, selectAllWeather, WEATHER_FEATURE_KEY, WeatherState } from './weather.reducer';

export const weatherFeature = createFeatureSelector<WeatherState>(WEATHER_FEATURE_KEY);

export const weather =
  createSelector(weatherFeature, selectAllWeather);

export const loadingWeather =
  createSelector(weatherFeature, isWeatherLoading);
