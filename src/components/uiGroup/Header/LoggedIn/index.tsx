import { HStack } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { AvatarMenu } from './Menu';
import { Message } from './Message';
import { Notification } from './Notification';

export const LoggedIn: FC = memo(() => {
  return (
    <HStack spacing={5}>
      <Message />
      <Notification />
      <AvatarMenu />
    </HStack>
  );
});
