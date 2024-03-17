import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuoteActions } from './quote.actions';
import { currentQuote } from './quote.selectors';

@Injectable({
  providedIn: 'root'
})
export class QuoteFacade {

  currentQuote$ = this.store.select(currentQuote);

  constructor(private store: Store) { }

  requestNewQuote() {
    this.store.dispatch(QuoteActions.getQuote());
  }
}
