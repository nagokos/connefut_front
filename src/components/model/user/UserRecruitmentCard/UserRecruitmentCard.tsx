import { FC, memo } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { graphql } from 'relay-runtime';

import { useFragment } from 'react-relay';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import {
  Type,
  UserRecruitmentCard_recruitment$key,
} from './__generated__/UserRecruitmentCard_recruitment.graphql';

const recruitmentFragment = graphql`
  fragment UserRecruitmentCard_recruitment on Recruitment {
    id
    title
    type
    competition {
      name
    }
    closingAt
    startAt
  }
`;

type Props = {
  recruitment: UserRecruitmentCard_recruitment$key;
};

export const UserRecruitmentCard: FC<Props> = memo((props) => {
  const { recruitment } = props;

  const navigate = useNavigate();

  const recruitmentData = useFragment<UserRecruitmentCard_recruitment$key>(
    recruitmentFragment,
    recruitment
  );

  const typeString = (type: Type) => {
    if (type === 'OPPONENT') {
      return '対戦相手';
    } else if (type === 'PERSONAL') {
      return '個人プレーヤー';
    } else if (type === 'MEMBER') {
      return 'メンバー';
    } else if (type === 'JOIN') {
      return 'チーム加入';
    } else if (type === 'OTHER') {
      return 'その他';
    } else {
      return '';
    }
  };

  const typeEmoji = (type: Type) => {
    if (type === 'OPPONENT') {
      return '🤝';
    } else if (type === 'PERSONAL') {
      return '💪';
    } else if (type === 'MEMBER') {
      return '🧑‍🤝‍🧑';
    } else if (type === 'JOIN') {
      return '🙏';
    } else if (type === 'OTHER') {
      return '💭';
    } else {
      return '';
    }
  };

  return (
    <Box
      cursor="pointer"
      bg="white"
      boxShadow="base"
      rounded="xl"
      transitionDuration="300ms"
      overflow="hidden"
      onClick={() => navigate(`/recruitments/${recruitmentData.id}`)}
      _hover={{ boxShadow: 'lg' }}
    >
      <Box
        bg="primary.50"
        minHeight={110}
        display="flex"
        px={4}
        pt={4}
        justifyContent="center"
        alignItems="center"
        fontSize={14}
        textAlign="center"
        fontWeight="bold"
      >
        {recruitmentData.title}
      </Box>
      <Box px={5} pt={7} pb={7}>
        <Stack spacing={5}>
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
                {recruitmentData.competition.name}
              </Box>
            </Box>
          </Box>
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
                {typeEmoji(recruitmentData.type)}
              </Box>
              <Box fontFamily="ヒラギノ角ゴシック" fontSize={11}>
                {typeString(recruitmentData.type)}
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Box minW={20} display="flex" alignItems="center">
              <Box fontSize={11} mr={0.5}>
                ■
              </Box>
              <Box fontSize={11}>
                {recruitmentData.startAt ? '開催日' : '募集期限'}
              </Box>
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
                {recruitmentData.startAt ? '🗓' : '⏰'}
              </Box>
              <Box fontFamily="ヒラギノ角ゴシック" fontSize={11}>
                {recruitmentData.startAt
                  ? format(
                      new Date(String(recruitmentData.startAt)),
                      'yyyy年MM月dd日',
                      { locale: ja }
                    )
                  : format(
                      new Date(String(recruitmentData.closingAt)),
                      'yyyy年MM月dd日',
                      { locale: ja }
                    )}
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
});
