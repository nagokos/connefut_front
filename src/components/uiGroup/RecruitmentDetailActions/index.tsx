import { Box, Divider } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Apply } from './Apply';
import { Stock } from './Stock';

export const RecruitmentDetailActions: FC = memo(() => {
  return (
    <Box
      px={5}
      py={5}
      mt={7}
      bg="white"
      boxShadow="0 2px 4px #4385bb12"
      rounded="lg"
    >
      <Apply />
      <Divider my={6} />
      <Stock />
    </Box>
  );
});
