import { createReducer, on } from '@ngrx/store';
import { Loc } from '~challenge/location';
import {
  createLocation,
  createLocationFailure,
  createLocationSuccess,
  deleteLocation,
  deleteLocationFailure,
  deleteLocationSuccess,
  loadLocations,
  loadLocationsFailure,
  loadLocationsSuccess,
  updateLocation,
  updateLocationFailure,
  updateLocationSuccess
} from './location.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const LOCATION_FEATURE_KEY = 'location';

export interface LocationState extends EntityState<Loc>{
  loadingLocations: boolean,
  savingLocation: boolean,
  updatingLocation: boolean,
  deletingLocation: boolean
}

export function sortByName(l1: Loc, l2: Loc): number {
  return l1.name.localeCompare(l2.name);
}

export const locAdapter: EntityAdapter<Loc> = createEntityAdapter<Loc>({
  sortComparer: sortByName
});

const initialState: LocationState = locAdapter.getInitialState({
  loadingLocations: false,
  savingLocation: false,
  updatingLocation: false,
  deletingLocation: false
});

export const locationReducer = createReducer(
  initialState,
  on(loadLocations, state => ({...state, loadingLocations: true})),
  on(loadLocationsSuccess, (state,
                                            {locations}) => locAdapter.setAll(locations, ({...state, locations: locations, loadingLocations: false}))),
  on(loadLocationsFailure, (state) => ({...state, loadingLocations: false})),

  on(createLocation, state => ({...state, savingLocation: true})),
  on(createLocationSuccess, state => ({...state, savingLocation: false})),
  on(createLocationFailure, state => ({...state, savingLocation: false})),

  on(updateLocation, state => ({...state, updatingLocation: true})),
  on(updateLocationSuccess, state => ({...state, updatingLocation: false})),
  on(updateLocationFailure, state => ({...state, updatingLocation: false})),

  on(deleteLocation, state => ({...state, deletingLocation: true})),
  on(deleteLocationSuccess, state => ({...state, deletingLocation: false})),
  on(deleteLocationFailure, state => ({...state, deletingLocation: false})),
);

