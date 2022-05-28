import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';

import {
  LoginUserInput,
  useLoginUserMutation,
} from '../../../generated/graphql';
import { GraphQLError } from 'graphql';
import { useNavigate } from 'react-router-dom';
import { EmailForm } from './EmailForm';
import { PasswordForm } from './PasswordForm';
import { SubmitButton } from '../../uiParts/SubmitButton';
import { loginSchema } from '../../../yup/userSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFlash } from '../../../hooks/useFlash';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginEmailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  const { showFlash } = useFlash();

  const navigate = useNavigate();

  const [_, loginUser] = useLoginUserMutation();

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginUserInput>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (values: LoginUserInput) => {
    const res = await loginUser({
      loginUserInput: values,
    });

    if (res.error) {
      res.error.graphQLErrors.forEach((error: GraphQLError) => {
        const field = error.extensions['attribute'] as 'email' | 'password';
        setError(field, { message: error.message });
      });
    } else {
      showFlash({ title: 'ログインしました', status: 'success' });
      navigate('/');
    }
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(0, 0, 0, 0.22)" />
      <ModalContent maxW={410} py={1.5} borderRadius="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader fontSize={19} textAlign="center">
            メールアドレスでログイン
          </ModalHeader>
          <ModalCloseButton onClick={() => reset()} />
          <ModalBody pb={3}>
            <EmailForm control={control} />
            <PasswordForm control={control} />
          </ModalBody>
          <ModalFooter>
            <SubmitButton isSubmitting={isSubmitting} />
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
});
