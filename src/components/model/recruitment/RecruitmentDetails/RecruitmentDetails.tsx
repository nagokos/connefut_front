import {
  Box,
  Button,
  Divider,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';

import { RecruitmentDetails_recruitment$key } from './__generated__/RecruitmentDetails_recruitment.graphql';
import { RecruitmentDetailsTemplate } from '../RecruitmentDetailsTemplate/RecruitmentDetailsTemplate';
import { Type } from '../RecruitmentCard/__generated__/RecruitmentCard_recruitment.graphql';
import { RecruitmentLocationModal } from '../RecruitmentLocationModal/RecruitmentLocationModal';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

const recruitmentDetailsFragment = graphql`
  fragment RecruitmentDetails_recruitment on Recruitment {
    title
    closingAt
    startAt
    locationLat
    locationLng
    detail
    type
    competition {
      name
    }
    prefecture {
      name
    }
    user {
      name
      avatar
    }
    ...RecruitmentLocationModal_recruitment
  }
`;

type Props = {
  recruitment: RecruitmentDetails_recruitment$key;
};

export const RecruitmentDetails: FC<Props> = memo((props) => {
  const { recruitment } = props;
  const recruitmentData = useFragment<RecruitmentDetails_recruitment$key>(
    recruitmentDetailsFragment,
    recruitment
  );

  console.log(recruitmentData);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const typeDisplayName = (type: Type) => {
    if (type === 'OPPONENT') {
      return '対戦相手の募集';
    } else if (type === 'INDIVIDUAL') {
      return '個人プレーヤーの募集';
    } else if (type === 'JOINING') {
      return 'チームに加入したい人の募集';
    } else if (type === 'MEMBER') {
      return 'メンバーの募集';
    } else {
      return 'その他';
    }
  };

  const startAtDisplayName = (statAt: string) => {
    const displayName = format(new Date(statAt), 'yyyy年MM月dd日 (E) MM:dd', {
      locale: ja,
    });
    return displayName;
  };

  return (
    <>
      <Box
        px={9}
        py={9}
        bg="white"
        boxShadow="0 2px 4px #4385bb12"
        rounded="xl"
      >
        <Box fontWeight="bold" fontSize={26} fontFamily="ヒラギノ角ゴシック">
          {recruitmentData.title}
        </Box>
        <Divider borderColor="primary.50" mt={2} />
        <Stack mt={8} spacing={7} maxW="590">
          <RecruitmentDetailsTemplate
            detailTitle="募集競技"
            displayName={String(recruitmentData.competition?.name)}
          />
          <RecruitmentDetailsTemplate
            detailTitle="募集タイプ"
            displayName={typeDisplayName(recruitmentData.type)}
          />
          {recruitmentData.startAt ? (
            <RecruitmentDetailsTemplate
              detailTitle="開催日時"
              displayName={startAtDisplayName(recruitmentData.startAt)}
            />
          ) : null}

          <Box>
            <RecruitmentDetailsTemplate
              detailTitle="募集エリア"
              displayName={String(recruitmentData.prefecture?.name)}
            />
            {recruitmentData.locationLat && recruitmentData.locationLng && (
              <Box display="flex" alignItems="center">
                <Box
                  display="flex"
                  alignItems="center"
                  fontSize={14}
                  minW={130}
                />
                <Button
                  variant="outline"
                  mt={2}
                  px={2}
                  fontSize={5}
                  size="sm"
                  h={7}
                  boxShadow="sm"
                  onClick={onOpen}
                  _active={{
                    boxShadow: 'sm',
                  }}
                >
                  マップを見る
                </Button>
              </Box>
            )}
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              alignItems="start"
              fontSize={14}
              justifyContent="start"
              minW={130}
            >
              <Box mr={1}>■</Box>
              <Box>募集詳細</Box>
            </Box>
            <Text
              bg="primary.light"
              fontSize={14}
              px={4}
              py={3}
              overflowWrap="break-word"
              whiteSpace="pre-wrap"
              rounded="md"
              minW="590"
              fontFamily="ヒラギノ角ゴシック"
            >
              {recruitmentData.detail}
            </Text>
          </Box>
        </Stack>
      </Box>
      <RecruitmentLocationModal
        recruitment={recruitmentData}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
});
