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
import { SignUpEmailModal } from '../components/uiGroup';
import { AppInButton, ArrowLeftButton } from '../components/uiParts';

export const SignUp: FC = memo(() => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ArrowLeftButton clickEvent={() => navigate('/')} />
      <Box h="100vh" mx="auto" maxW={390} py={44}>
        <Text
          mb={8}
          textAlign="center"
          fontWeight="bold"
          fontSize={28}
          color="blackAlpha.800"
        >
          新規登録
        </Text>
        <Stack spacing={6}>
          <AppInButton
            clickEvent={onOpen}
            icon={<MdEmail color="#f42121" size={18} />}
            title="メールアドレスで登録"
          />
          <AppInButton
            clickEvent={() => navigate('/')}
            icon={<Image src="/src/assets/img/google.png" w={4} />}
            title="Googleで登録"
          />
          <AppInButton
            clickEvent={() => navigate('/')}
            icon={<Image src="/src/assets/img/line.png" w={4} />}
            title="LINEで登録"
          />
          <Box pt={3}>
            <Divider border="1px solid #f0f5f4" borderColor="primary.light" />
          </Box>
          <Box textAlign="center">
            <Text color="blackAlpha.800" fontSize={13} fontWeight="bold">
              アカウントをお持ちの方
            </Text>
            <Box mt={5}>
              <AppInButton
                color="primary.main"
                clickEvent={() => navigate('/login')}
                title="ログイン"
              />
            </Box>
          </Box>
        </Stack>
      </Box>
      <SignUpEmailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
