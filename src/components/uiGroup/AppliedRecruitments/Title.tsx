import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  title: string;
};

export const Title: FC<Props> = memo((props) => {
  const { title } = props;

  return (
    <Box fontSize={15} mr={14} cursor="pointer" fontWeight="bold">
      {title}
    </Box>
  );
});
