import { createFeatureSelector, createSelector } from '@ngrx/store';
import {WORLD_FEATURE_KEY, worldAdapter, WorldState} from "./world.reducer";

export const {
  selectIds: selectWorldIds,
  selectEntities: selectWorldEntities,
  selectAll: selectAllWorlds,
  selectTotal: selectWorldTotal
} = worldAdapter.getSelectors();

export const worldFeature = createFeatureSelector<WorldState>(WORLD_FEATURE_KEY);

export const loadingWorlds = createSelector(
  worldFeature, (state: WorldState) => state.loadingWorld
);

export const loadedToPage = createSelector(
  worldFeature, (state: WorldState) => state.loadedToPage
)

export const maxPages = createSelector(
  worldFeature, (state: WorldState) => state.maxPages
)

export const worldLocs = createSelector(
  worldFeature, selectAllWorlds
)
