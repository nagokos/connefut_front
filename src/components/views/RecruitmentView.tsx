import { Box, Divider, Grid, GridItem } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { RecruitmentApply } from '../model/recruitment/RecruitmentApply/RecruitmentApply';
import { RecruitmentDetails } from '../model/recruitment/RecruitmentDetails/RecruitmentDetails';
import { RecruitmentStock } from '../model/recruitment/RecruitmentStock/RecruitmentStock';

import { RecruitmentTagList } from '../model/recruitment/RecruitmentTagList/RecruitmentTagList';
import { recruitmentQuery } from '../pages/Recruitment';
import { Recruitment_RecruitmentQuery } from '../pages/__generated__/Recruitment_RecruitmentQuery.graphql';

type Props = {
  queryRef: PreloadedQuery<Recruitment_RecruitmentQuery>;
};

export const RecruitmentView: FC<Props> = memo((props) => {
  const { queryRef } = props;

  const data = usePreloadedQuery<Recruitment_RecruitmentQuery>(
    recruitmentQuery,
    queryRef
  );

  return (
    <Box bg="primary.light" minH="100vh">
      <Box maxW={1130} mx="auto" py={12}>
        <Grid templateColumns="repeat(7, 1fr)" gap={8}>
          <GridItem colSpan={5}>
            <RecruitmentDetails recruitment={data.recruitment} />
          </GridItem>
          <GridItem colSpan={2}>
            <RecruitmentTagList recruitment={data.recruitment} />
            <Box position="sticky" top={10}>
              <Box
                px={5}
                py={5}
                mt={7}
                bg="white"
                boxShadow="0 2px 4px #4385bb12"
                rounded="lg"
              >
                <RecruitmentApply recruitment={data.recruitment} />
                <Divider mt={5} mb={6} />
                <RecruitmentStock feedbackStock={data.checkStocked} />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
});
