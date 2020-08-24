import { Reducer } from 'redux';
import { QrCodeState, QrCodeActions, QrCodeActionTypes } from './types';

const initialState: QrCodeState = {
  QrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..',
  listOfStoredQrCodes: [],
};

const qrCodeReducer: Reducer<QrCodeState, QrCodeActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case QrCodeActionTypes.STORE_QR_CODE: {
      const QrCode = action.payload;
      return {
        ...state,
        listOfStoredQrCodes: [...state.listOfStoredQrCodes, QrCode],
      };
    }
    case QrCodeActionTypes.FETCH_QR_CODE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default qrCodeReducer;
