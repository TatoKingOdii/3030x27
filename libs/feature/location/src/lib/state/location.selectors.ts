import {createFeatureSelector, createSelector} from '@ngrx/store';
import {locAdapter, LOCATION_FEATURE_KEY, LocationState} from './location.reducer';

export const isLocationLoading = (state: LocationState) => state.loadingLocations;
export const isLocationSaving = (state: LocationState) => state.savingLocation;
export const isLocationUpdating = (state: LocationState) => state.updatingLocation;
export const isLocationDeleting = (state: LocationState) => state.deletingLocation;

export const {
  selectIds: selectLocationIds,
  selectEntities: selectLocationEntities,
  selectAll: selectAllLocations,
  selectTotal: selectLocationTotal,
} = locAdapter.getSelectors();

export const locationFeature = createFeatureSelector<LocationState>(LOCATION_FEATURE_KEY);

export const loadingLocations = createSelector(
  locationFeature, isLocationLoading
);

export const savingLocations = createSelector(
  locationFeature, isLocationSaving
);

export const updatingLocations = createSelector(
  locationFeature, isLocationUpdating
);

export const deletingLocations = createSelector(
  locationFeature, isLocationDeleting
);

export const locations = createSelector(
  locationFeature, selectAllLocations
);

