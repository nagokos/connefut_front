import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import { FC, memo, Suspense } from 'react';
import { HomeSearch, RecruitmentCard } from '../components/uiGroup';
import { HomeOrder } from '../components/uiGroup/HomeOrder';

export const Home: FC = memo(() => {
  return (
    <Box mt={12} maxWidth={980} mx="auto">
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        <GridItem colSpan={1} />
        <GridItem pl={4} colSpan={3}>
          <HomeOrder />
          <Divider mt={3} border="1px solid" borderColor="#ebf2f2" />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(4, 1fr)" gap={7} mt={10}>
        <GridItem colSpan={1}>
          <Suspense>
            <Box position="sticky" top={8}>
              <HomeSearch />
            </Box>
          </Suspense>
        </GridItem>
        <GridItem pl={4} colSpan={3}>
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
            <SimpleGrid columns={2} spacing={10}>
              <RecruitmentCard />
            </SimpleGrid>
          </Suspense>
        </GridItem>
      </Grid>
    </Box>
  );
});
