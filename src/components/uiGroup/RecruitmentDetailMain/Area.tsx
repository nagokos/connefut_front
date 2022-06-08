import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  prefName?: string;
  place?: string;
};

export const Area: FC<Props> = memo((props) => {
  const { prefName, place } = props;

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" fontSize={14} minW={130}>
        <Box mr={1}>■</Box>
        <Box>{place ? 'エリア・会場' : 'エリア'}</Box>
      </Box>
      <Box
        fontFamily="ヒラギノ角ゴシック"
        bg="primary.light"
        fontSize={14}
        px={2}
        py={1}
        rounded="md"
      >
        {place ? `${prefName} ・ ${place}` : prefName}
      </Box>
    </Box>
  );
});
