import { Avatar, Box, Button, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

export const RecruitmentDetailUser: FC = memo(() => {
  return (
    <Box
      px={5}
      py={5}
      mt={7}
      bg="white"
      boxShadow="0 2px 4px #4385bb12"
      rounded="lg"
    >
      <Box display="flex" alignItems="center">
        <Avatar mr={2} w={16} h={16} />
        <Stack direction="column" spacing="0" fontSize={12}>
          <Text fontWeight="600" fontSize={15}>
            kosuda
          </Text>
          <Button
            size="sm"
            bg="white"
            rounded="full"
            color="primary.main"
            borderColor="primary.main"
            _hover={{
              bg: 'primary.50',
            }}
            fontSize={12}
            position="relative"
            h={7}
            top={1}
            variant="outline"
          >
            Follow
          </Button>
        </Stack>
      </Box>
      <Text mt={2.5} fontSize={14} color="blackAlpha.700">
        {' '}
        フリーランスでwebエンジニアやらせてもらってます。
        メインスタックはLaravel / Vue / Nextなど AWS
        SAAとりました============================================================================
      </Text>
    </Box>
  );
});
