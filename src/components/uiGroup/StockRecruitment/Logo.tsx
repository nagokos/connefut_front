import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineArticle } from 'react-icons/md';

export const Logo: FC = memo(() => {
  return (
    <Box
      bg="primary.light"
      w={14}
      h={14}
      borderRadius="xl"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box color="primary.main" fontSize={27}>
        <MdOutlineArticle />
      </Box>
    </Box>
  );
});
