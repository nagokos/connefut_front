import { Box, CircularProgress } from '@chakra-ui/react';
import { FC, memo, Suspense, useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { graphql } from 'relay-runtime';

import { DashboardRecruitment } from '../uiGroup/DashboardRecruitment';
import { DashboardRecruitments_GetCurrentUserRecruitmentsQuery } from './__generated__/DashboardRecruitments_GetCurrentUserRecruitmentsQuery.graphql';

export const currentUserRecruitmentsQuery = graphql`
  query DashboardRecruitments_GetCurrentUserRecruitmentsQuery {
    getCurrentUserRecruitments {
      id
      title
    }
  }
`;

export const DashboardRecruitments: FC = memo(() => {
  const [currentUserRecruitmentsQueryRef, loadCurrentUserRecruitmentsQuery] =
    useQueryLoader<DashboardRecruitments_GetCurrentUserRecruitmentsQuery>(
      currentUserRecruitmentsQuery
    );

  useEffect(() => {
    loadCurrentUserRecruitmentsQuery({});
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
      <DashboardRecruitment queryRef={currentUserRecruitmentsQueryRef} />
    </Suspense>
  );
});
