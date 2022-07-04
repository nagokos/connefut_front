import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { LoginUserInput } from './__generated__/LoginEmailModal_LoginUserMutation.graphql';

type Props = {
  control: Control<LoginUserInput>;
};

export const EmailForm: FC<Props> = memo((props) => {
  const { control } = props;

  return (
    <Controller
      name="email"
      control={control}
      render={({ field, formState: { errors } }) => (
        <FormControl mt={4}>
          <FormLabel fontSize={12} fontWeight="bold" color="blackAlpha.700">
            メールアドレス
          </FormLabel>
          <Input
            {...field}
            _focus={{
              borderColor: 'primary.main',
              border: '2px solid #009688',
              transitionDuration: '400ms',
            }}
          />
          <FormHelperText color="error.main" fontSize={11}>
            {errors.email?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
});
