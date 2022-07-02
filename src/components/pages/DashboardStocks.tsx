import { Box, CircularProgress } from '@chakra-ui/react';
import { FC, memo, Suspense } from 'react';
import { StockRecruitment } from '../uiGroup';

export const DashboardStocks: FC = memo(() => {
  return (
    <Suspense
      fallback={
        <Box textAlign="center">
          <CircularProgress size={9} isIndeterminate color="primary.main" />
        </Box>
      }
    >
      <StockRecruitment />
    </Suspense>
  );
});
