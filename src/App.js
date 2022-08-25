import React from 'react';
import {StatusBar} from 'react-native';
import Calculadora from './Calculadora';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Calculadora />
    </>
  );
};

export default App;
