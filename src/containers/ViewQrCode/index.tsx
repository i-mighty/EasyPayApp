import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import QuoteItem from '@src/components/Quote/QuoteItem';
import { useSelector } from '@src/stores';
import { fetchQuote } from '@src/stores/quote/actions';
import CenteredView from '@src/components/General/CenteredView';

const Quote = () => {
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  const { author, quote, title } = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuote());
  }, []);
  return (
    <CenteredView>
      <QRCode
        value="Just some string value"
        logo={{ uri: base64Logo }}
        size={PixelRatio.get() * 60}
        logoBackgroundColor="transparent"
      />
      <Text style={styles.bottomText}>Scan QR Code</Text>
    </CenteredView>
  );
};

let styles = StyleSheet.create({
  bottomText: {
    marginTop: 50,
  },
});

export default Quote;
