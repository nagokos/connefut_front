import { FC, memo } from 'react';
import { Box } from '@chakra-ui/react';
import { format, formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { Status } from '../../../generated/graphql';

type Props = {
  status: Status;
  publishedAt: string;
  createdAt: string;
  closingAt: string;
};

export const OtherContents: FC<Props> = memo((props) => {
  const { status, publishedAt, createdAt, closingAt } = props;

  const statusFormatDistanceToNow = () => {
    if (status === Status.Published) {
      const distanceToNow = formatDistanceToNow(new Date(publishedAt), {
        locale: ja,
      }).replace('約', '');
      return `${distanceToNow}前に公開`;
    } else {
      const distanceToNow = formatDistanceToNow(new Date(createdAt), {
        locale: ja,
      }).replace('約', '');
      return `${distanceToNow}前に作成`;
    }
  };

  const closingAtString = () => {
    return format(new Date(closingAt), 'yyyy年MM月dd日(E)', {
      locale: ja,
    });
  };

  return (
    <Box
      fontSize={11}
      mt={1}
      color="blackAlpha.600"
      fontFamily="ヒラギノ角ゴシック"
      display="flex"
      alignItems="center"
    >
      {status == Status.Published && (
        <Box display="flex">
          <Box mr={1}>募集期限</Box>
          <Box>{closingAtString()}</Box>
          <Box mx={0.5}>・</Box>
        </Box>
      )}
      {statusFormatDistanceToNow()}
    </Box>
  );
});
