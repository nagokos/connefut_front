import { Box, CircularProgress } from '@chakra-ui/react';
import { FC, memo, Suspense } from 'react';

import { DashboardRecruitment } from '../components/uiGroup/DashboardRecruitment';

export const DashboardRecruitments: FC = memo(() => {
  return (
    <Box>
      <Suspense
        fallback={
          <Box textAlign="center">
            <CircularProgress size={9} isIndeterminate color="primary.main" />
          </Box>
        }
      >
        <DashboardRecruitment />
      </Suspense>
    </Box>
  );
});
