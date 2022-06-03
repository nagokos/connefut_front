import { FC, memo } from 'react';
import { useBoolean } from '@chakra-ui/react';
import { TbBell } from 'react-icons/tb';

export const Notification: FC = memo(() => {
  const [flag, setFlag] = useBoolean();

  return (
    <TbBell
      onMouseEnter={setFlag.on}
      onMouseLeave={setFlag.off}
      fontSize={22}
      cursor="pointer"
      color={flag ? '#000000' : '#78909c'}
    />
  );
});
