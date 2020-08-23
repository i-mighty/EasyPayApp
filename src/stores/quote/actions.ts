import { action } from 'typesafe-actions';
import { QuoteActionTypes, QuoteState } from './types';

export const fetchQuote = () => action(QuoteActionTypes.FETCH_QUOTES);

export const fetchQuoteSuccess = (payload: QuoteState) => {
  return action(QuoteActionTypes.ETCH_QUOTES_SUCCESS, payload);
};
