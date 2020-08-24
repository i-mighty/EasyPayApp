import { all, fork } from 'redux-saga/effects';
import { appNotificationSaga } from '@src/stores/appNotification';
import { quoteSaga } from '@src/stores/quote';
import { qrCodeSaga } from '@src/stores/qrCode';

export default function* rootSaga() {
  yield all([fork(appNotificationSaga), fork(quoteSaga), fork(qrCodeSaga)]);
}
