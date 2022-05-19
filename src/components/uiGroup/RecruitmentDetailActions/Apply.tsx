import { Button, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

export const Apply: FC = memo(() => {
  return (
    <>
      <Text
        fontWeight="bold"
        fontSize={13.5}
        letterSpacing={1}
        fontFamily="ヒラギノゴシック"
      >
        1人が応募中
      </Text>
      <Button
        mt={4}
        fontSize={13.5}
        w="100%"
        _active={{
          boxShadow: '0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)',
        }}
        _focus={{
          boxShadow: '0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)',
        }}
        boxShadow="0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)"
      >
        応募する
      </Button>
    </>
  );
});
