import { Box, CircularProgress, Grid, GridItem } from '@chakra-ui/react';
import { FC, memo, Suspense } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { recruitmentsQuery } from '../pages/Home';
import { Home_SearchRecruitmentsQuery } from '../pages/__generated__/Home_SearchRecruitmentsQuery.graphql';
import { HomeSearch, RecruitmentCardList } from '../templates';

type Props = {
  queryRef: PreloadedQuery<Home_SearchRecruitmentsQuery>;
};

export const HomeView: FC<Props> = memo((props) => {
  const { queryRef } = props;

  const data = usePreloadedQuery<Home_SearchRecruitmentsQuery>(
    recruitmentsQuery,
    queryRef
  );

  console.log(data);

  return (
    <Box mt={20} maxWidth={1000} mx="auto">
      <Grid templateColumns="repeat(4, 1fr)" gap={10} mt={10}>
        <GridItem colSpan={1}>
          <Suspense>
            <Box position="sticky" top={8}>
              <HomeSearch
                competitions={data.competitions}
                tags={data.tags}
                prefectures={data.prefectures}
              />
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
