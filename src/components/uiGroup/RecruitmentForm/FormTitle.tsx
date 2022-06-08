import { Input } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { RecruitmentInput } from '../../../generated/graphql';

type Props = {
  control: Control<RecruitmentInput>;
};

export const FormTitle: FC<Props> = memo((props) => {
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
          _focus={{ border: 'none', wordWrap: 'breakWord' }}
          px={0}
          _placeholder={{
            color: 'blackAlpha.400',
          }}
        />
      )}
    />
  );
});
