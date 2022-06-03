import { FC, memo } from 'react';
import { useBoolean } from '@chakra-ui/react';
import { TbSearch } from 'react-icons/tb';

export const Search: FC = memo(() => {
  const [flag, setFlag] = useBoolean();

  return (
    <TbSearch
      onMouseEnter={setFlag.on}
      onMouseLeave={setFlag.off}
      fontSize={22}
      cursor="pointer"
      color={flag ? '#000000' : '#78909c'}
    />
  );
});
