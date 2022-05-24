import { Box, Button } from '@chakra-ui/react';
import { FC, memo, ReactElement } from 'react';

type Props = {
  clickEvent: () => void;
  icon?: ReactElement | undefined;
  title: string;
  color?: string;
};

export const AppInButton: FC<Props> = memo((props) => {
  const { clickEvent, icon, title, color } = props;

  return (
    <Button
      leftIcon={icon ? icon : <Box display="none" />}
      variant="outline"
      rounded="lg"
      bg="white"
      size="lg"
      w="100%"
      boxShadow="sm"
      fontSize={14}
      color={color ? color : 'blackAlpha.700'}
      onClick={clickEvent}
      _hover={{
        bg: '#f0f5f4',
        boxShadow: 'sm',
      }}
      _active={{
        bg: '#f0f5f4',
        boxShadow: 'sm',
      }}
      _focus={{
        boxShadow: 'sm',
      }}
    >
      <Box w={300}>{title}</Box>
    </Button>
  );
});
