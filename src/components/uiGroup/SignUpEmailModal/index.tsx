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
import {
  SignUpEmailModal_UserRegisterMutation,
  UserRegisterInput,
} from './__generated__/SignUpEmailModal_UserRegisterMutation.graphql';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from '../../../recoil/user';

const userRegisterMutation = graphql`
  mutation SignUpEmailModal_UserRegisterMutation($input: UserRegisterInput!) {
    userRegister(input: $input) {
      user {
        id
        name
        avatar
      }
      userErrors {
        __typename
        ... on UserRegisterInvalidInputError {
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
    useMutation<SignUpEmailModal_UserRegisterMutation>(userRegisterMutation);

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { isValid },
  } = useForm<UserRegisterInput>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit = (values: UserRegisterInput) => {
    commit({
      variables: {
        input: values,
      },
      onCompleted(response, errors) {
        if (errors) {
          return console.log(errors);
        }
        if (response.userRegister.user) {
          setUser(response.userRegister.user);
          navigate('/recruitments');
        } else {
          response.userRegister.userErrors.forEach((error) => {
            if (error.__typename === 'UserRegisterInvalidInputError') {
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
