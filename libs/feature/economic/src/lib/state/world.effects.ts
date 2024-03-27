import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {WorldActions} from "./world.actions";
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {WorldService} from "./world.service";


@Injectable()
export class WorldEffects {

  constructor(private actions$: Actions, private worldService: WorldService) {}

  worldRefresh$ = createEffect(() => this.actions$.pipe(
    ofType(WorldActions.loadFreshWorlds),
    exhaustMap(() => this.worldService.getFreshWorld().pipe(
      map(result => WorldActions.loadFreshWorldsSuccess({
        data: result.worldLocs,
        totalPages: result.metadata.pages})),
      catchError(err =>  of(WorldActions.loadFreshWorldsFailure({error: 'Failed to refresh world data'})))
    ))
  ));

  worldPage$ = createEffect(() => this.actions$.pipe(
    ofType(WorldActions.loadWorldPage),
    exhaustMap((action) => this.worldService.getWorldPage(action.page).pipe(
      map(result => WorldActions.loadWorldPageSuccess({
        data: result.worldLocs,
        totalPages: result.metadata.pages,
        currentPage: result.metadata.page})),
      catchError(err => of(WorldActions.loadWorldPageFailure({error: 'Failed to load page of world data'})))
    ))
  ));
}
