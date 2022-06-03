import { FC, memo } from 'react';
import { useBoolean } from '@chakra-ui/react';
import { TbMessageCircle2 } from 'react-icons/tb';

export const Message: FC = memo(() => {
  const [flag, setFlag] = useBoolean();

  return (
    <TbMessageCircle2
      onMouseEnter={setFlag.on}
      onMouseLeave={setFlag.off}
      fontSize={22}
      cursor="pointer"
      color={flag ? '#000000' : '#78909c'}
    />
  );
});
