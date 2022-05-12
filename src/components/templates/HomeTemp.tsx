import { Box, Divider, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Competition, Prefecture } from '../../generated/graphql';
import { CardRecEdge } from '../../type/type';
import { HomeSearch, RecruitmentCard } from '../uiGroup';
import { HomeOrder } from '../uiGroup/HomeOrder';

type Props = {
  recEdges?: CardRecEdge[];
  prefectures?: Prefecture[];
  competitions?: Competition[];
};

export const HomeTemp: FC<Props> = memo((props) => {
  const { prefectures, competitions, recEdges } = props;

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        <GridItem colSpan={1} />
        <GridItem pl={4} colSpan={3}>
          <HomeOrder />
          <Divider mt={3} border="1px solid" borderColor="#ebf2f2" />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(4, 1fr)" gap={7} mt={10}>
        <GridItem colSpan={1}>
          <Box position="sticky" top={8}>
            <HomeSearch prefectures={prefectures} competitions={competitions} />
          </Box>
        </GridItem>
        <GridItem pl={4} colSpan={3}>
          <SimpleGrid columns={2} spacing={10}>
            {recEdges?.map((recEdge) => (
              <RecruitmentCard
                key={recEdge.cursor}
                recruitment={recEdge.node}
              />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
});
