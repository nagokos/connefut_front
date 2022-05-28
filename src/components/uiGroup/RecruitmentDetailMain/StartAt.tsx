import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

type Props = {
  startAt?: string;
};

export const StartAt: FC<Props> = memo((props) => {
  const { startAt } = props;

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" fontSize={14} minW={130}>
        <Box mr={1}>■</Box>
        <Box>開催日時</Box>
      </Box>
      <Box
        bg="primary.light"
        fontSize={14}
        px={2}
        py={1}
        rounded="md"
        fontFamily="ヒラギノゴシック"
      >
        {format(new Date(String(startAt)), 'yyyy/MM/dd（E）HH:mm', {
          locale: ja,
        })}
      </Box>
    </Box>
  );
});
