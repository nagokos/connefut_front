import { Box } from '@chakra-ui/react';
import { FC, memo, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Header } from './components/ui';
import { viewerQuery } from './recoil/user';
import { routes } from './router/Router';

export const App: FC = memo(() => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const currentUser = useRecoilValue(viewerQuery);

  const routing = useRoutes(routes(!!currentUser));

  const isNeedHeader = (): boolean => {
    return (
      location.pathname === '/' ||
      location.pathname.includes('/dashboard') ||
      (location.pathname.includes('/recruitments') &&
        !location.pathname.includes('/new') &&
        !location.pathname.includes('/edit')) ||
      location.pathname.includes('/messages') ||
      location.pathname.includes('/id')
    );
  };

  return (
    <Box>
      {isNeedHeader() && <Header />}
      <Box as="main">{routing}</Box>
    </Box>
  );
});
