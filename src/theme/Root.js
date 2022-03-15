import React, { useEffect, useRef } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useHistory } from '@docusaurus/router';
import * as Fathom from 'fathom-client';
import { defaultTheme } from './themes';

import './sandpack.css';

export default function Root({ children }) {
  const history = useHistory();
  const pathname = useRef(history?.location?.pathname);

  useEffect(() => {
    Fathom.load('LXMRMWLB');

    return history.listen((location) => {
      if (location.pathname !== pathname.current) {
        Fathom.trackPageview({ url: `https://reactflow.dev${location.pathname}` });
      }
      pathname.current = location.pathname;
    });
  }, []);

  return (
    <ChakraProvider resetCSS={false} theme={defaultTheme}>
      {children}
    </ChakraProvider>
  );
}
