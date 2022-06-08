import { Box } from '@chakra-ui/react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { FC, memo } from 'react';

type Props = {
  appliedAt: string;
};

export const AppliedAt: FC<Props> = memo((props) => {
  const { appliedAt } = props;
  return (
    <Box
      fontFamily="ヒラギノ角ゴシック"
      fontSize={11}
      mt={1}
      color="blackAlpha.600"
      display="flex"
      alignItems="center"
    >
      応募日時{' '}
      {format(new Date(appliedAt), 'yyyy年MM月dd日(E) HH:dd', { locale: ja })}
    </Box>
  );
});
