import { Avatar, Box, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { CardRecruitment } from '../../../type/type';

type Props = {
  recruitment: CardRecruitment;
};

export const Author: FC<Props> = memo((props) => {
  const { recruitment } = props;

  return (
    <Box display="flex" alignItems="center">
      <Avatar mr={2} w={10} h={10} src={recruitment.user.avatar} />
      <Stack direction="column" spacing="0" fontSize={12}>
        <Text fontWeight="600">Daisuke</Text>
        <Text color="gray.500">10日前に掲載</Text>
      </Stack>
    </Box>
  );
});
