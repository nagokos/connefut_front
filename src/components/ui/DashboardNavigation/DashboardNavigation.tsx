import { FC, memo } from 'react';
import { Box } from '@chakra-ui/react';
import {
  MdOutlineArticle,
  MdOutlineBookmarkBorder,
  MdOutlineEventNote,
} from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

export const DashboardNavigation: FC = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        cursor="pointer"
        color={
          !location.pathname.includes('stocked') &&
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
      <Box
        cursor="pointer"
        display="flex"
        alignItems="center"
        color={
          location.pathname.includes('applied') ? 'black' : 'blackAlpha.500'
        }
        onClick={() => navigate('/dashboard/applied')}
        _hover={{ color: 'black' }}
      >
        <Box fontSize={20} px={2} py={2} rounded="lg" color="primary.main">
          <MdOutlineEventNote />
        </Box>
        <Box ml={3} fontSize={15} fontWeight="bold">
          応募管理
        </Box>
      </Box>
      <Box
        cursor="pointer"
        display="flex"
        alignItems="center"
        color={
          location.pathname.includes('stocked') ? 'black' : 'blackAlpha.500'
        }
        onClick={() => navigate('/dashboard/stocked')}
        _hover={{ color: 'black' }}
      >
        <Box fontSize={20} px={2} py={2} rounded="lg" color="primary.main">
          <MdOutlineBookmarkBorder />
        </Box>
        <Box ml={3} fontSize={15} fontWeight="bold">
          ストックリスト
        </Box>
      </Box>
    </>
  );
});
