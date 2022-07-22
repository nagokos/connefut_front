import { FC, memo, useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { useParams } from 'react-router-dom';
import { graphql } from 'relay-runtime';
import { UserView } from '../views';
import { User_UserQuery } from './__generated__/User_UserQuery.graphql';

export const userQuery = graphql`
  query User_UserQuery($id: ID!, $first: Int!, $after: String) {
    user(id: $id) {
      ...UserInformation_user
      ...UserRecruitmentCardList_user @arguments(first: $first, after: $after)
    }
  }
`;

export const User: FC = memo(() => {
  const { userId } = useParams();

  const [userQueryRef, loadUserQuery] =
    useQueryLoader<User_UserQuery>(userQuery);

  useEffect(() => {
    loadUserQuery({ id: String(userId), first: 10 });
  }, []);

  if (!userQueryRef) return null;

  return <UserView queryRef={userQueryRef} />;
});
