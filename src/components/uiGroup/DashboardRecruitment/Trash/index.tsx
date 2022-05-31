import { IconButton, Tooltip, useDisclosure } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { DeleteModal } from './Modal/index';

type Props = {
  id: string;
  title: string;
};

export const Trash: FC<Props> = memo((props) => {
  const { id, title } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
          onClick={onOpen}
          _hover={{
            bg: 'blackAlpha.50',
          }}
          _active={{
            bg: 'blackAlpha.50',
          }}
        />
      </Tooltip>
      <DeleteModal id={id} title={title} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
