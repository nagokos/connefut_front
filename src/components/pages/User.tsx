import { FC, memo, useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { useLocation, useParams } from 'react-router-dom';
import { graphql } from 'relay-runtime';
import { UserView } from '../views';
import { User_UserQuery } from './__generated__/User_UserQuery.graphql';

export const userQuery = graphql`
  query User_UserQuery($id: ID!, $first: Int!, $after: String) {
    user(id: $id) {
      ...UserInformation_user
      ...UserRecruitmentCardList_user @arguments(first: $first, after: $after)
    }
    checkFollowed(userId: $id) {
      ...UserFollow_feedbackFollow
    }
  }
`;

export const User: FC = memo(() => {
  const { userId } = useParams();

  const location = useLocation();

  const [userQueryRef, loadUserQuery] =
    useQueryLoader<User_UserQuery>(userQuery);

  useEffect(() => {
    loadUserQuery({ id: String(userId), first: 10 });
  }, [location]);

  if (!userQueryRef) return null;

  return <UserView queryRef={userQueryRef} />;
});
