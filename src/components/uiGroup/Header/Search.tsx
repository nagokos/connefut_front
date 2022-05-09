import { FC, memo } from 'react';
import { useBoolean } from '@chakra-ui/react';
import { IoIosSearch } from 'react-icons/io';

export const Search: FC = memo(() => {
  const [flagSearch, setFlagSearch] = useBoolean();

  return (
    <IoIosSearch
      onMouseEnter={setFlagSearch.on}
      onMouseLeave={setFlagSearch.off}
      fontSize={24}
      cursor="pointer"
      color={flagSearch ? '#000000' : '#78909c'}
    />
  );
});
