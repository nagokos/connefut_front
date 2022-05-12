import { FC, memo } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { CardRecruitment } from '../../../type/type';
import { Title } from './Title';
import { Header } from './Header';
import { Area } from './Area';
import { Competition } from './Competition';
import { Closing } from './Closing';
import { Author } from './Author';

type Props = {
  recruitment: CardRecruitment;
};

export const RecruitmentCard: FC<Props> = memo((props) => {
  const { recruitment } = props;

  return (
    <Box
      cursor="pointer"
      bg="white"
      boxShadow="0px 3px 4px rgb(236 239 241)"
      _hover={{ boxShadow: '0px 10px 10px rgb(236 239 241)' }}
      rounded="xl"
      transitionDuration="300ms"
      overflow="hidden"
    >
      <Header recruitment={recruitment} />
      <Box px={4} py={4}>
        <Title recruitment={recruitment} />
        <Stack spacing={4} mt={7}>
          <Area recruitment={recruitment} />
          <Competition recruitment={recruitment} />
          <Closing recruitment={recruitment} />
        </Stack>
        <Box mt={5}>
          <Author recruitment={recruitment} />
        </Box>
      </Box>
    </Box>
  );
});
