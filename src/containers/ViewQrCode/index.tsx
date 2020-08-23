import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import QuoteItem from '@src/components/Quote/QuoteItem';
import { useSelector } from '@src/stores';
import { fetchQrCode } from '@src/stores/qrCode/actions';
import CenteredView from '@src/components/General/CenteredView';

const QrCode = () => {
  // const [qrCode, setQrCode] = useState({});
  const { QrCode } = useSelector((state) => state.qrCode);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchQrCode());
  // }, []);
  return (
    <CenteredView>
      <QRCode
        value="Just some string value"
        logo={{ uri: QrCode }}
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

export default QrCode;
