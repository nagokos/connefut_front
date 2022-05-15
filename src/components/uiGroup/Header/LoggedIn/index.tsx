import { FC, memo } from 'react';
import { User } from '../../../../generated/graphql';
import { AvatarMenu } from './Menu';
import { Notification } from './Notification';

type Props = {
  user: User;
};

export const LoggedIn: FC<Props> = memo((props) => {
  const { user } = props;

  return (
    <>
      <Notification />
      <AvatarMenu user={user} />
    </>
  );
});
