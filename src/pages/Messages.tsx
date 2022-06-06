import {
  Avatar,
  Box,
  Divider,
  Grid,
  GridItem,
  IconButton,
  Spacer,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import ResizeTextarea from 'react-textarea-autosize';
import { CgArrowTopRightR, CgArrowBottomLeftR } from 'react-icons/cg';
import { RiSendPlane2Line } from 'react-icons/ri';

export const Messages: FC = memo(() => {
  return (
    <Box maxW={1120} mx="auto">
      <Grid mt={10} templateColumns="repeat(12, 1fr)" gap={8}>
        <GridItem display="flex" flexDirection="column" colSpan={4}>
          <Box fontWeight="bold" fontFamily="ヒラギノ角ゴシック" fontSize={24}>
            応募のやり取り
          </Box>
          <Box overflow="scroll" h="600" mt={8}>
            <Box
              cursor="pointer"
              bg="primary.light"
              mt={1}
              display="flex"
              px={3.5}
              py={3.5}
              rounded="lg"
            >
              <Avatar mr={3} w={12} h={12} />
              <Box w="100%">
                <Box display="flex" alignItems="center">
                  <Box fontSize={17}>Kosuda</Box>
                  <Spacer />
                  <CgArrowTopRightR fontSize={20} />
                </Box>
                <Box fontSize={12} color="blackAlpha.500">
                  募集に応募をしました
                </Box>
                <Box
                  mt={3}
                  fontSize={11}
                  color="blackAlpha.600"
                  fontFamily="ヒラギノ角ゴシック"
                >
                  10分前・横浜市内で新規MIXスーパービギナーチー
                </Box>
              </Box>
            </Box>
            <Box
              cursor="pointer"
              mt={1}
              display="flex"
              px={3.5}
              py={3.5}
              rounded="lg"
            >
              <Avatar mr={3} w={12} h={12} />
              <Box w="100%">
                <Box display="flex" alignItems="center">
                  <Box fontSize={17} mb={0.5}>
                    Kosuda
                  </Box>
                  <Spacer />
                  <CgArrowBottomLeftR fontSize={20} />
                </Box>
                <Box fontSize={12.5} color="blackAlpha.500">
                  募集に応募がありました
                </Box>
                <Box
                  mt={3}
                  fontSize={11}
                  color="blackAlpha.600"
                  fontFamily="ヒラギノ角ゴシック"
                >
                  10分前・横浜市内で新規MIXスーパービギナーチー
                </Box>
              </Box>
            </Box>
            <Box
              cursor="pointer"
              mt={1}
              display="flex"
              px={3.5}
              py={3.5}
              rounded="lg"
            >
              <Avatar mr={3} w={12} h={12} />
              <Box w="100%">
                <Box display="flex" alignItems="center">
                  <Box fontSize={17} mb={0.5} fontFamily="ヒラギノ角ゴシック">
                    さかなクン
                  </Box>
                  <Spacer />
                  <CgArrowTopRightR fontSize={20} />
                </Box>
                <Box fontSize={12.5} color="blackAlpha.500">
                  募集に応募をしました
                </Box>
                <Box
                  mt={3}
                  fontSize={11}
                  color="blackAlpha.600"
                  fontFamily="ヒラギノ角ゴシック"
                >
                  10分前・横浜市内で新規MIXスーパービギナーチー
                </Box>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={8}>
          <Box
            color="blackAlpha.600"
            fontSize={14}
            fontFamily="ヒラギノ角ゴシック"
          >
            Kosudaさんの募集に応募をしました
          </Box>
          <Box
            mt={1}
            fontFamily="ヒラギノ角ゴシック"
            fontSize={22}
            fontWeight="bold"
          >
            横浜市内で新規MIXスーパービギナーチーム★メンバー約70名★初心者および未経験者の男女を募集中
          </Box>
          <Divider mt={2} />
          <Box zIndex={0} overflow="scroll" maxH={520} px={3}>
            <Stack mt={6} mb={4} spacing={8}>
              <Box display="flex" justifyContent="flex-end">
                <Box
                  bg="primary.main"
                  color="white"
                  px={3.5}
                  py={2.5}
                  rounded={13}
                  fontSize={14}
                  fontFamily="ヒラギノ角ゴシック"
                  maxW={500}
                >
                  初めまして。募集に応募させていただきました初めまして。募集に応募させていただきました
                </Box>
              </Box>
              <Box display="flex">
                <Box display="flex">
                  <Avatar size="sm" w={6} h={6} mr={2} />
                  <Box
                    bg="primary.light"
                    color="black"
                    px={3.5}
                    py={2.5}
                    rounded={13}
                    fontSize={14}
                    fontFamily="ヒラギノ角ゴシック"
                    maxW={500}
                  >
                    初めまして。募集に応募させていただきました
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Box
                  bg="primary.main"
                  color="white"
                  px={3.5}
                  py={2.5}
                  rounded={13}
                  fontSize={14}
                  fontFamily="ヒラギノ角ゴシック"
                  maxW={500}
                >
                  初めまして。募集に応募させていただきました初めまして。募集に応募させていただきました
                </Box>
              </Box>
              <Box display="flex">
                <Box display="flex">
                  <Avatar size="sm" w={6} h={6} mr={2} />
                  <Box
                    bg="primary.light"
                    color="black"
                    px={3.5}
                    py={2.5}
                    rounded={13}
                    fontSize={14}
                    fontFamily="ヒラギノ角ゴシック"
                    maxW={500}
                  >
                    初めまして。募集に応募させていただきました
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Box
                  bg="primary.main"
                  color="white"
                  px={3.5}
                  py={2.5}
                  rounded={13}
                  fontSize={14}
                  fontFamily="ヒラギノ角ゴシック"
                  maxW={500}
                >
                  初めまして。募集に応募させていただきました初めまして。募集に応募させていただきました
                </Box>
              </Box>
              <Box display="flex">
                <Box display="flex">
                  <Avatar size="sm" w={6} h={6} mr={2} />
                  <Box
                    bg="primary.light"
                    color="black"
                    px={3.5}
                    py={2.5}
                    rounded={13}
                    fontSize={14}
                    fontFamily="ヒラギノ角ゴシック"
                    maxW={500}
                  >
                    初めまして。募集に応募させていただきました
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Box
                  bg="primary.main"
                  color="white"
                  px={3.5}
                  py={2.5}
                  rounded={13}
                  fontSize={14}
                  fontFamily="ヒラギノ角ゴシック"
                  maxW={500}
                >
                  初めまして。募集に応募させていただきました初めまして。募集に応募させていただきました
                </Box>
              </Box>
              <Box display="flex">
                <Box display="flex">
                  <Avatar size="sm" w={6} h={6} mr={2} />
                  <Box
                    bg="primary.light"
                    color="black"
                    px={3.5}
                    py={2.5}
                    rounded={13}
                    fontSize={14}
                    fontFamily="ヒラギノ角ゴシック"
                    maxW={500}
                  >
                    初めまして。募集に応募させていただきました
                  </Box>
                </Box>
              </Box>
            </Stack>
            <Box
              display="flex"
              alignItems="center"
              position="absolute"
              justifyContent="flex-end"
              w="736px"
              bottom={0}
              zIndex={100}
            >
              <Textarea
                rows={1}
                as={ResizeTextarea}
                border="none"
                rounded="2xl"
                px={4}
                py={3}
                placeholder="メッセージを入力"
                fontSize={14}
                _focus={{ border: 'none' }}
                _placeholder={{ color: 'blackAlpha.500' }}
                bg="primary.light"
                whiteSpace="normal"
                resize="none"
              />
              <Box color="primary.main" ml={2}>
                <IconButton
                  aria-label="send"
                  rounded="full"
                  fontSize={20}
                  _hover={{
                    bg: 'primary.light',
                  }}
                  _active={{
                    bg: 'primary.50',
                  }}
                  color="#009688"
                  icon={<RiSendPlane2Line />}
                  variant="ghost"
                />
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
});
