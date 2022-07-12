import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Spacer,
  useBoolean,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { TbBell, TbMessage2, TbSearch } from 'react-icons/tb';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { viewerQuery } from '../../../recoil/user';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

export const Header: FC = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const [flag, setFlag] = useBoolean();

  const currentUser = useRecoilValue(viewerQuery);

  return (
    <>
      <header>
        <Box maxW={1120} mx="auto" minH={70} display="flex" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            onClick={() => {
              navigate('/recruitments');
            }}
          >
            <Image
              src="/src/assets/img/logo.png"
              alt="app logo"
              w={7}
              mr={1.5}
            />
            <Box fontWeight="bold" fontFamily="Nunito" fontSize={25}>
              Connefut
            </Box>
          </Box>
          <Spacer />
          <HStack spacing={5}>
            <TbSearch
              onMouseEnter={setFlag.on}
              onMouseLeave={setFlag.off}
              fontSize={22}
              cursor="pointer"
              color={flag ? '#000000' : '#78909c'}
            />
            {currentUser ? (
              <>
                <TbMessage2
                  onMouseEnter={setFlag.on}
                  onMouseLeave={setFlag.off}
                  fontSize={22}
                  cursor="pointer"
                  color={flag ? '#000000' : '#78909c'}
                  onClick={() => {
                    if (!location.pathname.includes('messages')) {
                      navigate('/messages');
                    }
                  }}
                />
                <TbBell
                  onMouseEnter={setFlag.on}
                  onMouseLeave={setFlag.off}
                  fontSize={22}
                  cursor="pointer"
                  color={flag ? '#000000' : '#78909c'}
                />
                <HeaderMenu />
              </>
            ) : (
              <>
                <Button
                  onClick={() => navigate('/login')}
                  variant="outline"
                  px={3.5}
                  h={9}
                  size="sm"
                  fontSize={12.5}
                >
                  ログイン
                </Button>
                <Button
                  onClick={() => navigate('/signup')}
                  fontSize={12.5}
                  px={3.5}
                  h={9}
                  size="sm"
                >
                  新規登録
                </Button>
              </>
            )}
          </HStack>
        </Box>
        {!location.pathname.includes('/messages') && (
          <Divider borderColor="#ebf2f2" />
        )}
      </header>
    </>
  );
});
