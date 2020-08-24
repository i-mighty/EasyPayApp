import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '@src/stores';
import { storeQrCode } from '@src/stores/qrCode/actions';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QuoteItem from '@src/components/Quote/QuoteItem';
import CenteredView from '@src/components/General/CenteredView';
import { RNCamera } from 'react-native-camera';

const Quote = () => {
  const dispatch = useDispatch();
  const [QrCode, setQrCode] = useState('');

  const onSuccess = async (e) => {
    await setQrCode(JSON.stringify(e.data));
    dispatch(storeQrCode(e.data));
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  };

  return (
    <CenteredView>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={<Text>Qr Code Scanner</Text>}
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Capture</Text>
          </TouchableOpacity>
        }
      />
    </CenteredView>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default Quote;
