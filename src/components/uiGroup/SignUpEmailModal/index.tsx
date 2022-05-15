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
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateUserMutation } from '../../../generated/graphql';
import { GraphQLError } from 'graphql';
import { useNavigate } from 'react-router-dom';
import { NameForm } from './NameForm';
import { EmailForm } from './EmailForm';
import { PasswordForm } from './PasswordForm';
import { SubmitButton } from '../../uiParts/SubmitButton';
import { signUpSchema, signUpType } from '../../../zod/userSchema';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SignUpEmailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  const navigate = useNavigate();

  const [_, createUser] = useCreateUserMutation();

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { isSubmitting },
  } = useForm<signUpType>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit = async (values: signUpType) => {
    console.log(values);

    const res = await createUser(values);

    if (res.error) {
      res.error.graphQLErrors.forEach((error: GraphQLError) => {
        const field = error.extensions['attribute'] as
          | 'name'
          | 'email'
          | 'password';
        setError(field, { message: error.message });
      });
    } else {
      navigate('/');
    }
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(0, 0, 0, 0.22)" />
      <ModalContent maxW={410} py={1.5} borderRadius="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader fontSize={19} textAlign="center">
            メールアドレスで登録
          </ModalHeader>
          <ModalCloseButton onClick={() => reset()} />
          <ModalBody pb={3}>
            <NameForm control={control} />
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
