import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {WorldLoc} from "../world";

export const WorldActions = createActionGroup({
  source: 'World',
  events: {
    'Load Fresh Worlds': emptyProps(),
    'Load Fresh Worlds Success': props<{ data: WorldLoc[], totalPages: number }>(),
    'Load Fresh Worlds Failure': props<{ error: string }>(),

    'Load World Page': props<{ page: number}>(),
    'Load World Page Success': props<{ data: WorldLoc[], totalPages: number, currentPage: number }>(),
    'Load World Page Failure': props<{ error: string }>(),
  }
});
