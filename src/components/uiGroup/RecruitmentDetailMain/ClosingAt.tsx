import { Box } from '@chakra-ui/react';
import { format, formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { FC, memo } from 'react';

type Props = {
  closingAt?: string;
};

export const ClosingAt: FC<Props> = memo((props) => {
  const { closingAt } = props;

  const timeLimit = (date: string): string => {
    const target = format(new Date(date), 'yyyy-MM-dd HH:mm');
    const targetDate = new Date(target);
    const increment = formatDistanceToNow(targetDate, {
      locale: ja,
    }).replace('約', '');
    return increment;
  };

  const timeLimitFindNum = (increment: string): string => {
    const timelimit = timeLimit(increment);
    return timelimit.replace(/[^0-9]/g, '');
  };

  const timeLimitFindS = (increment: string): string => {
    const timelimit = timeLimit(increment);
    return timelimit.replace(/\d+/g, '');
  };

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" fontSize={14} minW={130}>
        <Box mr={1}>■</Box>
        <Box>募集期限</Box>
      </Box>
      <Box
        fontFamily="ヒラギノ角ゴシック"
        fontSize={14}
        px={2}
        py={1}
        rounded="md"
        bg="primary.light"
      >
        残り
        <Box as="span" fontWeight="bold">
          {timeLimitFindNum(String(closingAt))}
        </Box>
        {timeLimitFindS(String(closingAt))}
        <Box as="span" ml={1}>
          {format(new Date(String(closingAt)), 'yyyy年MM月dd日 (E) HH:mm', {
            locale: ja,
          })}
        </Box>
      </Box>
    </Box>
  );
});
