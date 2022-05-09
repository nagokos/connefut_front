import { Box, Divider, HStack, Spacer } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { AvatarMenu } from './Menu';
import { Notification } from './Notification';
import { Search } from './Search';
import { Title } from './Title';

export const Header: FC = memo(() => {
  return (
    <header>
      <Box maxW={1155} mx="auto" minH={70} display="flex" alignItems="center">
        <Box display="flex" alignItems="center" cursor="pointer">
          <Title />
        </Box>
        <Spacer />
        <HStack spacing={4}>
          <Box>
            <Search />
          </Box>
          <Box>
            <Notification />
          </Box>
          <Box>
            <AvatarMenu />
          </Box>
        </HStack>
      </Box>
      <Divider borderColor="#ebf2f2" />
    </header>
  );
});
