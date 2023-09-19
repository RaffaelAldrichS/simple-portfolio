// import React from 'react';
import QRCode from 'qrcode.react';
import InputUrl from './components/InputUrl';
import {useState} from 'react';

const App = () => {
  const [inputText, setInputText] = useState('');
  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div className="app">
      <h1 className="code-title">Qr Code Generator</h1>
      <div className="qrcode-wrapper">
        <InputUrl handleChange={handleChange} inputTextValue={inputText} />
        <QRCode value={inputText} size={300} />
      </div>
    </div>
  );
};

export default App;
