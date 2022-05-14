import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useRoutes } from 'react-router-dom';
import { Header } from './components/uiGroup';
import { routes } from './router/Router';

export const App: FC = memo(() => {
  const routing = useRoutes(routes());

  return (
    <Box>
      <Header />
      <Box as="main">{routing}</Box>
    </Box>
  );
});
