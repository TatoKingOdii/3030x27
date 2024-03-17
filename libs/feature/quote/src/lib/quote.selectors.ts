import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QUOTE_FEATURE_KEY, QuoteState } from './quote.reducer';

export const quoteFeature = createFeatureSelector<QuoteState>(QUOTE_FEATURE_KEY);

export const currentQuote = createSelector(
  quoteFeature,
  (state: QuoteState) => state.currentQuote
);
