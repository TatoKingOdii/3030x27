import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {Weather} from "../weather";

export const WeatherActions = createActionGroup({
  source: 'Weather',
  events: {
    'Load Weather': props<{ data: string[] }>(),
    'Load Weather Success': props<{ data: Weather }>(),
    'Load Weather Failure': props<{ error: string }>()
  }
});
