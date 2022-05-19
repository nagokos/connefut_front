import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Type } from '../../../generated/graphql';

type Props = {
  type?: Type;
};

export const DetailType: FC<Props> = memo((props) => {
  const { type } = props;

  const typeString = (type: Type | undefined) => {
    if (type === Type.Opponent) {
      return '試合相手の募集';
    } else if (type === Type.Individual) {
      return '個人参加の募集';
    } else if (type === Type.Member) {
      return 'メンバーの募集';
    } else if (type === Type.Joining) {
      return 'チームに加入したい人の募集';
    } else if (type === Type.Others) {
      return 'その他';
    }
  };

  return (
    <>
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center" fontSize={14} minW={130}>
          <Box mr={1}>■</Box>
          <Box>募集タイプ</Box>
        </Box>
        <Box bg="primary.light" fontSize={14} px={2} py={1} rounded="md">
          {typeString(type)}
        </Box>
      </Box>
    </>
  );
});
