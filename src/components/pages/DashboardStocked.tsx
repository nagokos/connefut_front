import { Box, CircularProgress } from '@chakra-ui/react';
import { FC, memo, Suspense, useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { graphql } from 'relay-runtime';
import { DashboardStockedView } from '../views';
import { DashboardStocked_StockedRecruitmentsQuery } from './__generated__/DashboardStocked_StockedRecruitmentsQuery.graphql';

export const stockedRecruitmentsQuery = graphql`
  query DashboardStocked_StockedRecruitmentsQuery(
    $first: Int!
    $after: String
  ) {
    ...RecruitmentStockedList_recruitment
      @arguments(first: $first, after: $after)
  }
`;

export const DashboardStocked: FC = memo(() => {
  const [stockedRecruitmentsQueryRef, loadStockedRecruitmentsQuery] =
    useQueryLoader<DashboardStocked_StockedRecruitmentsQuery>(
      stockedRecruitmentsQuery
    );

  useEffect(() => {
    loadStockedRecruitmentsQuery({ first: 10 });
  }, []);

  if (!stockedRecruitmentsQueryRef) return null;

  return (
    <Suspense
      fallback={
        <Box textAlign="center">
          <CircularProgress size={9} isIndeterminate color="primary.main" />
        </Box>
      }
    >
      <DashboardStockedView queryRef={stockedRecruitmentsQueryRef} />
    </Suspense>
  );
});
