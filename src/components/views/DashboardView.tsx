import { Box, Grid, GridItem, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { DashboardNavigation } from '../ui';

export const DashboardView: FC = memo(() => {
  const location = useLocation();

  const pageTitle = () => {
    if (location.pathname.includes('stocks')) {
      return 'ストックリスト';
    } else if (location.pathname.includes('applied')) {
      return '応募管理';
    } else {
      return '募集管理';
    }
  };

  return (
    <Box mt={14} maxWidth={1120} mx="auto">
      <Grid templateColumns="repeat(6, 1fr)" gap={28}>
        <GridItem colSpan={1} />
        <GridItem pl={4} colSpan={4}>
          <Box fontSize={30} fontWeight="bold" fontFamily="ヒラギノ角ゴシック">
            {pageTitle()}
          </Box>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(5, 1fr)" mt={8}>
        <GridItem colSpan={1} py={3}>
          <Stack spacing={8} position="sticky" top={20}>
            <DashboardNavigation />
          </Stack>
        </GridItem>
        <GridItem py={3} colSpan={4}>
          <Outlet />
        </GridItem>
      </Grid>
    </Box>
  );
});
