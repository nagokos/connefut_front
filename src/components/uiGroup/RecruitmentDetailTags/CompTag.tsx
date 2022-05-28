import { Box, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  compName?: string;
};

export const CompTag: FC<Props> = memo((props) => {
  const { compName } = props;

  return (
    <Box display="flex" alignItems="center" justifyContent="start">
      <Box
        bg="primary.light"
        display="flex"
        alignItems="center"
        justifyContent="center"
        as="span"
        w={9}
        h={9}
        rounded="full"
        mr={1.5}
        fontSize={18}
        border="1px solid #eceff1"
      >
        ⚽️
      </Box>
      <Text fontSize={12} fontFamily="ヒラギノゴシック">
        {compName}
      </Text>
    </Box>
  );
});
