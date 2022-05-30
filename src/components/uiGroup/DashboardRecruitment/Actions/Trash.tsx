import { IconButton, Tooltip } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

export const Trash: FC = memo(() => {
  return (
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
        _hover={{
          bg: 'blackAlpha.50',
        }}
        _active={{
          bg: 'blackAlpha.50',
        }}
      />
    </Tooltip>
  );
});
