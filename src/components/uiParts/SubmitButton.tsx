import { Button } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  isSubmitting: boolean;
  isValid: boolean;
  displayName: string;
};

export const SubmitButton: FC<Props> = memo((props) => {
  const { isSubmitting, isValid, displayName } = props;

  return (
    <Button
      fontSize={13}
      w="100%"
      isLoading={isSubmitting}
      bg="primary.main"
      color="white"
      type="submit"
      disabled={!isValid && !isSubmitting}
      _hover={{
        bg: 'primary.hover',
      }}
    >
      {displayName}
    </Button>
  );
});
