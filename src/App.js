import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import QRCode from "react-qr-code";
import { toJpeg } from 'html-to-image';

import './App.css';

function App() {
  const [text, setText] = useState('');

  const qrcode = useRef(null);

  const downloadQRCode = () => {
    toJpeg(qrcode.current, { quality: 0.95 })
      .then((dataUrl) => {
        var link = document.createElement('a');
        link.download = 'qrcode.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }

  return (
    <div className="app">
      <h1>Text To QRCode</h1>
      <div src={logo} className="qr-code" ref={qrcode}>
        <QRCode value={text} />
        <p className="text-qrcode">
          {text}
        </p>
      </div>
      <input placeholder='Type your QR Code content here...' className='text' type="text" value={text} onChange={(e) => { setText(e.target.value); }} />
      <button type='button' onClick={downloadQRCode} className="button" >
        Download your QRCode
      </button>
    </div>
  );
}

export default App;
