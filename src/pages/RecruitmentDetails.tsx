import { Box, Grid, GridItem } from '@chakra-ui/react';
import { FC, memo, Suspense } from 'react';

import {
  RecruitmentDetailActions,
  RecruitmentDetailMain,
  RecruitmentDetailTags,
  RecruitmentDetailUser,
} from '../components/uiGroup';

export const RecruitmentDetails: FC = memo(() => {
  return (
    <Box bg="primary.light" minH="100vh">
      <Box maxW={1130} mx="auto" py={12}>
        <Grid templateColumns="repeat(7, 1fr)" gap={8}>
          <GridItem colSpan={5}>
            <Suspense>
              <RecruitmentDetailMain />
            </Suspense>
          </GridItem>
          <GridItem colSpan={2}>
            <Suspense>
              <RecruitmentDetailTags />
            </Suspense>
            <Box position="sticky" top={7}>
              <RecruitmentDetailActions />
              <RecruitmentDetailUser />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
});
