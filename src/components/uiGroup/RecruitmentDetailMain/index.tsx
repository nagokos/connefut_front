import { Box, Divider, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useGetRecruitmentQuery } from '../../../generated/graphql';
import { Area } from './Area';
import { Capacity } from './Capacity';
import { ClosingAt } from './ClosingAt';
import { Competition } from './Competition';
import { Content } from './Content';
import { StartAt } from './StartAt';
import { Title } from './Title';
import { DetailType } from './Type';

export const RecruitmentDetailMain: FC = memo(() => {
  const { recruitmentId } = useParams();

  const [data] = useGetRecruitmentQuery({
    variables: {
      id: String(recruitmentId),
    },
  });

  const recruitment = data.data?.getRecruitment;

  return (
    <Box px={9} py={9} bg="white" boxShadow="0 2px 4px #4385bb12" rounded="xl">
      <Title title={recruitment?.title} />
      <Divider borderColor="primary.50" mt={2} />
      <Stack mt={8} spacing={6} maxW="590">
        <Competition compName={recruitment?.competition?.name} />
        <DetailType type={recruitment?.type} />
        <StartAt startAt={recruitment?.startAt} />
        <ClosingAt closingAt={recruitment?.closingAt} />
        <Area
          place={String(recruitment?.place)}
          prefName={recruitment?.prefecture?.name}
        />
        {recruitment?.capacity && <Capacity capacity={recruitment.capacity} />}
        <Content content={String(recruitment?.content)} />
      </Stack>
    </Box>
  );
});
