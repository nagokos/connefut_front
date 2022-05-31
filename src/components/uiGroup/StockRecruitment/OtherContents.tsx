import { Avatar, Box, Link } from '@chakra-ui/react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { FC, memo } from 'react';

type Props = {
  avatar: string;
  name: string;
  closingAt: string;
};

export const OtherContents: FC<Props> = memo((props) => {
  const { avatar, name, closingAt } = props;

  const formatCloaingAtString = () => {
    return format(new Date(closingAt), 'yyyy年MM月dd日(E)', {
      locale: ja,
    });
  };

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
        <Avatar w={5} h={5} src={avatar} mr={1.5} />
        {name}
      </Link>
      <Box as="span" mx={0.5}>
        ・
      </Box>
      募集期限 {formatCloaingAtString()}
    </Box>
  );
});
