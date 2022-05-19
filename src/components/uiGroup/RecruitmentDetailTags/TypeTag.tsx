import { Box, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Type } from '../../../generated/graphql';

type Props = {
  type?: Type;
};

export const TypeTag: FC<Props> = memo((props) => {
  const { type } = props;

  const typeString = (type: Type | undefined) => {
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

  const typeEmoji = (type: Type | undefined) => {
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
    <Box display="flex" alignItems="center" justifyContent="start">
      <Box
        bg="primary.light"
        display="flex"
        alignItems="center"
        justifyContent="center"
        as="span"
        w={8}
        h={8}
        rounded="full"
        mr={1}
        fontSize={20}
        border="1px solid #eceff1"
      >
        {typeEmoji(type)}
      </Box>
      <Text fontSize={12} fontFamily="ヒラギノゴシック">
        {typeString(type)}
      </Text>
    </Box>
  );
});
