import { Box, Button, Divider, HStack, Spacer } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Search } from './Search';

import { Title } from './Title';

export const Header: FC = memo(() => {
  return (
    <header>
      <Box maxW={1120} mx="auto" minH={70} display="flex" alignItems="center">
        <Box display="flex" alignItems="center" cursor="pointer">
          <Title />
        </Box>
        <Spacer />
        <HStack spacing={5}>
          <Box>
            <Search />
          </Box>
          {/* <Box>
            <Notification />
          </Box>
          <Box>
            <A />
          </Box> */}
          <Button variant="outline" px={3.5} h={9} size="sm" fontSize={12.5}>
            ログイン
          </Button>
          <Button fontSize={12.5} px={3.5} h={9} size="sm">
            新規登録
          </Button>
        </HStack>
      </Box>
      <Divider borderColor="#ebf2f2" />
    </header>
  );
});
