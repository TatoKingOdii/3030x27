import {createFeatureSelector, createSelector} from '@ngrx/store';
import {
  isLocationDeleting,
  isLocationLoading,
  isLocationSaving, isLocationUpdating,
  LOCATION_FEATURE_KEY,
  LocationState,
  selectAllLocations
} from './location.reducer';

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
