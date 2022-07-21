import {
  Avatar,
  Box,
  Button,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineArticle } from 'react-icons/md';

import { RiUserFollowLine } from 'react-icons/ri';

export const UserView: FC = memo(() => {
  return (
    <Box w={900} mx="auto" mt={16}>
      <Box display="flex">
        <Box mr={8}>
          <Avatar w={110} h={110} />
        </Box>
        <Box mt={3.5} mr={5}>
          <Box fontSize={23} fontWeight="bold">
            Kosuda
          </Box>
          <Link>
            <Box
              display="flex"
              mt={3}
              alignItems="center"
              fontSize={13}
              fontFamily="ヒラギノ角ゴシック"
            >
              <Box mr={1.5}>
                <RiUserFollowLine fontSize={17} />
              </Box>
              <Box as="span" fontWeight="bold">
                33
              </Box>
              人フォロー中
            </Box>
          </Link>
        </Box>
        <Spacer />
        <Button
          mt={3.5}
          size="sm"
          fontSize={10}
          variant="outline"
          color="blackAlpha.700"
          boxShadow="sm"
          _focus={{
            boxShadow: 'sm',
          }}
          borderColor="blackAlpha.50"
        >
          アカウント編集
        </Button>
      </Box>
      <Box mt={24} display="flex" alignItems="center">
        <Box fontSize={24} mr={1.5} color="primary.main">
          <MdOutlineArticle />
        </Box>
        <Box fontSize={17} fontWeight="bold">
          掲載中の募集
        </Box>
      </Box>
      <SimpleGrid mt={8} columns={3} spacing={8}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Box
            cursor="pointer"
            bg="white"
            key={i}
            boxShadow="base"
            rounded="xl"
            transitionDuration="300ms"
            overflow="hidden"
            _hover={{ boxShadow: 'lg' }}
          >
            <Box
              bg="primary.50"
              minHeight={110}
              display="flex"
              px={4}
              pt={4}
              justifyContent="center"
              alignItems="center"
              fontSize={14}
              textAlign="center"
              fontWeight="bold"
            >
              galkjglkajgla
            </Box>
            <Box px={5} pt={7} pb={7}>
              <Stack spacing={5}>
                <Box display="flex" alignItems="center">
                  <Box minW={20} display="flex" alignItems="center">
                    <Box fontSize={11} mr={0.5}>
                      ■
                    </Box>
                    <Box fontSize={11}>募集競技</Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    bg="primary.light"
                    rounded="3"
                    px={2}
                    py={0.5}
                  >
                    <Box fontSize={12} mr={1}>
                      ⚽️
                    </Box>
                    <Box fontFamily="ヒラギノ角ゴシック" fontSize={11}>
                      サッカー
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Box minW={20} display="flex" alignItems="center">
                    <Box fontSize={11} mr={0.5}>
                      ■
                    </Box>
                    <Box fontSize={11}>募集タイプ</Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    bg="primary.light"
                    rounded="3"
                    px={2}
                    py={0.5}
                  >
                    <Box fontSize={12} mr={1}>
                      😭
                    </Box>
                    <Box fontFamily="ヒラギノ角ゴシック" fontSize={11}>
                      対戦相手の募集
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Box minW={20} display="flex" alignItems="center">
                    <Box fontSize={11} mr={0.5}>
                      ■
                    </Box>
                    <Box fontSize={11}>開催日</Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    bg="primary.light"
                    rounded="3"
                    px={2}
                    py={0.5}
                  >
                    <Box fontSize={12} mr={1}>
                      🗓
                    </Box>
                    <Box fontFamily="ヒラギノ角ゴシック" fontSize={11}>
                      2022年01月01日
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
});
