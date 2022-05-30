import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineEventNote } from 'react-icons/md';

export const Applies: FC = memo(() => {
  return (
    <Box
      cursor="pointer"
      display="flex"
      alignItems="center"
      color="blackAlpha.600"
      _hover={{ color: 'black' }}
    >
      <Box fontSize={20} color="primary.main">
        <MdOutlineEventNote />
      </Box>
      <Box ml={3} fontSize={21}>
        Applies
      </Box>
    </Box>
  );
});
