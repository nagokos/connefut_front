import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Type } from '../../../generated/graphql';
import { CardRecruitment } from '../../../type/type';

type Props = {
  recruitment: CardRecruitment;
};

export const TypeArea: FC<Props> = memo((props) => {
  const { recruitment } = props;

  const typeString = (type: Type) => {
    if (type === Type.Opponent) {
      return '対戦相手';
    } else if (type === Type.Individual) {
      return '個人プレーヤー';
    } else if (type === Type.Member) {
      return 'メンバー';
    } else if (type === Type.Joining) {
      return 'チーム加入';
    } else if (type === Type.Others) {
      return 'その他';
    }
  };

  const typeEmoji = (type: Type) => {
    if (type === Type.Opponent) {
      return '🤝';
    } else if (type === Type.Individual) {
      return '💪';
    } else if (type === Type.Member) {
      return '🧑‍🤝‍🧑';
    } else if (type === Type.Joining) {
      return '🙏';
    } else if (type === Type.Others) {
      return '💭';
    } else {
      return '';
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Box minW={20} display="flex" alignItems="center">
        <Box fontSize={11} mr={0.5}>
          ■
        </Box>
        <Box fontSize={11}>募集タイプ</Box>
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
          {typeEmoji(recruitment.type)}
        </Box>
        <Box fontFamily="ヒラギノ角ゴシック" fontSize={11}>
          {typeString(recruitment.type)}
        </Box>
      </Box>
    </Box>
  );
});
