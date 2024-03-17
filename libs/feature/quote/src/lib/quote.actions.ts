import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const QuoteActions = createActionGroup({
  source: 'Quote',
  events: {
    'Get Quote': emptyProps(),
    'Get Quotes Success': props<{ quote: string }>(),
    'Get Quotes Failure': props<{ error: string }>(),
  }
});
