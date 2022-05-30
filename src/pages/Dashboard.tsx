import { Box, CircularProgress, Grid, GridItem, Stack } from '@chakra-ui/react';
import { FC, memo, Suspense } from 'react';

import { DashboardButtons } from '../components/uiGroup';
import { DashboardRecruitments } from '../components/uiGroup/DashboardRecruitment';

export const Dashboard: FC = memo(() => {
  return (
    <Box mt={12} maxWidth={1120} mx="auto">
      <Grid templateColumns="repeat(5, 1fr)" gap={28}>
        <GridItem colSpan={1} />
        <GridItem pl={4} colSpan={4}>
          <Box fontSize={40} fontWeight="bold">
            Recruitments
          </Box>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(5, 1fr)" gap={28} mt={8}>
        <GridItem colSpan={1} py={3}>
          <Stack spacing={8} position="sticky" top={20}>
            <DashboardButtons />
          </Stack>
        </GridItem>
        <GridItem py={3} colSpan={4}>
          <Suspense
            fallback={
              <Box textAlign="center">
                <CircularProgress
                  size={9}
                  isIndeterminate
                  color="primary.main"
                />
              </Box>
            }
          >
            <DashboardRecruitments />
          </Suspense>
        </GridItem>
      </Grid>
    </Box>
  );
});
