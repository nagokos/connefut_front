import { Avatar, Box, Grid, GridItem, Spacer } from '@chakra-ui/react';
import { FC, memo, Suspense, useEffect } from 'react';
import { useGetCurrentUserRoomsQuery } from '../generated/graphql';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

export const Messages: FC = memo(() => {
  const { roomId } = useParams();

  const [data] = useGetCurrentUserRoomsQuery();
  const navigate = useNavigate();

  const topRoomId = data.data?.getCurrentUserRooms[0].id;

  useEffect(() => {
    console.log(topRoomId);
    navigate(`${topRoomId}`);
  }, []);

  return (
    <Box maxW={1120} mx="auto">
      <Grid mt={8} templateColumns="repeat(12, 1fr)" gap={8}>
        <GridItem display="flex" flexDirection="column" colSpan={4}>
          <Box fontWeight="bold" fontFamily="ヒラギノ角ゴシック" fontSize={24}>
            メッセージ
          </Box>
          <Box overflow="scroll" h="600" mt={8}>
            {data.data?.getCurrentUserRooms.map((room) => (
              <Box
                cursor="pointer"
                key={room.id}
                mt={2}
                display="flex"
                px={3.5}
                py={4}
                rounded="lg"
                fontFamily="ヒラギノ角ゴシック"
                bg={room.id === roomId ? 'primary.light' : ''}
                onClick={() => {
                  navigate(room.id);
                }}
              >
                <Avatar mr={3} w={12} h={12} src={room.entrie.user.avatar} />
                <Box w="100%">
                  <Box display="flex" alignItems="center">
                    <Box fontSize={14}>{room.entrie.user.name}</Box>
                    <Spacer />
                    <Box
                      fontSize={11}
                      color="blackAlpha.500"
                      fontFamily="ヒラギノ角ゴシック"
                    >
                      1分前
                    </Box>
                  </Box>
                  <Box
                    fontSize={11}
                    mt={1}
                    color="blackAlpha.500"
                    display="flex"
                  >
                    <Box>
                      初めまして。募集に応募させていただきました初初めまして。募
                    </Box>
                    <Spacer />
                    <Box
                      ml={7}
                      bg="primary.main"
                      h={6}
                      minW={6}
                      rounded={9}
                      fontSize={10}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                      boxShadow="md"
                      fontWeight="bold"
                      fontFamily="ヒラギノ角ゴシック"
                    >
                      1
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </GridItem>
        <GridItem colSpan={8}>
          <Suspense>
            <Outlet />
          </Suspense>
        </GridItem>
      </Grid>
    </Box>
  );
});
