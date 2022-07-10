import { Textarea } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { RecruitmentInput } from '../../../views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';

type Props = {
  control: Control<RecruitmentInput>;
};

export const RecruitmentFormDetail: FC<Props> = memo((props) => {
  const { control } = props;

  return (
    <Controller
      control={control}
      name="detail"
      defaultValue=""
      render={({ field }) => (
        <Textarea
          ref={field.ref}
          onBlur={field.onBlur}
          onChange={field.onChange}
          value={String(field.value)}
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
          fontFamily="ヒラギノ角ゴシック"
          whiteSpace="pre-wrap"
          _placeholder={{
            color: 'blackAlpha.600',
          }}
          _focus={{ boxShadow: 'none !important' }}
        />
      )}
    />
  );
});
