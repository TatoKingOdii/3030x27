import {createReducer, on} from '@ngrx/store';
import {WorldActions} from './world.actions';
import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {WorldLoc} from "../world";

export const WORLD_FEATURE_KEY = 'world';

export interface WorldState extends EntityState<WorldLoc> {
  loadingWorld: boolean,
  loadedToPage: number,
  maxPages: number
}

export function selectWorldName(world: WorldLoc) {
  return world.iso2Code;
}

export function sortByName(w1: WorldLoc, w2: WorldLoc) {
  return w1.name.localeCompare(w2.name);
}

export const worldAdapter = createEntityAdapter<WorldLoc>({
  selectId: selectWorldName,
  sortComparer: sortByName
});

export const initialWorldState: WorldState = worldAdapter.getInitialState({
  loadingWorld: false,
  loadedToPage: 0,
  maxPages: 0
});

export const worldReducer = createReducer(
  initialWorldState,
  on(WorldActions.loadWorldPage, state => ({...state, loadingWorld: true})),
  on(WorldActions.loadFreshWorlds, state => worldAdapter.setAll([], {...state, loadingWorld: true, loadedToPage: 0, maxPages: 0})),

  on(WorldActions.loadFreshWorldsSuccess, (state, action) =>
    worldAdapter.setAll(action.data, {...state, loadingWorld: false, loadedToPage: 1, maxPages: action.totalPages})),
  on(WorldActions.loadFreshWorldsFailure, state => ({...state, loadingWorld: false})),

  on(WorldActions.loadWorldPageSuccess, (state, action) =>
    worldAdapter.addMany(action.data, {...state, loadingWorld: false, loadedToPage: action.currentPage, maxPages: action.totalPages})),
  on(WorldActions.loadWorldPageFailure, state => ({...state, loadingWorld: false})),
);

