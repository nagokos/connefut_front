import { FC, memo } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { Header } from './Header';
import { Area } from './Area';
import { Competition } from './Competition';
import { Closing } from './Closing';
import { Author } from './Author';
import { TypeArea } from './Type';
import { useNavigate } from 'react-router-dom';
import { CardRecruitment } from '../../../type/type';

type Props = {
  node: CardRecruitment;
};

export const Card: FC<Props> = memo((props) => {
  const { node } = props;
  const navigate = useNavigate();

  return (
    <Box
      cursor="pointer"
      bg="white"
      boxShadow="base"
      rounded="xl"
      transitionDuration="300ms"
      overflow="hidden"
      onClick={() => navigate(`/recruitments/${node.id}`)}
      _hover={{ boxShadow: 'lg' }}
    >
      <Header recruitment={node} />
      <Box px={4} pt={5} pb={4}>
        <Stack spacing={4}>
          <Area recruitment={node} />
          <Competition recruitment={node} />
          <TypeArea recruitment={node} />
          <Closing recruitment={node} />
          <Author recruitment={node} />
        </Stack>
      </Box>
    </Box>
  );
});
