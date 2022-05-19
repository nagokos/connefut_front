import { Button, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineBookmarkBorder } from 'react-icons/md';

export const Stock: FC = memo(() => {
  return (
    <>
      <Text
        fontWeight="bold"
        fontSize={13.5}
        letterSpacing={1}
        fontFamily="ヒラギノゴシック"
      >
        10人がストック中
      </Text>
      <Button
        mt={4}
        bg="white"
        w="100%"
        color="blackAlpha.700"
        fontSize={13}
        _hover={{
          bg: 'blackAlpha.50',
        }}
        _active={{
          bg: 'blackAlpha.50',
        }}
        _focus={{
          boxShadow: '0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)',
        }}
        boxShadow="0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)"
        leftIcon={
          <MdOutlineBookmarkBorder size={16} color="RGBA(0, 0, 0, 0.48)" />
        }
      >
        ストックする
      </Button>
    </>
  );
});
