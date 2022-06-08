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
      cursor="pointer"
      mt={2}
      fontSize={15.5}
      fontWeight="bold"
      onClick={() => navigate(`/recruitments/${id}/edit`)}
    >
      {title}
    </Box>
  );
});
