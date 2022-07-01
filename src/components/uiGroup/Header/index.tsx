import { Box, Divider, HStack, Spacer } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { currentUserQuery } from '../../../recoil/user';
import { AppIn } from './AppIn';
import { LoggedIn } from './LoggedIn';
import { Search } from './Search';

import { Title } from './Title';

export const Header: FC = memo(() => {
  const location = useLocation();

  const currentUser = useRecoilValue(currentUserQuery);

  return (
    <>
      <header>
        <Box maxW={1120} mx="auto" minH={70} display="flex" alignItems="center">
          <Title />
          <Spacer />
          <HStack spacing={5}>
            <Search />
            {currentUser ? <LoggedIn /> : <AppIn />}
          </HStack>
        </Box>
        {!location.pathname.includes('/messages') && (
          <Divider borderColor="#ebf2f2" />
        )}
      </header>
    </>
  );
});
