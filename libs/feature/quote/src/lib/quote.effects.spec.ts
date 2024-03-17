import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { QuoteEffects } from './quote.effects';

describe('QuoteEffects', () => {
  let actions$: Observable<any>;
  let effects: QuoteEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuoteEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(QuoteEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
