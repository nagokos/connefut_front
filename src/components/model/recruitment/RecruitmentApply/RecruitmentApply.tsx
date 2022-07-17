import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { format, formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { FC, memo } from 'react';
import { useFragment } from 'react-relay';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { graphql } from 'relay-runtime';
import { viewerQuery } from '../../../../recoil/user';
import { RecruitmentApplyForModal } from '../RecruitmentApplyForModal/RecruitmentApplyForModal';
import { RecruitmentApply_recruitment$key } from './__generated__/RecruitmentApply_recruitment.graphql';

const recruitmentFragment = graphql`
  fragment RecruitmentApply_recruitment on Recruitment {
    user {
      id
    }
    closingAt
  }
`;

type Props = {
  recruitment: RecruitmentApply_recruitment$key;
};

export const RecruitmentApply: FC<Props> = memo((props) => {
  const { recruitment } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { recruitmentId } = useParams();
  const viewer = useRecoilValue(viewerQuery);

  const recruitmentData = useFragment<RecruitmentApply_recruitment$key>(
    recruitmentFragment,
    recruitment
  );

  const buttonDisplayName = () => {
    if (viewer?.id === recruitmentData.user.id) {
      return '自分の募集です';
    } else {
      return '応募する';
    }
  };

  return (
    <>
      <Box mt={2}>
        <Box
          fontSize={14.5}
          fontFamily="ヒラギノ角ゴシック"
          mt={1}
          textAlign="center"
        >
          <Box as="span" mr={1}>
            ⏰
          </Box>
          募集期限まで残り
          {formatDistanceToNow(new Date(String(recruitmentData.closingAt)), {
            locale: ja,
          })}
        </Box>
        <Box mt={0.5} fontSize={12.5} textAlign="center" color="blackAlpha.700">
          (
          {format(
            new Date(String(recruitmentData.closingAt)),
            'yyyy年MM月dd日 (E) HH:mm',
            { locale: ja }
          )}
          )
        </Box>

        <Button
          mt={3.5}
          fontSize={13.5}
          variant="solid"
          w="100%"
          disabled={viewer?.id === recruitmentData.user.id}
          boxShadow="0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)"
          _active={{
            boxShadow:
              '0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)',
          }}
          _focus={{
            boxShadow:
              '0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)',
          }}
          _hover={{
            bg: 'primary.hover',
          }}
          onClick={onOpen}
        >
          {buttonDisplayName()}
        </Button>
      </Box>
      <RecruitmentApplyForModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
