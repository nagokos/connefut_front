import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      main: '#009688',
      500: '#f0f5f4',
    },
  },
  shadows: {
    menu: '0 3px 12px -1px #04253f40;',
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
});
