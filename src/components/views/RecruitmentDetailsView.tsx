import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';

export const RecruitmentDetailsView: FC = memo(() => {
  return (
    <Box bg="primary.light" minH="100vh">
      {/* <Box maxW={1130} mx="auto" py={12}>
        <Grid templateColumns="repeat(7, 1fr)" gap={8}>
          <GridItem colSpan={5}>
            <RecruitmentDetailMain />
          </GridItem>
          <GridItem colSpan={2}>
            <RecruitmentDetailTags />
            <Box position="sticky" top={7}>
              <RecruitmentDetailActions />
              <RecruitmentDetailUser />
            </Box>
          </GridItem>
        </Grid>
      </Box> */}
    </Box>
  );
});
