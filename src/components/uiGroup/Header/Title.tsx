import { FC, memo } from 'react';
import { Image, Text } from '@chakra-ui/react';

export const Title: FC = memo(() => {
  return (
    <>
      <Image src="/src/assets/img/logo.png" alt="app logo" w={7} mr={1.5} />
      <Text fontFamily="Nunito" fontWeight="bold" fontSize={24}>
        Connefut
      </Text>
    </>
  );
});
