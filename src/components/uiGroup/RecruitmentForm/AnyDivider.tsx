import { Box, Divider, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

export const AnyDivider: FC = memo(() => {
  return (
    <Box display="flex" mt={9} mb={6} alignItems="center">
      <Divider borderColor="blackAlpha.300" />
      <Text textAlign="center" fontSize={12} w={60} color="blackAlpha.600">
        任意項目
      </Text>
      <Divider borderColor="blackAlpha.300" />
    </Box>
  );
});
