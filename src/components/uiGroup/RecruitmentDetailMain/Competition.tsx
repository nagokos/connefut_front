import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  compName?: string;
};

export const Competition: FC<Props> = memo((props) => {
  const { compName } = props;

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" fontSize={14} minW={130}>
        <Box mr={1}>■</Box>
        <Box>募集競技</Box>
      </Box>
      <Box
        bg="primary.light"
        fontFamily="ヒラギノ角ゴシック"
        fontSize={14}
        px={2}
        py={1}
        rounded="md"
      >
        {compName}
      </Box>
    </Box>
  );
});
