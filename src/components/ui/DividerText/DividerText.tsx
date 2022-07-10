import { Box, Divider } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  displayName: string;
};

export const DividerText: FC<Props> = memo((props) => {
  const { displayName } = props;

  return (
    <Box display="flex" alignItems="center">
      <Divider borderColor="blackAlpha.300" />
      <Box textAlign="center" fontSize={12} w={60} color="blackAlpha.600">
        {displayName}
      </Box>
      <Divider borderColor="blackAlpha.300" />
    </Box>
  );
});
