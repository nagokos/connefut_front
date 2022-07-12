import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useFragment, useMutation } from 'react-relay';
import { graphql } from 'relay-runtime';
import { RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation } from './__generated__/RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation.graphql';
import { RecruitmentSelfCreatedTrashModal_recruitment$key } from './__generated__/RecruitmentSelfCreatedTrashModal_recruitment.graphql';

const recruitmentFragemnt = graphql`
  fragment RecruitmentSelfCreatedTrashModal_recruitment on Recruitment {
    id
    title
  }
`;

const deleteRecruitmentMutation = graphql`
  mutation RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation(
    $id: String!
  ) {
    deleteRecruitment(id: $id) {
      id @deleteRecord
    }
  }
`;

type Props = {
  recruitment: RecruitmentSelfCreatedTrashModal_recruitment$key;
  isOpen: boolean;
  onClose: () => void;
};

export const RecruitmentSelfCreatedTrashModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, recruitment } = props;

  const recruitmentData =
    useFragment<RecruitmentSelfCreatedTrashModal_recruitment$key>(
      recruitmentFragemnt,
      recruitment
    );

  const [commit, isInFlight] =
    useMutation<RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation>(
      deleteRecruitmentMutation
    );

  const deleteRecruitment = () => {
    commit({
      variables: {
        id: String(recruitmentData.id),
      },
      onCompleted(response, errors) {
        if (!errors) {
          onClose();
        }
      },
    });
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(0, 0, 0, 0.22)" />
      <ModalContent w={320}>
        <ModalHeader pb={2} mt={2} textAlign="center">
          削除しますか？
        </ModalHeader>
        <ModalBody pb={5}>
          <Text fontSize={13} color="blackAlpha.600">
            募集 「{recruitmentData.title}」 を削除しますか？
            <br />
            この操作は元に戻すことはできません。 募集は完全に削除されます。
          </Text>
          <Stack mt={5} spacing={3.5}>
            <Box>
              <Button
                fontSize={12}
                w="100%"
                bg="error.main"
                isLoading={isInFlight}
                disabled={isInFlight}
                onClick={deleteRecruitment}
                _hover={{ bg: '#D11C1C' }}
                _active={{ bg: '#D11C1C' }}
              >
                削除する
              </Button>
            </Box>
            <Box>
              <Button
                bg="whiteAlpha.800"
                color="blackAlpha.600"
                border="1px solid"
                w="100%"
                borderColor="blackAlpha.200"
                fontSize={12}
                mr={1}
                onClick={onClose}
                _hover={{
                  bg: 'blackAlpha.50',
                }}
                _active={{
                  bg: 'blackAlpha.50',
                }}
              >
                キャンセル
              </Button>
            </Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
