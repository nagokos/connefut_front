import { FC, memo } from 'react';
import { useBoolean } from '@chakra-ui/react';
import { TbMessageCircle2 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

export const Message: FC = memo(() => {
  const [flag, setFlag] = useBoolean();
  const navigate = useNavigate();

  return (
    <TbMessageCircle2
      onMouseEnter={setFlag.on}
      onMouseLeave={setFlag.off}
      fontSize={22}
      cursor="pointer"
      color={flag ? '#000000' : '#78909c'}
      onClick={() => navigate('/messages')}
    />
  );
});
