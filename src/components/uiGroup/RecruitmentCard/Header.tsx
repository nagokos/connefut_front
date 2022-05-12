import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Type } from '../../../generated/graphql';
import { CardRecruitment } from '../../../type/type';

type Props = {
  recruitment: CardRecruitment;
};

export const Header: FC<Props> = memo((props) => {
  const { recruitment } = props;

  const typeString = (type: Type) => {
    if (type === Type.Opponent) {
      return '試合相手';
    } else if (type === Type.Individual) {
      return '個人参加';
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
    <>
      <Box
        position="absolute"
        mt={4}
        ml={4}
        fontSize={10}
        border="1px solid primary.main"
        bg="primary.main"
        color="white"
        fontWeight="bold"
        rounded="full"
        px={2}
        py={1}
      >
        {typeString(recruitment.type)}
      </Box>
      <Box
        bg="primary.light"
        minHeight={120}
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize={55}
      >
        {typeEmoji(recruitment.type)}
      </Box>
    </>
  );
});
