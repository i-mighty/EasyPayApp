import { action } from 'typesafe-actions';
import { QrCodeActionTypes, QuoteState } from './types';

export const fetchQrCode = () => action(QuoteActionTypes.FETCH_QR_CODE);

export const fetchQrCodeSuccess = (payload: QuoteState) => {
  return action(QuoteActionTypes.FETCH_QR_CODE_SUCCESS, payload);
};
