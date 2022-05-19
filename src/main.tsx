import { Box, ChakraProvider, Image } from '@chakra-ui/react';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'urql';
import { App } from './App';
import { theme } from './assets/theme/theme';
import { client } from './urql/index';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <Provider value={client}>
        <ChakraProvider theme={theme}>
          <Suspense
            fallback={
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minH="100vh"
              >
                <Image src="/src/assets/img/logo.png" w={12} />
              </Box>
            }
          >
            <App />
          </Suspense>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  );
}
