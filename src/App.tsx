import { Box, Image } from '@chakra-ui/react';
import { FC, memo, Suspense, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { Header } from './components/uiGroup';
import { useGetCurrentUserQuery } from './generated/graphql';
import { routes } from './router/Router';

export const App: FC = memo(() => {
  const [data, executeQuery] = useGetCurrentUserQuery({
    requestPolicy: 'network-only',
  });

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    executeQuery();
  }, [location]);

  const routing = useRoutes(routes(!!data.data?.getCurrentUser));

  const isNeedHeader = (): boolean => {
    return (
      location.pathname === '/' ||
      (location.pathname.includes('/recruitments') &&
        !location.pathname.includes('/new'))
    );
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
              <Image src="/src/assets/img/logo.png" w={12} />
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
