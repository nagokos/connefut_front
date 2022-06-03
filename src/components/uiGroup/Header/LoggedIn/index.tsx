import { HStack } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { User } from '../../../../generated/graphql';
import { AvatarMenu } from './Menu';
import { Message } from './Message';
import { Notification } from './Notification';

type Props = {
  user: User;
};

export const LoggedIn: FC<Props> = memo((props) => {
  const { user } = props;

  return (
    <HStack spacing={5}>
      <Message />
      <Notification />
      <AvatarMenu user={user} />
    </HStack>
  );
});
