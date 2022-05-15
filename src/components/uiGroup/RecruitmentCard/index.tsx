import { FC, memo } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { Title } from './Title';
import { Header } from './Header';
import { Area } from './Area';
import { Competition } from './Competition';
import { Closing } from './Closing';
import { Author } from './Author';
import { useGetRecruitmentsQuery } from '../../../generated/graphql';

export const RecruitmentCard: FC = memo(() => {
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
        >
          <Header recruitment={edge.node} />
          <Box px={4} py={4}>
            <Title recruitment={edge.node} />
            <Stack spacing={4} mt={7}>
              <Area recruitment={edge.node} />
              <Competition recruitment={edge.node} />
              <Closing recruitment={edge.node} />
            </Stack>
            <Box mt={5}>
              <Author recruitment={edge.node} />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
});
