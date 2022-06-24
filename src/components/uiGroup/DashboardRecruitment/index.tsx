import { Box, Divider, Spacer } from '@chakra-ui/react';
import { FC, memo, useMemo } from 'react';

import {
  Status,
  useGetCurrentUserRecruitmentsQuery,
} from '../../../generated/graphql';
import { StatusTag } from './StatusTag';
import { Title } from './Title';
import { OtherContents } from './OtherContents';
import { Edit } from './Edit';
import { Trash } from './Trash';
import { Applicants } from './Applicants';

export const DashboardRecruitment: FC = memo(() => {
  const [data] = useGetCurrentUserRecruitmentsQuery({
    context: useMemo(() => ({ additionalTypenames: ['Recruitment'] }), []),
  });

  return (
    <>
      {data.data?.getCurrentUserRecruitments.map((recruitment) => (
        <Box key={recruitment.id}>
          <Box display="flex" alignItems="center">
            <StatusTag status={recruitment.status} />
            <Spacer />
            {recruitment.status === Status.Published && <Applicants />}
            <Edit id={recruitment.id} />
            <Trash id={recruitment.id} title={recruitment.title} />
          </Box>
          <Title id={recruitment.id} title={recruitment.title} />
          <OtherContents
            status={recruitment.status}
            publishedAt={recruitment.publishedAt}
            createdAt={recruitment.createdAt}
            closingAt={recruitment.closingAt}
          />
          <Divider borderColor="#ebf2f2" my={4} />
        </Box>
      ))}
    </>
  );
});
