import { Input } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { RecruitmentInput } from '../../../views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';

type Props = {
  control: Control<RecruitmentInput>;
};

export const RecruitmentFormTitle: FC<Props> = memo((props) => {
  const { control } = props;

  return (
    <Controller
      control={control}
      name="title"
      defaultValue=""
      render={({ field }) => (
        <Input
          {...field}
          placeholder="タイトル"
          border="none"
          fontSize={31}
          fontWeight="bold"
          resize="none"
          fontFamily="ヒラギノ角ゴシック"
          _focus={{
            border: 'none',
            wordWrap: 'breakWord',
          }}
          _focusVisible={{
            border: 'none',
          }}
          _active={{
            border: 'none',
          }}
          px={0}
          _placeholder={{
            color: 'blackAlpha.400',
          }}
        />
      )}
    />
  );
});
