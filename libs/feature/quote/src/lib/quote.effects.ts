import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { QuoteActions } from './quote.actions';
import {QuoteService} from "./quote.service";



@Injectable()
export class QuoteEffects {

  constructor(private actions$: Actions, private quoteService: QuoteService) {}

  getQuote$ = createEffect(() => this.actions$.pipe(
    ofType(QuoteActions.getQuote),
    exhaustMap(() => this.quoteService.getRandomQuote().pipe(
      tap(response => console.log('Quote: ' + response?.quote)),
      map(response => QuoteActions.getQuotesSuccess({quote: response?.quote})),
      catchError(err => of(QuoteActions.getQuotesFailure({error: 'Failed while getting a new quote!'}))))
    )),
  );
}
