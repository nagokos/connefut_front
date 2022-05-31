import { Box, Divider, Spacer } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { useGetCurrentUserRecruitmentsQuery } from '../../../generated/graphql';
import { StatusTag } from './StatusTag';
import { Title } from './Title';
import { OtherContents } from './OtherContents';
import { Edit } from './Edit';
import { Trash } from './Trash';

export const DashboardRecruitment: FC = memo(() => {
  const [data] = useGetCurrentUserRecruitmentsQuery();

  return (
    <>
      {data.data?.getCurrentUserRecruitments.map((recruitment) => (
        <Box key={recruitment.id}>
          <Box display="flex" alignItems="center">
            <StatusTag status={recruitment.status} />
            <Spacer />
            <Edit />
            <Trash id={recruitment.id} title={recruitment.title} />
          </Box>
          <Title title={recruitment.title} />
          <OtherContents
            status={recruitment.status}
            publishedAt={recruitment.published_at}
            createdAt={recruitment.createdAt}
            closingAt={recruitment.closingAt}
          />
          <Divider borderColor="#ebf2f2" my={4} />
        </Box>
      ))}
    </>
  );
});
