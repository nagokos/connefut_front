import { Button } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  isSubmitting: boolean;
};

export const SubmitButton: FC<Props> = memo((props) => {
  const { isSubmitting } = props;

  return (
    <Button
      fontSize={13}
      w="100%"
      isLoading={isSubmitting}
      bg="primary.main"
      color="white"
      type="submit"
    >
      登録する
    </Button>
  );
});
