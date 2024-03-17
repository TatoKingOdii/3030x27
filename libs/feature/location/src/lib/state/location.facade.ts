import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  deletingLocations,
  loadingLocations,
  locations,
  savingLocations,
  updatingLocations
} from './location.selectors';
import { Loc } from '~challenge/location';
import { deleteLocation, loadLocations, openLocationModal } from './location.actions';

@Injectable({
  providedIn: 'root'
})
export class LocationFacade {

  locations$ = this.locationStore.select(locations);
  isLoadingLocations$ = this.locationStore.select(loadingLocations);
  isSavingLocation$ = this.locationStore.select(savingLocations);
  isUpdatingLocation$ = this.locationStore.select(updatingLocations);
  isDeletingLocation$ = this.locationStore.select(deletingLocations);

  constructor(private locationStore: Store) { }

  loadLocations() {
    this.locationStore.dispatch(loadLocations());
  }

  deleteLocation(location: Loc) {
    this.locationStore.dispatch(deleteLocation({location: location}));
  }

  openLocationModal(loc: Loc) {
    this.locationStore.dispatch(openLocationModal({location: loc}));
  }
}
