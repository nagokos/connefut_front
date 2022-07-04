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
import { useNavigate } from 'react-router-dom';
import { EmailForm } from './EmailForm';
import { PasswordForm } from './PasswordForm';
import { SubmitButton } from '../../uiParts/SubmitButton';
import { loginSchema } from '../../../yup/userSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFlash } from '../../../hooks/useFlash';
import { graphql } from 'relay-runtime';
import { useMutation } from 'react-relay';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from '../../../recoil/user';
import {
  LoginEmailModal_LoginUserMutation,
  LoginUserInput,
} from './__generated__/LoginEmailModal_LoginUserMutation.graphql';

const loginUserMutation = graphql`
  mutation LoginEmailModal_LoginUserMutation($input: LoginUserInput!) {
    loginUser(input: $input) {
      user {
        id
        name
        avatar
      }
      userErrors {
        __typename
        ... on LoginUserInvalidInputError {
          message
          field
        }
        ... on LoginUserAuthenticationError {
          message
        }
      }
    }
  }
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginEmailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  const { showFlash } = useFlash();
  const navigate = useNavigate();

  const [commit, isInFlight] =
    useMutation<LoginEmailModal_LoginUserMutation>(loginUserMutation);

  const setUser = useSetRecoilState(currentUserState);

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { isValid },
  } = useForm<LoginUserInput>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (values: LoginUserInput) => {
    commit({
      variables: {
        input: values,
      },
      onCompleted(response, errors) {
        if (errors) {
          return console.log(errors);
        }
        if (response.loginUser.user) {
          setUser(response.loginUser.user);
          navigate('/recruitments');
        } else {
          response.loginUser.userErrors.forEach((error) => {
            if (error.__typename === 'LoginUserAuthenticationError') {
              showFlash({ title: error.message, status: 'error' });
            }
            if (error.__typename === 'LoginUserInvalidInputError') {
              const field = error.field as 'email' | 'password';
              setError(field, {
                message: error.message,
              });
            }
          });
        }
      },
    });
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
            <SubmitButton
              isValid={isValid}
              displayName="ログイン"
              isSubmitting={isInFlight}
            />
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
});
