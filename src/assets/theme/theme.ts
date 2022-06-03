import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#E1EBE9',
      main: '#009688',
      light: '#f0f5f4',
      hover: '#007A6E',
    },
    error: {
      main: '#f42121',
    },
  },
  shadows: {
    menu: '0 3px 12px -1px #04253f40;',
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
      variants: {
        solid: () => ({
          bg: '#009688',
          color: 'white',
          _hover: {
            bg: '#007A6E',
          },
          _active: {
            bg: '#007A6E',
          },
        }),
        outline: () => ({
          bg: '#f0f5f4',
          borderColor: '#f0f5f4',
          color: 'black',
          _hover: {
            bg: '#E1EBE9',
            borderColor: '#f0f5f4',
          },
          _active: {
            bg: '#E1EBE9',
            borderColor: '#f0f5f4',
          },
        }),
      },
    },
    CloseButton: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
        _hover: {
          bg: '#f0f5f4',
        },
        _active: {
          bg: '#f0f5f4',
        },
        rounded: 'full',
      },
      variants: {
        solid: () => ({
          bg: '#009688',
          color: 'white',
          _hover: {
            bg: '#007A6E',
          },
          _active: {
            bg: '#007A6E',
          },
        }),
        outline: () => ({
          bg: '#f0f5f4',
          borderColor: '#f0f5f4',
          color: 'black',
          _hover: {
            bg: '#E1EBE9',
            borderColor: '#f0f5f4',
          },
          _active: {
            bg: '#E1EBE9',
            borderColor: '#f0f5f4',
          },
        }),
      },
    },
  },
});
