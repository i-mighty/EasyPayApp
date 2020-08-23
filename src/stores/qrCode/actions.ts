import { action } from 'typesafe-actions';
import { QrCodeActionTypes, QrCodeState } from './types';

export const fetchQrCode = () => action(QrCodeActionTypes.FETCH_QR_CODE);

export const fetchQrCodeSuccess = (payload: QuoteState) => {
  return action(QrCodeActionTypes.FETCH_QR_CODE_SUCCESS, payload);
};

export const storeQrCode = (payload: QuoteState) => {
  return action(QrCodeActionTypes.STORE_QR_CODE, payload);
};
