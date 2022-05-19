import { FC, memo } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { Header } from './Header';
import { Area } from './Area';
import { Competition } from './Competition';
import { Closing } from './Closing';
import { Author } from './Author';
import { useGetRecruitmentsQuery } from '../../../generated/graphql';
import { useNavigate } from 'react-router-dom';
import { TypeArea } from './Type';

export const RecruitmentCard: FC = memo(() => {
  const navigate = useNavigate();

  const [data] = useGetRecruitmentsQuery({
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

  return (
    <>
      {data.data?.getRecruitments.edges.map((edge) => (
        <Box
          key={edge.cursor}
          cursor="pointer"
          bg="white"
          boxShadow="0px 3px 4px rgb(236 239 241)"
          _hover={{ boxShadow: '0px 10px 10px rgb(236 239 241)' }}
          rounded="xl"
          transitionDuration="300ms"
          overflow="hidden"
          onClick={() => navigate(`/recruitments/${edge.node.id}`)}
        >
          <Header recruitment={edge.node} />
          <Box px={4} pt={5} pb={4}>
            <Stack spacing={4}>
              <Area recruitment={edge.node} />
              <Competition recruitment={edge.node} />
              <TypeArea recruitment={edge.node} />
              <Closing recruitment={edge.node} />
              <Author recruitment={edge.node} />
            </Stack>
          </Box>
        </Box>
      ))}
    </>
  );
});
