import { Box, Text } from '@chakra-ui/react';
import { FC, memo, ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  displayName: string;
};

export const RecruitmentTag: FC<Props> = memo((props) => {
  const { icon, displayName } = props;

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
        color="primary.main"
        border="1px solid #eceff1"
      >
        {icon}
      </Box>
      <Text fontSize={11} fontFamily="ヒラギノ角ゴシック">
        {displayName}
      </Text>
    </Box>
  );
});
