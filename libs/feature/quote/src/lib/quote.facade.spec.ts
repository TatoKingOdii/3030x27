import { TestBed } from '@angular/core/testing';

import { QuoteFacade } from './quote.facade';

describe('QuoteFacadeService', () => {
  let service: QuoteFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
