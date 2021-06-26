import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import './services/firebase';

import './styles/global.scss';
import theme from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

