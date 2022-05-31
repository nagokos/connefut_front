import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { CancelButton } from './CancelButton';
import { DeleteButton } from './DeleteButton';

type Props = {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export const DeleteModal: FC<Props> = memo((props) => {
  const { id, title, isOpen, onClose } = props;

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(0, 0, 0, 0.22)" />
      <ModalContent w={320}>
        <ModalHeader pb={2} mt={2} textAlign="center">
          削除しますか？
        </ModalHeader>
        <ModalBody pb={5}>
          <Text fontSize={13} color="blackAlpha.600">
            募集 「{title} 」 を削除しますか？
            <br />
            この操作は元に戻すことはできません。 募集は完全に削除されます。
          </Text>
          <Stack mt={5} spacing={3.5}>
            <DeleteButton id={id} title={title} onClose={onClose} />
            <CancelButton onClose={onClose} />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
