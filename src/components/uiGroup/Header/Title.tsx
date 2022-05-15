import { FC, memo, startTransition } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Title: FC = memo(() => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        cursor="pointer"
        onClick={() =>
          startTransition(() => {
            navigate('/');
          })
        }
      >
        <Image src="/src/assets/img/logo.png" alt="app logo" w={7} mr={1.5} />
        <Text fontFamily="Nunito" fontWeight="bold" fontSize={25}>
          Connefut
        </Text>
      </Box>
    </>
  );
});
