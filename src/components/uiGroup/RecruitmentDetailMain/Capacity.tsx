import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  capacity?: number;
};

export const Capacity: FC<Props> = memo((props) => {
  const { capacity } = props;

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" fontSize={14} minW={130}>
        <Box mr={1}>■</Box>
        <Box>定員数</Box>
      </Box>
      <Box
        fontFamily="ヒラギノ角ゴシック"
        fontSize={14}
        px={2}
        py={1}
        rounded="md"
      >
        {capacity}
      </Box>
    </Box>
  );
});
