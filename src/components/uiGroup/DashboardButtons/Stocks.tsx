import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineBookmarkBorder } from 'react-icons/md';

export const Stocks: FC = memo(() => {
  return (
    <Box
      cursor="pointer"
      display="flex"
      alignItems="center"
      color="blackAlpha.600"
      _hover={{ color: 'black' }}
    >
      <Box fontSize={20} color="primary.main">
        <MdOutlineBookmarkBorder />
      </Box>
      <Box ml={3} fontSize={21}>
        Stocks
      </Box>
    </Box>
  );
});
