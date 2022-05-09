import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Header } from './components/uiGroup';

export const App: FC = memo(() => {
  return (
    <Box>
      <Header />
      <main></main>
    </Box>
  );
});
