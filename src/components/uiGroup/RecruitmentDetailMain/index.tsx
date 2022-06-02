import { Box, Divider, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { Type, useGetRecruitmentQuery } from '../../../generated/graphql';
import { Area } from './Area';
import { ClosingAt } from './ClosingAt';
import { Competition } from './Competition';
import { Content } from './Content';
import { Location } from './Location';
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
      <Stack mt={8} spacing={7} maxW="590">
        <Competition compName={recruitment?.competition?.name} />
        <DetailType type={recruitment?.type} />
        {recruitment?.type === Type.Opponent ||
        recruitment?.type === Type.Individual ? (
          <StartAt startAt={recruitment?.startAt} />
        ) : null}
        <ClosingAt closingAt={recruitment?.closingAt} />
        <Box>
          <Area
            place={String(recruitment?.place)}
            prefName={recruitment?.prefecture?.name}
          />
          {recruitment?.locationLat && recruitment.locationLng && (
            <Location
              lat={recruitment.locationLat}
              lng={recruitment.locationLng}
            />
          )}
        </Box>
        <Content detail={String(recruitment?.detail)} />
      </Stack>
    </Box>
  );
});
