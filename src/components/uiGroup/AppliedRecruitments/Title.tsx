import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
};

export const Title: FC<Props> = memo((props) => {
  const { id, title } = props;

  const navigate = useNavigate();

  return (
    <Box
      fontSize={15.5}
      mr={10}
      cursor="pointer"
      fontWeight="bold"
      onClick={() => navigate(`/recruitments/${id}`)}
    >
      {title}
    </Box>
  );
});
