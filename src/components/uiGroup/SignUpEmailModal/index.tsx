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
import { NameForm } from './NameForm';
import { EmailForm } from './EmailForm';
import { PasswordForm } from './PasswordForm';
import { SubmitButton } from '../../uiParts/SubmitButton';
import { signUpSchema } from '../../../yup/userSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { graphql } from 'relay-runtime';
import { useMutation } from 'react-relay';

import { useSetRecoilState } from 'recoil';
import { currentUserState } from '../../../recoil/user';
import {
  RegisterUserInput,
  SignUpEmailModal_RegisterUserMutation,
} from './__generated__/SignUpEmailModal_RegisterUserMutation.graphql';

const registerUserMutation = graphql`
  mutation SignUpEmailModal_RegisterUserMutation($input: RegisterUserInput!) {
    registerUser(input: $input) {
      user {
        id
        name
        avatar
      }
      userErrors {
        __typename
        ... on RegisterUserInvalidInputError {
          message
          field
        }
      }
    }
  }
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SignUpEmailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  const navigate = useNavigate();

  const setUser = useSetRecoilState(currentUserState);

  const [commit, isInFlight] =
    useMutation<SignUpEmailModal_RegisterUserMutation>(registerUserMutation);

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { isValid },
  } = useForm<RegisterUserInput>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit = (values: RegisterUserInput) => {
    commit({
      variables: {
        input: values,
      },
      onCompleted(response, errors) {
        if (errors) {
          return console.log(errors);
        }
        if (response.registerUser.user) {
          setUser(response.registerUser.user);
          navigate('/recruitments');
        } else {
          response.registerUser.userErrors.forEach((error) => {
            if (error.__typename === 'RegisterUserInvalidInputError') {
              const field = error.field as 'name' | 'email' | 'password';
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
            メールアドレスで登録
          </ModalHeader>
          <ModalCloseButton onClick={() => reset()} />
          <ModalBody pb={3}>
            <NameForm control={control} />
            <EmailForm control={control} />
            <PasswordForm control={control} />
          </ModalBody>
          <ModalFooter>
            <SubmitButton
              isValid={isValid}
              displayName="登録する"
              isSubmitting={isInFlight}
            />
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
});
