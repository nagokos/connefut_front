import { FC, memo, useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { graphql } from 'relay-runtime';
import { HomeView } from '../views';
import { Home_GetSearchRecruitmentsQuery } from './__generated__/Home_GetSearchRecruitmentsQuery.graphql';

export const recruitmentsQuery = graphql`
  query Home_GetSearchRecruitmentsQuery($first: Int!, $after: String) {
    ...RecruitmentCardList_recruitment @arguments(first: $first, after: $after)
  }
`;

export const Home: FC = memo(() => {
  const [searchRecruitmentsQueryRef, loadSearchRecruitmentsQuery] =
    useQueryLoader<Home_GetSearchRecruitmentsQuery>(recruitmentsQuery);

  useEffect(() => {
    loadSearchRecruitmentsQuery({ first: 10 });
  }, []);

  if (!searchRecruitmentsQueryRef) return null;

  return <HomeView queryRef={searchRecruitmentsQueryRef} />;
});
