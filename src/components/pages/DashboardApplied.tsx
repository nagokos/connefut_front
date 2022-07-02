import { Box, CircularProgress } from '@chakra-ui/react';
import { FC, memo, Suspense } from 'react';
import { AppliedRecruitments } from '../uiGroup';

export const DashboardApplied: FC = memo(() => {
  return (
    <Suspense
      fallback={
        <Box textAlign="center">
          <CircularProgress size={9} isIndeterminate color="primary.main" />
        </Box>
      }
    >
      <AppliedRecruitments />
    </Suspense>
  );
});
