import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { RecruitmentInput } from '../../../generated/graphql';

type Props = {
  control: Control<RecruitmentInput>;
};

export const FormCapacity: FC<Props> = memo((props) => {
  const { control } = props;

  return (
    <Controller
      control={control}
      name="capacity"
      defaultValue={1}
      render={({ field }) => (
        <FormControl>
          <FormLabel
            fontSize={12}
            fontWeight="bold"
            color="blackAlpha.600"
            htmlFor="capacity"
          >
            募集人数
          </FormLabel>
          <NumberInput
            id="capacity"
            bg="white"
            size="lg"
            min={1}
            rounded="md"
            defaultValue={1}
            clampValueOnBlur={false}
          >
            <NumberInputField
              id="capacity"
              bg="white"
              fontSize={13}
              border="none"
              _focus={{ border: 'none' }}
            />
          </NumberInput>
        </FormControl>
      )}
    />
  );
});
