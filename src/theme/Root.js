import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from './themes';

import './sandpack.css';

export default function Root({ children }) {
  return (
    <ChakraProvider resetCSS={false} theme={defaultTheme}>
      {children}
    </ChakraProvider>
  );
}
