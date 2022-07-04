import { Box, CircularProgress } from '@chakra-ui/react';
import { FC, memo, Suspense, useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { graphql } from 'relay-runtime';
import { DashboardRecruitments_currentUserRecruitmentsQuery } from './__generated__/DashboardRecruitments_currentUserRecruitmentsQuery.graphql';

import { DashboardRecruitment } from '../uiGroup/DashboardRecruitment';

export const currentUserRecruitmentsQuery = graphql`
  query DashboardRecruitments_currentUserRecruitmentsQuery {
    currentUserRecruitments {
      id
      title
    }
  }
`;

export const DashboardRecruitments: FC = memo(() => {
  const [currentUserRecruitmentsQueryRef, loadCurrentUserRecruitmentsQuery] =
    useQueryLoader<DashboardRecruitments_currentUserRecruitmentsQuery>(
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
