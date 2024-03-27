import { TestBed } from '@angular/core/testing';

import { WorldFacade } from './world.facade';

describe('WorldService', () => {
  let service: WorldFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
