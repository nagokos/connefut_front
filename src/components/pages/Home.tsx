import { FC, memo, useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { graphql } from 'relay-runtime';
import { Home_SearchRecruitmentsQuery } from './__generated__/Home_SearchRecruitmentsQuery.graphql';
import { HomeView } from '../views';

export const recruitmentsQuery = graphql`
  query Home_SearchRecruitmentsQuery($first: Int!, $after: String) {
    ...RecruitmentCardList_recruitment @arguments(first: $first, after: $after)
    competitions {
      ...RecruitmentListSearch_competitions
    }
    prefectures {
      ...RecruitmentListSearch_prefectures
    }
    ...RecruitmentListSearch_tags
  }
`;

export const Home: FC = memo(() => {
  const [searchRecruitmentsQueryRef, loadSearchRecruitmentsQuery] =
    useQueryLoader<Home_SearchRecruitmentsQuery>(recruitmentsQuery);

  useEffect(() => {
    loadSearchRecruitmentsQuery({ first: 10 });
  }, []);

  if (!searchRecruitmentsQueryRef) return null;

  return <HomeView queryRef={searchRecruitmentsQueryRef} />;
});
