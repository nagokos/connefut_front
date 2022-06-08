import { Button } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  displayName: string;
  onClick: () => void;
};

export const PageButton: FC<Props> = memo((props) => {
  const { displayName, onClick } = props;

  return (
    <Button
      fontSize={13}
      border="1px solid"
      borderColor="primary.50"
      bg="white"
      boxShadow="sm"
      color="primary.main"
      onClick={onClick}
      _hover={{
        bg: 'primary.light',
      }}
      _active={{
        bg: 'primary.light',
      }}
      _focus={{
        boxShadow: 'sm',
      }}
    >
      {displayName}
    </Button>
  );
});
