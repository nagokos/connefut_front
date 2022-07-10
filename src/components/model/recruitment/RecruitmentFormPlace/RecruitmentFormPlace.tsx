import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { RecruitmentInput } from '../../../views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';

type Props = {
  control: Control<RecruitmentInput>;
};

export const RecruitmentFormPlace: FC<Props> = memo((props) => {
  const { control } = props;

  return (
    <Controller
      control={control}
      name="place"
      defaultValue=""
      render={({ field }) => (
        <FormControl>
          <FormLabel
            fontSize={12}
            fontWeight="bold"
            color="blackAlpha.600"
            htmlFor="place"
          >
            会場
          </FormLabel>
          <Input
            ref={field.ref}
            onChange={field.onChange}
            value={String(field.value)}
            id="place"
            bg="white"
            fontSize={13}
            border="none"
            _focus={{ boxShadow: 'none !important' }}
            size="lg"
          />
        </FormControl>
      )}
    />
  );
});
