import { Box } from '@chakra-ui/react';
import { format, formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { FC, memo } from 'react';
import { CardRecruitment } from '../../../type/type';

type Props = {
  recruitment: CardRecruitment;
};

export const Closing: FC<Props> = memo((props) => {
  const { recruitment } = props;

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

  const closingAtFormat = () => {
    return format(
      new Date(String(recruitment.closingAt)),
      'yyyy年MM月dd日(E)',
      {
        locale: ja,
      }
    );
  };

  return (
    <Box display="flex" alignItems="center">
      <Box minW={20} display="flex" alignItems="center">
        <Box fontSize={11} mr={0.5}>
          ■
        </Box>
        <Box fontSize={11}>募集期限</Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        bg="primary.light"
        rounded="3"
        px={2}
        py={0.5}
      >
        <Box fontSize={12} mr={1}>
          ⏰
        </Box>
        <Box fontFamily="ヒラギノ角ゴシック" fontSize={11}>
          残り
          <Box as="span" fontWeight="bold" fontSize={11}>
            {timeLimitFindNum(String(recruitment.closingAt))}
          </Box>
          {timeLimitFindS(String(recruitment.closingAt))}
          <Box as="span" ml={1} color="blackAlpha.700">
            {closingAtFormat()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
});
