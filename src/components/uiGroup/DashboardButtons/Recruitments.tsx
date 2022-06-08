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
      color={
        !location.pathname.includes('stocks') &&
        !location.pathname.includes('applied')
          ? 'black'
          : 'blackAlpha.500'
      }
      onClick={() => navigate('/dashboard')}
      _hover={{ color: 'black' }}
    >
      <Box fontSize={20} px={2} py={2} rounded="lg" color="primary.main">
        <MdOutlineArticle />
      </Box>
      <Box ml={3} fontWeight="bold" fontSize={15}>
        募集管理
      </Box>
    </Box>
  );
});
