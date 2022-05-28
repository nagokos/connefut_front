import { IconButton, Tooltip } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineAddLocation } from 'react-icons/md';

type Props = {
  setLatLng: () => void;
};

export const RegisterButton: FC<Props> = memo((props) => {
  const { setLatLng } = props;

  return (
    <Tooltip
      borderRadius="md"
      label="登録する"
      fontSize={11}
      px={2.5}
      py={1}
      hasArrow
      placement="top"
    >
      <IconButton
        aria-label="icon"
        icon={<MdOutlineAddLocation />}
        position="absolute"
        bottom={7}
        color="red.500"
        bg="white"
        fontSize={22}
        border="1px solid RGBA(0, 0, 0, 0.06)"
        rounded="full"
        size="lg"
        w={14}
        h={14}
        boxShadow="lg"
        left={3}
        onClick={setLatLng}
        _hover={{
          bg: '#F7FAFC',
          boxShadow: 'lg',
        }}
        _active={{
          bg: '#F7FAFC',
          boxShadow: 'lg',
        }}
        _focus={{
          bg: '#F7FAFC',
          boxShadow: 'lg',
        }}
      />
    </Tooltip>
  );
});
