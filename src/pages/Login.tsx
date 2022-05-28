import {
  Box,
  Stack,
  Image,
  Divider,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { LoginEmailModal } from '../components/uiGroup';
import { AppInButton, ArrowLeftButton } from '../components/uiParts';

export const Login: FC = memo(() => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position="absolute" mt={5} ml={5}>
        <ArrowLeftButton clickEvent={() => navigate('/')} />
      </Box>
      <Box h="100vh" mx="auto" maxW={390} py={44}>
        <Text
          mb={8}
          textAlign="center"
          fontWeight="bold"
          fontSize={28}
          color="blackAlpha.800"
        >
          ログイン
        </Text>
        <Stack spacing={6}>
          <AppInButton
            clickEvent={onOpen}
            icon={<MdEmail color="#f42121" size={18} />}
            title="メールアドレスでログイン"
          />
          <AppInButton
            clickEvent={() => navigate('/')}
            icon={<Image src="/src/assets/img/google.png" w={4} />}
            title="Googleでログイン"
          />
          <AppInButton
            clickEvent={() => navigate('/')}
            icon={<Image src="/src/assets/img/line.png" w={4} />}
            title="LINEでログイン"
          />
          <Box pt={3}>
            <Divider border="1px solid #f0f5f4" borderColor="primary.light" />
          </Box>
          <Box textAlign="center">
            <Text color="blackAlpha.800" fontSize={13} fontWeight="bold">
              アカウントをお持ちでない方
            </Text>
            <Box mt={5}>
              <AppInButton
                color="primary.main"
                clickEvent={() => navigate('/signup')}
                title="新規登録"
              />
            </Box>
          </Box>
        </Stack>
      </Box>
      <LoginEmailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
