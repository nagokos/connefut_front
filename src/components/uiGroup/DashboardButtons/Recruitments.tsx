import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineArticle } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

export const Recruitments: FC = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      alignItems="center"
      cursor="pointer"
      color={!location.pathname.includes('stocks') ? 'black' : 'blackAlpha.500'}
      onClick={() => navigate('/dashboard')}
      _hover={{ color: 'black' }}
    >
      <Box fontSize={20} color="primary.main">
        <MdOutlineArticle />
      </Box>
      <Box ml={3} fontSize={21}>
        Recruitments
      </Box>
    </Box>
  );
});
