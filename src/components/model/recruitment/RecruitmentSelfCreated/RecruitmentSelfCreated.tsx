import {
  Box,
  Divider,
  IconButton,
  Spacer,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { format, formatDistanceToNow } from 'date-fns/esm';
import { ja } from 'date-fns/locale';
import { FC, memo } from 'react';
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { RecruitmentSelfCreated_recruitment$key } from './__generated__/RecruitmentSelfCreated_recruitment.graphql';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { HiOutlineUsers, HiOutlineTrash } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { RecruitmentSelfCreatedApplicantsModal } from '../RecruitmentSelfCreatedApplicantsModal/RecruitmentSelfCreatedApplicantsModal';
import { RecruitmentSelfCreatedTrashModal } from '../RecruitmentSelfCreatedTrashModal/RecruitmentSelfCreatedTrashModal';
import { RecruitmentSelfCreatedTrashModal_recruitment$key } from '../RecruitmentSelfCreatedTrashModal/__generated__/RecruitmentSelfCreatedTrashModal_recruitment.graphql';

const recruitmentFragment = graphql`
  fragment RecruitmentSelfCreated_recruitment on Recruitment {
    id
    title
    status
    createdAt
    publishedAt
    closingAt
  }
`;

type Props = {
  recruitment: RecruitmentSelfCreated_recruitment$key;
  trashRecruitment: RecruitmentSelfCreatedTrashModal_recruitment$key;
};

export const RecruitmentSelfCreated: FC<Props> = memo((props) => {
  const { recruitment, trashRecruitment } = props;

  const navigate = useNavigate();
  const {
    isOpen: isOpenTrash,
    onOpen: onOpenTrash,
    onClose: onCloseTrash,
  } = useDisclosure();
  const {
    isOpen: isOpenApplicants,
    onOpen: onOpenApplicants,
    onClose: onCloseApplicants,
  } = useDisclosure();

  const recruitmentData = useFragment<RecruitmentSelfCreated_recruitment$key>(
    recruitmentFragment,
    recruitment
  );

  const statusTag = () => {
    if (recruitmentData.status === 'PUBLISHED') {
      return '公開中';
    } else if (recruitmentData.status === 'DRAFT') {
      return '下書き';
    } else {
      return '締切';
    }
  };

  const statusColor = () => {
    if (recruitmentData.status === 'PUBLISHED') {
      return 'primary.main';
    } else if (recruitmentData.status === 'DRAFT') {
      return 'blue.500';
    } else {
      return 'error.main';
    }
  };

  const statusBg = () => {
    if (recruitmentData.status === 'PUBLISHED') {
      return 'primary.light';
    } else if (recruitmentData.status === 'DRAFT') {
      return 'blue.50';
    } else {
      return 'red.50';
    }
  };

  const statusFormatDistanceToNow = () => {
    if (recruitmentData.status === 'PUBLISHED') {
      const distanceToNow = formatDistanceToNow(
        new Date(String(recruitmentData.publishedAt)),
        {
          locale: ja,
        }
      ).replace('約', '');
      return `${distanceToNow}前に公開`;
    } else {
      const distanceToNow = formatDistanceToNow(
        new Date(recruitmentData.createdAt),
        {
          locale: ja,
        }
      ).replace('約', '');
      return `${distanceToNow}前に作成`;
    }
  };

  const closingAtString = () => {
    return format(
      new Date(String(recruitmentData.closingAt)),
      'yyyy年MM月dd日(E)',
      {
        locale: ja,
      }
    );
  };

  return (
    <>
      <Box>
        <Box display="flex" alignItems="center">
          <Box
            as="span"
            bg={statusBg()}
            color={statusColor()}
            fontSize={12.5}
            px={1.5}
            py={0.5}
            rounded={3}
          >
            {statusTag()}
          </Box>
          <Spacer />
          {recruitmentData.status === 'PUBLISHED' && (
            <Tooltip
              label="応募者を見る"
              rounded={4}
              fontSize={11}
              hasArrow
              arrowSize={8}
              py={0.5}
            >
              <IconButton
                icon={<HiOutlineUsers />}
                size="sm"
                aria-label="edit"
                rounded="full"
                bg="white"
                fontSize={16}
                color="blackAlpha.500"
                onClick={onOpenApplicants}
                _hover={{
                  bg: 'blackAlpha.50',
                }}
                _active={{
                  bg: 'blackAlpha.50',
                }}
              />
            </Tooltip>
          )}

          <Tooltip
            label="編集する"
            rounded={4}
            fontSize={11}
            hasArrow
            arrowSize={8}
            py={0.5}
          >
            <IconButton
              icon={<MdOutlineModeEditOutline />}
              size="sm"
              aria-label="edit"
              rounded="full"
              bg="white"
              fontSize={16}
              color="blackAlpha.500"
              onClick={() =>
                navigate(`/recruitments/${recruitmentData.id}/edit`)
              }
              _hover={{
                bg: 'blackAlpha.50',
              }}
              _active={{
                bg: 'blackAlpha.50',
              }}
            />
          </Tooltip>
          <Tooltip
            label="削除する"
            rounded={4}
            fontSize={11}
            hasArrow
            arrowSize={8}
            py={0.5}
          >
            <IconButton
              icon={<HiOutlineTrash />}
              size="sm"
              aria-label="edit"
              rounded="full"
              bg="white"
              fontSize={16}
              color="blackAlpha.500"
              onClick={onOpenTrash}
              _hover={{
                bg: 'blackAlpha.50',
              }}
              _active={{
                bg: 'blackAlpha.50',
              }}
            />
          </Tooltip>
        </Box>
        <Box
          cursor="pointer"
          mt={2}
          fontSize={15.5}
          fontWeight="bold"
          onClick={() => navigate(`/recruitments/${recruitmentData.id}/edit`)}
        >
          {recruitmentData.title}
        </Box>
        <Box
          fontSize={11}
          mt={1}
          color="blackAlpha.600"
          fontFamily="ヒラギノ角ゴシック"
          display="flex"
          alignItems="center"
        >
          {recruitmentData.status === 'PUBLISHED' && (
            <Box display="flex">
              <Box mr={1}>募集期限</Box>
              <Box>{closingAtString()}</Box>
              <Box mx={0.5}>・</Box>
            </Box>
          )}
          {statusFormatDistanceToNow()}
        </Box>
        <Divider borderColor="#ebf2f2" my={4} />
      </Box>
      <RecruitmentSelfCreatedApplicantsModal
        isOpen={isOpenApplicants}
        onClose={onCloseApplicants}
      />
      <RecruitmentSelfCreatedTrashModal
        recruitment={trashRecruitment}
        isOpen={isOpenTrash}
        onClose={onCloseTrash}
      />
    </>
  );
});
