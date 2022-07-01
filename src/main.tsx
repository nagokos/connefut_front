import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Box, ChakraProvider, Image } from '@chakra-ui/react';
import { Provider } from 'urql';
import { App } from './App';
import { theme } from './assets/theme/theme';
import { client } from './urql/index';
import { RelayEnvironment } from './RelayEnvironment';
import { RecoilRoot } from 'recoil';
import { EnvironmentKey, RecoilRelayEnvironmentProvider } from 'recoil-relay';
import { ErrorBoundary } from 'react-error-boundary';

const container = document.getElementById('root');
export const myEnvironmentKey = new EnvironmentKey('My Environment');

if (container) {
  const root = createRoot(container);

  root.render(
    <RecoilRoot>
      <RecoilRelayEnvironmentProvider
        environment={RelayEnvironment}
        environmentKey={myEnvironmentKey}
      >
        <Provider value={client}>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
              <ErrorBoundary
                fallbackRender={({ error }) => (
                  <>
                    {console.log(error)}
                    {error.message}
                  </>
                )}
              >
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
              </ErrorBoundary>
            </BrowserRouter>
          </ChakraProvider>
        </Provider>
      </RecoilRelayEnvironmentProvider>
    </RecoilRoot>
  );
}
