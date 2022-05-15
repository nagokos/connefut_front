import { Box, Image } from '@chakra-ui/react';
import { FC, memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Header } from './components/uiGroup';
import { routes } from './router/Router';

export const App: FC = memo(() => {
  const routing = useRoutes(routes());

  const isNeedHeader = (): boolean => {
    return location.pathname === '/';
  };

  return (
    <Box>
      {isNeedHeader() && (
        <Suspense
          fallback={
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minH="100vh"
            >
              <Image src="/src/assets/img/logo.png" w={14} />
            </Box>
          }
        >
          <Header />
        </Suspense>
      )}
      <Box as="main">{routing}</Box>
    </Box>
  );
});
