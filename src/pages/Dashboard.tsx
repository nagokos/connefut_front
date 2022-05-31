import { Box, Grid, GridItem, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { DashboardButtons } from '../components/uiGroup';

export const Dashboard: FC = memo(() => {
  const location = useLocation();

  const pageTitle = () => {
    if (location.pathname.includes('stocks')) {
      return 'Stocks';
    } else {
      return 'Recruitments';
    }
  };

  return (
    <Box mt={12} maxWidth={1120} mx="auto">
      <Grid templateColumns="repeat(5, 1fr)" gap={28}>
        <GridItem colSpan={1} />
        <GridItem pl={4} colSpan={4}>
          <Box fontSize={40} fontWeight="bold">
            {pageTitle()}
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
          <Outlet />
        </GridItem>
      </Grid>
    </Box>
  );
});
