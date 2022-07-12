import { Box, CircularProgress } from '@chakra-ui/react';
import { FC, memo, Suspense, useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { graphql } from 'relay-runtime';
import { DashboardRecruitmentsView } from '../views';
import { DashboardRecruitments_CurrentUserRecruitmentsQuery } from './__generated__/DashboardRecruitments_CurrentUserRecruitmentsQuery.graphql';

export const currentUserRecruitmentsQuery = graphql`
  query DashboardRecruitments_CurrentUserRecruitmentsQuery(
    $first: Int!
    $after: String
  ) {
    ...RecruitmentSelfCreatedList_recruitment
      @arguments(first: $first, after: $after)
  }
`;

export const DashboardRecruitments: FC = memo(() => {
  const [currentUserRecruitmentsQueryRef, loadCurrentUserRecruitmentsQuery] =
    useQueryLoader<DashboardRecruitments_CurrentUserRecruitmentsQuery>(
      currentUserRecruitmentsQuery
    );

  useEffect(() => {
    loadCurrentUserRecruitmentsQuery({
      first: 20,
    });
  }, []);

  if (!currentUserRecruitmentsQueryRef) return null;

  return (
    <Suspense
      fallback={
        <Box textAlign="center">
          <CircularProgress size={9} isIndeterminate color="primary.main" />
        </Box>
      }
    >
      <DashboardRecruitmentsView queryRef={currentUserRecruitmentsQueryRef} />
    </Suspense>
  );
});
