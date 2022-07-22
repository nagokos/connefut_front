import { FC, memo } from 'react';
import { Avatar, Box, Button, Link, Spacer } from '@chakra-ui/react';
import { RiUserFollowLine } from 'react-icons/ri';
import { graphql } from 'relay-runtime';
import { UserInformation_user$key } from './__generated__/UserInformation_user.graphql';
import { useFragment } from 'react-relay';
import { useRecoilValue } from 'recoil';
import { viewerQuery } from '../../../../recoil/user';
import { UserFollow } from '../UserFollow/UserFollow';
import { UserFollow_feedbackFollow$key } from '../UserFollow/__generated__/UserFollow_feedbackFollow.graphql';

const userFragment = graphql`
  fragment UserInformation_user on User {
    id
    name
    avatar
  }
`;

type Props = {
  user: UserInformation_user$key;
  feedbackFollow: UserFollow_feedbackFollow$key;
};

export const UserInformation: FC<Props> = memo((props) => {
  const { user, feedbackFollow } = props;

  const userData = useFragment<UserInformation_user$key>(userFragment, user);

  const viewer = useRecoilValue(viewerQuery);

  return (
    <Box display="flex">
      <Box mr={8}>
        <Avatar w={110} h={110} src={userData.avatar} />
      </Box>
      <Box mt={3.5} mr={5}>
        <Box fontSize={23} fontWeight="bold">
          {userData.name}
        </Box>
        <Link>
          <Box
            display="flex"
            mt={3}
            alignItems="center"
            fontSize={13}
            fontFamily="ヒラギノ角ゴシック"
          >
            <Box mr={1.5}>
              <RiUserFollowLine fontSize={17} />
            </Box>
            <Box as="span" fontWeight="bold">
              33
            </Box>
            人フォロー中
          </Box>
        </Link>
      </Box>
      <Spacer />
      {userData.id === viewer?.id ? (
        <Button
          mt={3.5}
          size="sm"
          fontSize={10.5}
          h={9}
          w={24}
          variant="outline"
          color="blackAlpha.700"
          boxShadow="sm"
          _focus={{
            boxShadow: 'sm',
          }}
          borderColor="blackAlpha.50"
        >
          アカウント編集
        </Button>
      ) : (
        <>
          <UserFollow feedbackFollow={feedbackFollow} />
        </>
      )}
    </Box>
  );
});
