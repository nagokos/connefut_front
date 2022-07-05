import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';

import { RegisterUserInput } from '../UserRegisterModal/__generated__/UserRegisterModal_RegisterUserMutation.graphql';

type Props = {
  control: Control<RegisterUserInput>;
};

export const UserRegisterNameForm: FC<Props> = memo((props) => {
  const { control } = props;

  return (
    <Controller
      name="name"
      control={control}
      render={({ field, formState: { errors } }) => (
        <FormControl>
          <FormLabel fontSize={12} fontWeight="bold" color="blackAlpha.700">
            名前
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
            {errors['name']?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
});
