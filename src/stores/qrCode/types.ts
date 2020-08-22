export interface QuoteState {
  // You'll have to edit this
  author: string;
  quote: string;
  title: string;
}

export enum QrCodeActionTypes {
  FETCH_QR_CODE = 'FETCH_QR_CODE',
  FETCH_QR_CODE_SUCCESS = 'FETCH_QR_CODE_SUCCESS',
  FETCH_QR_CODE_ERROR = 'FETCH_QR_CODE_ERROR',
}

interface FetchQrCodeRequestAction {
  type: QrCodeActionTypes.FETCH_QR_CODE;
}

interface FetchQrCodeSuccessAction {
  type: QrCodeActionTypes.FETCH_QR_CODE_SUCCESS;
  payload: QuoteState;
}

interface FetchQrCodeErrorAction {
  type: QrCodeActionTypes.FETCH_QR_CODE_ERROR;
}

export type QrCodeActions =
  | FetchQrCodeRequestAction
  | FetchQrCodeSuccessAction
  | FetchQrCodeErrorAction;
