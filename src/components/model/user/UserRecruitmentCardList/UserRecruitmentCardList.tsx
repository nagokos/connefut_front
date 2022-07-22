import { SimpleGrid } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { usePaginationFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { User_UserQuery } from '../../../pages/__generated__/User_UserQuery.graphql';
import { UserRecruitmentCard } from '../UserRecruitmentCard/UserRecruitmentCard';
import { UserRecruitmentCardList_user$key } from './__generated__/UserRecruitmentCardList_user.graphql';

const recruitmentsFragment = graphql`
  fragment UserRecruitmentCardList_user on User
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 10 }
    after: { type: "String" }
  )
  @refetchable(queryName: "UserRecruitmentsQuery") {
    recruitments(first: $first, after: $after)
      @connection(key: "UserRecruitmentCard__recruitments") {
      __id
      edges {
        cursor
        node {
          ...UserRecruitmentCard_recruitment
        }
      }
    }
  }
`;

type Props = {
  user: UserRecruitmentCardList_user$key;
};

export const UserRecruitmentCardList: FC<Props> = memo((props) => {
  const { user } = props;

  const { data, loadNext, hasNext } = usePaginationFragment<
    User_UserQuery,
    UserRecruitmentCardList_user$key
  >(recruitmentsFragment, user);

  return (
    <SimpleGrid mt={8} columns={3} spacing={8}>
      {data.recruitments?.edges.map((edge) => (
        <UserRecruitmentCard key={edge.cursor} recruitment={edge.node} />
      ))}
    </SimpleGrid>
  );
});
