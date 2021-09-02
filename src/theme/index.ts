import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  global: () => ({
    body: {
      color: 'black',
    },
  }),
  fonts: {
    body: 'Helvetica, sans-serif',
    heading: 'Helvetica, sans-serif',
    mono: 'monospace',
  },
  colors: {
    main: 'red',
    secondary: 'blue',
    accent: 'green',
  },
});

export default customTheme;
