import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { IoMdPricetag } from 'react-icons/io';
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { RecruitmentTag } from '../RecruitmentTag/RecruitmentTag';
import {
  RecruitmentTagList_recruitment$key,
  Type,
} from './__generated__/RecruitmentTagList_recruitment.graphql';

const recruitmentTagListFragment = graphql`
  fragment RecruitmentTagList_recruitment on Recruitment {
    type
    competition {
      name
    }
    tags {
      id
      name
    }
  }
`;

type Props = {
  recruitment: RecruitmentTagList_recruitment$key;
};

export const RecruitmentTagList: FC<Props> = memo((props) => {
  const { recruitment } = props;

  const recruitmentData = useFragment<RecruitmentTagList_recruitment$key>(
    recruitmentTagListFragment,
    recruitment
  );

  const typeDisplayName = (type: Type) => {
    if (type === 'OPPONENT') {
      return '対戦相手';
    } else if (type === 'INDIVIDUAL') {
      return '個人プレーヤ';
    } else if (type === 'MEMBER') {
      return 'メンバー';
    } else if (type === 'JOINING') {
      return 'チーム加入';
    } else {
      return 'その他';
    }
  };

  const typeIcon = (type: Type) => {
    if (type === 'OPPONENT') {
      return '🤝';
    } else if (type === 'INDIVIDUAL') {
      return '💪';
    } else if (type === 'MEMBER') {
      return '🧑‍🤝‍🧑';
    } else if (type === 'JOINING') {
      return '🙏';
    } else {
      return '💭';
    }
  };

  return (
    <Box bg="white" boxShadow="0 2px 4px #4385bb12" px={5} py={5} rounded="lg">
      <Text fontSize={18} fontWeight="bold">
        タグ
      </Text>
      <SimpleGrid mt={3} columns={2} spacing={3}>
        <RecruitmentTag
          icon="⚽️"
          displayName={recruitmentData.competition.name}
        />
        <RecruitmentTag
          icon={typeIcon(recruitmentData.type)}
          displayName={typeDisplayName(recruitmentData.type)}
        />
        {recruitmentData.tags.map((tag) => (
          <RecruitmentTag
            key={tag?.id}
            icon={<IoMdPricetag />}
            displayName={String(tag?.name)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
});
