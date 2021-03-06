import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useBoolean,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { LoginUserInput } from '../UserLoginModal/__generated__/UserLoginModal_LoginUserMutation.graphql';

type Props = {
  control: Control<LoginUserInput>;
};

export const UserLoginPasswordForm: FC<Props> = memo((props) => {
  const { control } = props;

  const [isShow, setIsShow] = useBoolean();

  return (
    <Controller
      name="password"
      control={control}
      render={({ field, formState: { errors } }) => (
        <FormControl mt={4}>
          <FormLabel fontSize={12} fontWeight="bold" color="blackAlpha.700">
            パスワード
          </FormLabel>
          <InputGroup>
            <Input
              {...field}
              _focus={{
                borderColor: 'primary.main',
                transitionDuration: '400ms',
                border: '2px solid #009688',
              }}
              type={isShow ? 'text' : 'password'}
            />
            <InputRightElement>
              {isShow ? (
                <AiOutlineEye onClick={setIsShow.toggle} cursor="pointer" />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={setIsShow.toggle}
                  cursor="pointer"
                />
              )}
            </InputRightElement>
          </InputGroup>
          <FormHelperText color="error.main" fontSize={11}>
            {errors.password?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
});
