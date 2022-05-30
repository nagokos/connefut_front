import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  title: string;
};

export const Title: FC<Props> = memo((props) => {
  const { title } = props;

  return (
    <Box cursor="pointer" mt={2} fontSize={16} fontWeight="bold">
      {title}
    </Box>
  );
});
