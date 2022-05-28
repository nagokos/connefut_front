import { Textarea } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { RecruitmentInput } from '../../../generated/graphql';

type Props = {
  control: Control<RecruitmentInput>;
};

export const FormContent: FC<Props> = memo((props) => {
  const { control } = props;

  return (
    <Controller
      control={control}
      name="content"
      defaultValue=""
      render={({ field }) => (
        <Textarea
          ref={field.ref}
          onBlur={field.onBlur}
          onChange={field.onChange}
          mt={6}
          bg="white"
          border="none"
          px={6}
          py={6}
          minH={300}
          placeholder="募集の詳細"
          fontSize={14}
          wordBreak="break-word"
          wrap="break-word"
          whiteSpace="pre-wrap"
          _placeholder={{
            color: 'blackAlpha.600',
          }}
          _focus={{ border: 'none' }}
        />
      )}
    />
  );
});
