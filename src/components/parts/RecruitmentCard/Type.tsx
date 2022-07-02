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
   
  );
});
