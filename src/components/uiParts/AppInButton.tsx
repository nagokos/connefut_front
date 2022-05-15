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
      boxShadow="0px 1px 1px #f0f5f4"
      border="1px solid #f0f5f4"
      size="lg"
      fontSize={14}
      color={color ? color : 'blackAlpha.700'}
      _hover={{
        bg: '#f0f5f4',
        boxShadow: 'px 2px 2px #f0f5f4',
      }}
      _active={{
        bg: '#f0f5f4',
        boxShadow: 'px 2px 2px #f0f5f4',
      }}
      onClick={clickEvent}
      isFullWidth
    >
      <Box w={300}>{title}</Box>
    </Button>
  );
});
