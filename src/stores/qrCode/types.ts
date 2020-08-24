// export interface QState {
export interface QrCodeState {
  // You'll have to edit this
  QrCode: object;
}

export enum QrCodeActionTypes {
  FETCH_QR_CODE = 'FETCH_QR_CODE',
  FETCH_QR_CODE_SUCCESS = 'FETCH_QR_CODE_SUCCESS',
  FETCH_QR_CODE_ERROR = 'FETCH_QR_CODE_ERROR',

  STORE_QR_CODE = 'STORE_QR_CODE',
}

interface FetchQrCodeRequestAction {
  type: QrCodeActionTypes.FETCH_QR_CODE;
}

interface StoreQrCodeAction {
  type: QrCodeActionTypes.STORE_QR_CODE;
  payload: QrCodeState;
}

interface FetchQrCodeSuccessAction {
  type: QrCodeActionTypes.FETCH_QR_CODE_SUCCESS;
  payload: QrCodeState;
}

interface FetchQrCodeErrorAction {
  type: QrCodeActionTypes.FETCH_QR_CODE_ERROR;
}

export type QrCodeActions =
  | FetchQrCodeRequestAction
  | FetchQrCodeSuccessAction
  | FetchQrCodeErrorAction
  | StoreQrCodeAction;
