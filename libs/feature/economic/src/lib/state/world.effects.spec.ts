import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WorldEffects } from './world.effects';

describe('WorldEffects', () => {
  let actions$: Observable<any>;
  let effects: WorldEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WorldEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(WorldEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
