import { Box, Image } from '@chakra-ui/react';
import { FC, memo, Suspense, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Header } from './components/uiGroup';
import { currentUserQuery } from './recoil/user';
import { routes } from './router/Router';

export const App: FC = memo(() => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const currentUser = useRecoilValue(currentUserQuery);

  const routing = useRoutes(routes(!!currentUser));

  const isNeedHeader = (): boolean => {
    return (
      location.pathname === '/' ||
      location.pathname.includes('/dashboard') ||
      (location.pathname.includes('/recruitments') &&
        !location.pathname.includes('/new') &&
        !location.pathname.includes('/edit')) ||
      location.pathname.includes('/messages')
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
