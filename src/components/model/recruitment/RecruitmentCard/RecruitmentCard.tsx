import { FC, memo } from 'react';
import { Avatar, Box, Stack, Text } from '@chakra-ui/react';

import { graphql } from 'relay-runtime';
import { format, formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import {
  RecruitmentCard_recruitment$key,
  Type,
} from './__generated__/RecruitmentCard_recruitment.graphql';
import { useFragment } from 'react-relay';

const recruitmentFragment = graphql`
  fragment RecruitmentCard_recruitment on Recruitment {
    id
    title
    type
    closingAt
    publishedAt
    user {
      id
      name
      avatar
    }
    competition {
      name
    }
    prefecture {
      name
    }
  }
`;

type Props = {
  recruitment: RecruitmentCard_recruitment$key;
};

export const RecruitmentCard: FC<Props> = memo((props) => {
  const { recruitment } = props;

  const recruitmentData = useFragment(recruitmentFragment, recruitment);

  const navigate = useNavigate();

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
        minHeight={140}
        display="flex"
        px={4}
        pt={4}
        justifyContent="center"
        alignItems="center"
        fontSize={15.5}
        textAlign="center"
        fontWeight="bold"
      >
        {recruitmentData.title}
      </Box>
      <Box px={4} pt={5} pb={4}>
        <Stack spacing={4}>
          <Box display="flex" alignItems="center">
            <Box minW={20} display="flex" alignItems="center">
              <Box fontSize={11} mr={0.5}>
                ■
              </Box>
              <Box fontSize={11}>募集エリア</Box>
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
                📍
              </Box>
              <Box fontFamily="ヒラギノ角ゴシック" fontSize={11}>
                {recruitmentData.prefecture?.name}
              </Box>
            </Box>
          </Box>
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
                {recruitmentData.competition?.name}
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
                  {timeLimitFindNum(String(recruitmentData.closingAt))}
                </Box>
                {timeLimitFindS(String(recruitmentData.closingAt))}
                <Box as="span" fontSize={10} ml={1} color="blackAlpha.700">
                  {format(
                    new Date(String(recruitmentData.closingAt)),
                    'yyyy年MM月dd日'
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Avatar mr={2} w={10} h={10} src={recruitmentData.user.avatar} />
            <Stack direction="column" spacing="0" fontSize={12}>
              <Text fontWeight="bold" mb={0.5}>
                {recruitmentData.user.name}
              </Text>
              <Text
                color="blackAlpha.600"
                fontSize={10}
                fontFamily="ヒラギノ角ゴシック"
              >
                {timeLimit(String(recruitmentData.publishedAt))}前に公開
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
});
