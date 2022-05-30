import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Edit } from './Edit';
import { Trash } from './Trash';

export const Actions: FC = memo(() => {
  return (
    <Box display="flex" alignItems="center">
      <Edit />
      <Trash />
    </Box>
  );
});
