import { Avatar, Box, Link } from '@chakra-ui/react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { FC, memo } from 'react';

type Props = {
  avatar: string;
  name: string;
  appliedAt: string;
};

export const OtherContents: FC<Props> = memo((props) => {
  const { appliedAt, avatar, name } = props;
  return (
    <Box
      fontFamily="ヒラギノ角ゴシック"
      fontSize={11}
      mt={1}
      color="blackAlpha.600"
      display="flex"
      alignItems="center"
    >
      <Link display="flex" alignItems="center">
        <Avatar w={5} h={5} mr={1.5} src={avatar} />
        <Box>{name}</Box>
      </Link>
      <Box mx={0.5}>・</Box>
      応募日時{' '}
      {format(new Date(appliedAt), 'yyyy年MM月dd日(E) HH:dd', { locale: ja })}
    </Box>
  );
});
