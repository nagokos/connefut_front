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

import { yupResolver } from '@hookform/resolvers/yup';

import { graphql } from 'relay-runtime';
import { useMutation } from 'react-relay';
import { useSetRecoilState } from 'recoil';
import { useFlash } from '../../../../hooks/useFlash';
import {
  LoginUserInput,
  UserLoginModal_LoginUserMutation,
} from './__generated__/UserLoginModal_LoginUserMutation.graphql';
import { viewerState } from '../../../../recoil/user';
import { loginSchema } from '../../../../yup/userSchema';
import { UserLoginEmailForm } from '../UserLoginEmailForm/UserLoginEmailForm';
import { UserLoginPasswordForm } from '../UserLoginPasswordForm/UserLoginPasswordForm';
import { SubmitButton } from '../../../ui/SubmitButton/SubmitButton';

const loginUserMutation = graphql`
  mutation UserLoginModal_LoginUserMutation($input: LoginUserInput!) {
    loginUser(input: $input) {
      viewer {
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

export const UserLoginModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  const { showFlash } = useFlash();
  const navigate = useNavigate();

  const [commit, isInFlight] =
    useMutation<UserLoginModal_LoginUserMutation>(loginUserMutation);

  const setUser = useSetRecoilState(viewerState);

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
        if (response.loginUser.viewer) {
          setUser(response.loginUser.viewer);
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
            <UserLoginEmailForm control={control} />
            <UserLoginPasswordForm control={control} />
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
