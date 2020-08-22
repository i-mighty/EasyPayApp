import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '@src/stores';
import { fetchQuote } from '@src/stores/quote/actions';
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
  const { author, quote, title } = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchQuote());
  }, []);
  const onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  };
  return (
    <CenteredView>
      <QRCodeScanner
        onRead={onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>
          </Text>
        }
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
