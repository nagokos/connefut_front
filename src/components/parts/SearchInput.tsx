import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

export const SearchInput: FC = memo(() => {
  return (
    <InputGroup zIndex={0}>
      <InputLeftElement zIndex={2} pointerEvents="none">
        <Box
          _focus={{ color: 'RGBA(0, 0, 0, 0.48)' }}
          _focusVisible={{ color: 'RGBA(0, 0, 0, 0.48)' }}
          color="RGBA(0, 0, 0, 0.48)"
        >
          <MdOutlineSearch fontSize={18} />
        </Box>
      </InputLeftElement>
      <Input
        _focus={{ boxShadow: 'none !important' }}
        border="none"
        type="search"
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
