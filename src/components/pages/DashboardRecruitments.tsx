import { Box, CircularProgress } from '@chakra-ui/react';
import { FC, memo, Suspense, useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { graphql } from 'relay-runtime';
import { DashboardRecruitmentsView } from '../views';
import { DashboardRecruitments_ViewerRecruitmentsQuery } from './__generated__/DashboardRecruitments_ViewerRecruitmentsQuery.graphql';

export const viewerRecruitmentsQuery = graphql`
  query DashboardRecruitments_ViewerRecruitmentsQuery(
    $first: Int!
    $after: String
  ) {
    ...RecruitmentSelfCreatedList_recruitment
      @arguments(first: $first, after: $after)
  }
`;

export const DashboardRecruitments: FC = memo(() => {
  const [viewerQueryRef, loadViewerQuery] =
    useQueryLoader<DashboardRecruitments_ViewerRecruitmentsQuery>(
      viewerRecruitmentsQuery
    );

  useEffect(() => {
    loadViewerQuery({
      first: 20,
    });
  }, []);

  if (!viewerQueryRef) return null;

  return (
    <Suspense
      fallback={
        <Box textAlign="center">
          <CircularProgress size={9} isIndeterminate color="primary.main" />
        </Box>
      }
    >
      <DashboardRecruitmentsView queryRef={viewerQueryRef} />
    </Suspense>
  );
});
