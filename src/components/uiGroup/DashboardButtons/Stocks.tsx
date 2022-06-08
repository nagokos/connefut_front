import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

export const Stocks: FC = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      cursor="pointer"
      display="flex"
      alignItems="center"
      color={location.pathname.includes('stocks') ? 'black' : 'blackAlpha.500'}
      onClick={() => navigate('/dashboard/stocks')}
      _hover={{ color: 'black' }}
    >
      <Box fontSize={20} px={2} py={2} rounded="lg" color="primary.main">
        <MdOutlineBookmarkBorder />
      </Box>
      <Box ml={3} fontSize={15} fontWeight="bold">
        ストックリスト
      </Box>
    </Box>
  );
});
