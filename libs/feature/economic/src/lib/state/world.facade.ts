import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadedToPage, loadingWorlds, maxPages, worldLocs} from "./world.selectors";
import {WorldActions} from "./world.actions";

@Injectable({
  providedIn: 'root'
})
export class WorldFacade {

  loadingWorlds$ = this.worldStore.select(loadingWorlds);
  currentWorldLocs$ = this.worldStore.select(worldLocs);
  loadedToPage$ = this.worldStore.select(loadedToPage);
  maxPages$ = this.worldStore.select(maxPages);

  constructor(private worldStore: Store) { }

  refreshWorldLocs() {
    this.worldStore.dispatch(WorldActions.loadFreshWorlds());
  }

  loadWorldLocPage(page: number) {
    this.worldStore.dispatch(WorldActions.loadWorldPage({page: page}))
  }
}
