import { Button } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useFragment, useMutation } from 'react-relay';
import { useParams } from 'react-router-dom';
import { graphql } from 'relay-runtime';
import { UserFollow_feedbackFollow$key } from './__generated__/UserFollow_feedbackFollow.graphql';
import { UserFollow_FollowMutation } from './__generated__/UserFollow_FollowMutation.graphql';
import { UserFollow_UnFollowMutation } from './__generated__/UserFollow_UnFollowMutation.graphql';

const feedbackFollowFragment = graphql`
  fragment UserFollow_feedbackFollow on FeedbackFollow {
    viewerDoesFollow
  }
`;

const followMutation = graphql`
  mutation UserFollow_FollowMutation($userId: ID!) {
    follow(userId: $userId) {
      ...UserFollow_feedbackFollow
    }
  }
`;

const unFollowMutation = graphql`
  mutation UserFollow_UnFollowMutation($userId: ID!) {
    unFollow(userId: $userId) {
      ...UserFollow_feedbackFollow
    }
  }
`;

type Props = {
  feedbackFollow: UserFollow_feedbackFollow$key;
};

export const UserFollow: FC<Props> = memo((props) => {
  const { feedbackFollow } = props;

  const { userId } = useParams();

  const feedbackFollowData = useFragment<UserFollow_feedbackFollow$key>(
    feedbackFollowFragment,
    feedbackFollow
  );

  const [commitFollow, isInFlightFollow] =
    useMutation<UserFollow_FollowMutation>(followMutation);

  const [commitUnFollow, isInFlightUnFollow] =
    useMutation<UserFollow_UnFollowMutation>(unFollowMutation);

  const follow = () => {
    commitFollow({
      variables: {
        userId: String(userId),
      },
    });
  };

  const unFollow = () => {
    commitUnFollow({
      variables: {
        userId: String(userId),
      },
    });
  };

  return (
    <>
      {feedbackFollowData.viewerDoesFollow ? (
        <Button
          mt={3.5}
          size="md"
          variant="outline"
          w={28}
          borderColor="blackAlpha.300"
          rounded="full"
          _hover={{
            background: 'black',
          }}
          _active={{
            background: 'black',
          }}
          background="black"
          fontSize={13}
          color="white"
          onClick={unFollow}
        >
          フォロー中
        </Button>
      ) : (
        <Button
          mt={3.5}
          size="md"
          variant="outline"
          w={28}
          borderColor="blackAlpha.300"
          rounded="full"
          _hover={{
            background: 'blackAlpha.50',
          }}
          _active={{
            background: 'blackAlpha.50',
          }}
          background="white"
          fontSize={13}
          onClick={follow}
        >
          フォロー
        </Button>
      )}
    </>
  );
});
