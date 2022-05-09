import { Box, Divider, Image, Spacer, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { IoIosSearch } from 'react-icons/io';

export const Header: FC = memo(() => {
  return (
    <header>
      <Box maxW={1155} mx="auto" minH={70} display="flex" alignItems="center">
        <Box display="flex" alignItems="center">
          <Image src="/src/assets/img/logo.png" alt="app logo" w={8} mr={1.5} />
          <Text fontFamily="Nunito" fontWeight="bold" fontSize={25}>
            Connefut
          </Text>
        </Box>
        <Spacer />
        <Box display="flex" alignItems="center">
          <IoIosSearch />
        </Box>
      </Box>
      <Divider borderColor="#ebf2f2" />
    </header>
  );
});
