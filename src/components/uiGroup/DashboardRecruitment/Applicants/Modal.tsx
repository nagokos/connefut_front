import {
  Avatar,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const ApplicantsModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(0, 0, 0, 0.22)" />
      <ModalContent w={350} rounded="lg">
        <ModalHeader>応募者</ModalHeader>
        <ModalCloseButton mt={1.5} />
        <ModalBody pb={5} fontFamily="ヒラギノ角ゴシック">
          <Stack spacing={6}>
            <Box display="flex" alignItems="center" cursor="pointer">
              <Avatar w={10} h={10} />
              <Box ml={3}>
                <Box fontSize={13}>Kosuda</Box>
                <Box fontSize={11} color="blackAlpha.500">
                  応募日 2022年01月22日
                </Box>
              </Box>
            </Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
