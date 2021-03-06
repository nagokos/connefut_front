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
import { useRecoilValue } from 'recoil';
import { graphql } from 'relay-runtime';
import {
  recruitmentCardConnection,
  recruitmentSelfCreatedConnection,
  recruitmentStockedConnection,
} from '../../../../recoil/recruitment';
import { useFlash } from '../../../../hooks/useFlash';

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
    $connections: [ID!]!
    $id: ID!
  ) {
    deleteRecruitment(id: $id) {
      deletedRecruitmentId @deleteEdge(connections: $connections)
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

  const { showFlash } = useFlash();

  const selfConnection = useRecoilValue(recruitmentSelfCreatedConnection);
  const cardConnection = useRecoilValue(recruitmentCardConnection);
  const stockedConnection = useRecoilValue(recruitmentStockedConnection);

  const recruitmentData =
    useFragment<RecruitmentSelfCreatedTrashModal_recruitment$key>(
      recruitmentFragemnt,
      recruitment
    );

  const [commit, isInFlight] =
    useMutation<RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation>(
      deleteRecruitmentMutation
    );

  const connections = () => {
    if (cardConnection && stockedConnection) {
      return [selfConnection, cardConnection, stockedConnection];
    } else if (cardConnection) {
      return [selfConnection, cardConnection];
    } else if (stockedConnection) {
      return [selfConnection, stockedConnection];
    } else {
      return [selfConnection];
    }
  };

  const deleteRecruitment = () => {
    commit({
      variables: {
        id: String(recruitmentData.id),
        connections: connections(),
      },
      onCompleted(response, errors) {
        if (!errors) {
          onClose();
          showFlash({ title: '??????????????????', status: 'success' });
        }
      },
    });
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(0, 0, 0, 0.22)" />
      <ModalContent w={320}>
        <ModalHeader pb={2} mt={2} textAlign="center">
          ?????????????????????
        </ModalHeader>
        <ModalBody pb={5}>
          <Text fontSize={13} color="blackAlpha.600">
            ?????? ???{recruitmentData.title}??? ????????????????????????
            <br />
            ?????????????????????????????????????????????????????? ???????????????????????????????????????
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
                ????????????
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
                ???????????????
              </Button>
            </Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
