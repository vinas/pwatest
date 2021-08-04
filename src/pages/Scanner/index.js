import React, { useEffect } from 'react';
import Quagga from 'quagga';
import PropTypes from 'prop-types';

import { validateIsbn } from '../../services/books';

import { Container, Video, ScanMarker } from './styles';

const Scanner = ({ onScan }) => {
  let scannerAttempts = 0;

  const onDetected = (result) => {
    Quagga.offDetected(onDetected);
    const isbn = result.codeResult.code;
    if (validateIsbn(isbn)) {
      onScan(isbn);
      return;
    }
    if (scannerAttempts > 4) {
      console.log('ERROR: invalid barcode');
      return;
    }
    scannerAttempts += 1;
    Quagga.onDetected(onDetected);
  };

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#video'),
            constraints: {
              width: 640,
              height: 480,
              facingMode: 'environment',
            },
          },
          numOfWorkers: navigator.hardwareConcurrency,
          locate: true,
          decoder: {
            readers: ['ean_reader'],
          },
        },
        (err) => {
          if (err) {
            alert(
              'Error while opening the camera: please allow camera to be used.'
            );
            return;
          }
          Quagga.start();
        }
      );
      Quagga.onDetected(onDetected);
    }
  });

  return (
    <>
      <Video id="video" />
      <Container>
        <ScanMarker>
          <img
            src="../../../assets/images/markers.png"
            alt="Reading markers"
            width="1000"
            height="400"
          />
          <p className="label">Point to the barcode</p>
        </ScanMarker>
        <img
          className="logo"
          src="../../../assets/images/logo.png"
          alt="Reading markers"
          width="100"
          height="100"
        />
      </Container>
    </>
  );
};

Scanner.propTypes = {
  onScan: PropTypes.func.isRequired,
};

export default Scanner;
