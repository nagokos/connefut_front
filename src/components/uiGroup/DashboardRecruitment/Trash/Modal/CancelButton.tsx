import { Box, Button } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  onClose: () => void;
};

export const CancelButton: FC<Props> = memo((props) => {
  const { onClose } = props;

  return (
    <Box>
      <Button
        bg="whiteAlpha.800"
        color="blackAlpha.600"
        border="1px solid"
        w="100%"
        borderColor="blackAlpha.200"
        fontSize={12}
        mr={1}
        onClick={onClose}
        _hover={{
          bg: 'blackAlpha.50',
        }}
        _active={{
          bg: 'blackAlpha.50',
        }}
      >
        キャンセル
      </Button>
    </Box>
  );
});
