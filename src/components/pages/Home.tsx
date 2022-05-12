import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import {
  useGetCompetitionsQuery,
  useGetPrefecturesQuery,
  useGetRecruitmentsQuery,
} from '../../generated/graphql';
import { HomeTemp } from '../templates';

export const Home: FC = memo(() => {
  const [recData] = useGetRecruitmentsQuery({
    variables: {
      paginationInput: {
        first: 10,
        last: null,
        after: null,
        before: null,
        options: {},
      },
    },
  });
  const [prefData] = useGetPrefecturesQuery();
  const [compData] = useGetCompetitionsQuery();

  return (
    <Box mt={12} maxWidth={980} mx="auto">
      <HomeTemp
        recEdges={recData.data?.getRecruitments.edges}
        prefectures={prefData.data?.getPrefectures}
        competitions={compData.data?.getCompetitions}
      />
    </Box>
  );
});
