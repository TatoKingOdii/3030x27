import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
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
  openLocationModal,
  saveLocation,
  updateLocation,
  updateLocationFailure,
  updateLocationSuccess
} from "./location.actions";
import {catchError, exhaustMap, filter, map, of, tap} from "rxjs";
import {LocationService} from "./location.service";
import {ModalService} from "../../../../../../apps/challenge/src/app/core/modal-service/modal.service";
import {v4} from "uuid";

@Injectable()
export class LocationEffects {

  constructor(private actions$: Actions,
              private locationService: LocationService,
              private modalService: ModalService) {}

  loadLocations$ = createEffect(() => this.actions$.pipe(
    ofType(loadLocations),
    exhaustMap(action => this.locationService.loadContent().pipe(
      map(result => loadLocationsSuccess({locations: result})),
      catchError(err => of(loadLocationsFailure({error: 'Failed to load latest location data'})))
    )),
  ));

  saveLocations$ = createEffect(() => this.actions$.pipe(
    ofType(saveLocation),
    map(action => {
      let location = action.location;
      return location.id ? updateLocation({location: location}) : createLocation({location: location});
    }),
  ));

  createLocations$ = createEffect(() => this.actions$.pipe(
    ofType(createLocation),
    exhaustMap(action =>
      this.locationService.createContent({...action.location, id: v4()}).pipe(
        map(result => createLocationSuccess()),
        catchError(err => of(createLocationFailure({error: 'Failed to create location'})))
    )),
  ));

  updateLocations$ = createEffect(() => this.actions$.pipe(
    ofType(updateLocation),
    exhaustMap(action => this.locationService.updateContent(action.location).pipe(
      map(result => updateLocationSuccess()),
      catchError(err => of(updateLocationFailure({error: 'Failed to update location'})))
    )),
  ));

  deleteLocations$ = createEffect(() => this.actions$.pipe(
    ofType(deleteLocation),
    exhaustMap(action => this.locationService.deleteContent(action.location).pipe(
      map(result => deleteLocationSuccess()),
      catchError(err => of(deleteLocationFailure({error: 'Failed to delete location'})))
    )),
  ));

  refreshOnChange$ = createEffect(() => this.actions$.pipe(
    ofType(createLocationSuccess, updateLocationSuccess, deleteLocationSuccess),
    map(action => loadLocations())
  ));

  openModal$ = createEffect(() => this.actions$.pipe(
    ofType(openLocationModal),
    exhaustMap(action => this.modalService.presentLocationModal(action.location)),
    filter(result => !!result.data),
    map(result => saveLocation({location: result.data}))
  ));
}
