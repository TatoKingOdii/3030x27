import { createReducer, on } from '@ngrx/store';
import { QuoteActions } from './quote.actions';

export const QUOTE_FEATURE_KEY = 'quote';

export interface QuoteState {
  currentQuote: string
}

export const initialState: QuoteState = {
  currentQuote: ''
};

export const quoteReducer = createReducer(
  initialState,
  on(QuoteActions.getQuotesSuccess, (state, {quote}) => ({...state, currentQuote: quote})),
  on(QuoteActions.getQuotesFailure, state => ({...state, currentQuote: 'I wish I knew a quote!'}))
);

