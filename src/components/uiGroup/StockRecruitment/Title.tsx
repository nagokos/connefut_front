import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  title: string;
};

export const Title: FC<Props> = memo((props) => {
  const { title } = props;

  const navigate = useNavigate();

  return (
    <Box cursor="pointer" fontSize={15.5} fontWeight="bold">
      {title}
    </Box>
  );
});
