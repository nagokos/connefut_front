import { Button } from '@chakra-ui/react';
import { FC, memo } from 'react';

export const MessageButton: FC = memo(() => {
  return (
    <Button
      bg="white"
      color="primary.main"
      border="1px solid"
      borderColor="primary.50"
      boxShadow="sm"
      fontSize={10}
      px={3}
      h={8}
      _hover={{
        bg: 'primary.light',
      }}
      _active={{
        bg: 'primary.light',
      }}
      _focus={{
        boxShadow: 'sm',
      }}
    >
      メッセージ
    </Button>
  );
});
