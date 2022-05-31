import { Avatar, Box, Stack, Text } from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { FC, memo } from 'react';
import { CardRecruitment } from '../../../type/type';

type Props = {
  recruitment: CardRecruitment;
};

export const Author: FC<Props> = memo((props) => {
  const { recruitment } = props;

  const distanceToNow = () => {
    return formatDistanceToNow(new Date(String(recruitment.published_at)), {
      locale: ja,
    }).replace('約', '');
  };

  return (
    <Box display="flex" alignItems="center">
      <Avatar mr={2} w={10} h={10} src={recruitment.user.avatar} />
      <Stack direction="column" spacing="0" fontSize={12}>
        <Text fontWeight="bold">{recruitment.user.name}</Text>
        <Text
          color="blackAlpha.500"
          fontSize={10}
          fontFamily="ヒラギノ角ゴシック"
        >
          {distanceToNow()}前に公開
        </Text>
      </Stack>
    </Box>
  );
});
