import { IconButton } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';

type Props = {
  clickEvent: () => void;
};

export const ArrowLeftButton: FC<Props> = memo((props) => {
  const { clickEvent } = props;

  return (
    <IconButton
      aria-label="back"
      rounded="full"
      variant="ghost"
      _hover={{
        bg: 'primary.light',
      }}
      _active={{
        bg: 'primary.light',
      }}
      onClick={clickEvent}
      size="lg"
      fontSize={18}
      icon={<HiOutlineArrowLeft />}
    />
  );
});
