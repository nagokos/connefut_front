import { FC, memo } from 'react';
import { useBoolean } from '@chakra-ui/react';
import { IoMdNotificationsOutline } from 'react-icons/io';

export const Notification: FC = memo(() => {
  const [flagBell, setFlagBell] = useBoolean();

  return (
    <IoMdNotificationsOutline
      onMouseEnter={setFlagBell.on}
      onMouseLeave={setFlagBell.off}
      fontSize={24}
      cursor="pointer"
      color={flagBell ? '#000000' : '#78909c'}
    />
  );
});
