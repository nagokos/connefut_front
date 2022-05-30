import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { CardRecruitment } from '../../../type/type';

type Props = {
  recruitment: CardRecruitment;
};

export const Competition: FC<Props> = memo((props) => {
  const { recruitment } = props;

  return (
    <Box display="flex" alignItems="center">
      <Box minW={20} display="flex" alignItems="center">
        <Box fontSize={11} mr={0.5}>
          ■
        </Box>
        <Box fontSize={11}>募集競技</Box>
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
          ⚽️
        </Box>
        <Box fontFamily="ヒラギノ角ゴシック" fontSize={11}>
          {recruitment.competition?.name}
        </Box>
      </Box>
    </Box>
  );
});
