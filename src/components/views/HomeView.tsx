import { Box, Grid, GridItem } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import {
  RecruitmentCardList,
  RecruitmentListSearch,
} from '../model/recruitment';

import { recruitmentsQuery } from '../pages/Home';
import { Home_SearchRecruitmentsQuery } from '../pages/__generated__/Home_SearchRecruitmentsQuery.graphql';

type Props = {
  queryRef: PreloadedQuery<Home_SearchRecruitmentsQuery>;
};

export const HomeView: FC<Props> = memo((props) => {
  const { queryRef } = props;

  const data = usePreloadedQuery<Home_SearchRecruitmentsQuery>(
    recruitmentsQuery,
    queryRef
  );

  return (
    <Box mt={20} maxWidth={1000} mx="auto">
      <Grid templateColumns="repeat(4, 1fr)" gap={10} mt={10}>
        <GridItem colSpan={1}>
          <Box position="sticky" top={8}>
            <RecruitmentListSearch tags={data} {...data} />
          </Box>
        </GridItem>
        <GridItem pl={7} colSpan={3}>
          <RecruitmentCardList recruitment={data} />
        </GridItem>
      </Grid>
    </Box>
  );
});
