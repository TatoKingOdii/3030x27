import { TestBed } from '@angular/core/testing';

import { WeatherFacade } from './weather.facade';

describe('WeatherService', () => {
  let service: WeatherFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
