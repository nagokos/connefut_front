import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineArticle } from 'react-icons/md';

export const Recruitments: FC = memo(() => {
  return (
    <Box display="flex" alignItems="center" color="black" cursor="pointer">
      <Box fontSize={20} color="primary.main">
        <MdOutlineArticle />
      </Box>
      <Box ml={3} fontSize={21}>
        Recruitments
      </Box>
    </Box>
  );
});
