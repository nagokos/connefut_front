import { IconButton, Tooltip, useDisclosure } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { HiOutlineUsers } from 'react-icons/hi';
import { ApplicantsModal } from './Modal';

export const Applicants: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
          onClick={onOpen}
          _hover={{
            bg: 'blackAlpha.50',
          }}
          _active={{
            bg: 'blackAlpha.50',
          }}
        />
      </Tooltip>
      <ApplicantsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
