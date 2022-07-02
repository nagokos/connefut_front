import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { FC, memo, Suspense } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { recruitmentsQuery } from '../pages/Home';
import { Home_GetSearchRecruitmentsQuery } from '../pages/__generated__/Home_GetSearchRecruitmentsQuery.graphql';
import { RecruitmentCardList } from '../templates';
import { HomeSearch } from '../uiGroup';
import { HomeOrder } from '../uiGroup/HomeOrder';

type Props = {
  queryRef: PreloadedQuery<Home_GetSearchRecruitmentsQuery>;
};

export const HomeView: FC<Props> = memo((props) => {
  const { queryRef } = props;

  const data = usePreloadedQuery<Home_GetSearchRecruitmentsQuery>(
    recruitmentsQuery,
    queryRef
  );

  console.log(data);

  return (
    <Box mt={12} maxWidth={1000} mx="auto">
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        <GridItem colSpan={1} />
        <GridItem pl={4} colSpan={3}>
          <HomeOrder />
          <Divider mt={3} border="1px solid" borderColor="#ebf2f2" />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} mt={10}>
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
            <RecruitmentCardList recruitment={data} />
          </Suspense>
        </GridItem>
      </Grid>
    </Box>
  );
});
