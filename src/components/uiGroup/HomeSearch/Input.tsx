import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

export const SearchInput: FC = memo(() => {
  return (
    <InputGroup>
      <InputLeftElement zIndex={1} pointerEvents="none">
        <MdOutlineSearch color="RGBA(0, 0, 0, 0.48)" fontSize={18} />
      </InputLeftElement>
      <Input
        _focus={{ borderColor: 'none' }}
        _hover={{ borderColor: 'none' }}
        border="none"
        type="search"
        zIndex={0}
        bg="#f8fafa"
        borderColor="none"
        placeholder="キーワードで検索"
        _placeholder={{ color: 'RGBA(0, 0, 0, 0.48)' }}
        fontSize={13}
        borderRadius={3}
      />
    </InputGroup>
  );
});
