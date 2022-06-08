import {
  Avatar,
  Box,
  Divider,
  Grid,
  GridItem,
  IconButton,
  SimpleGrid,
  Spacer,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import ResizeTextarea from 'react-textarea-autosize';
import { RiSendPlane2Line } from 'react-icons/ri';
import { MdCheck, MdOutlineArticle } from 'react-icons/md';

export const Messages: FC = memo(() => {
  return (
    <Box maxW={1120} mx="auto">
      <Grid mt={8} templateColumns="repeat(12, 1fr)" gap={8}>
        <GridItem display="flex" flexDirection="column" colSpan={4}>
          <Box fontWeight="bold" fontFamily="ヒラギノ角ゴシック" fontSize={24}>
            メッセージ
          </Box>
          <Box overflow="scroll" h="600" mt={8}>
            <Box
              cursor="pointer"
              bg="primary.light"
              mt={1}
              display="flex"
              px={3.5}
              py={4}
              rounded="lg"
              fontFamily="ヒラギノ角ゴシック"
            >
              <Avatar mr={3} w={12} h={12} />
              <Box w="100%">
                <Box display="flex" alignItems="center">
                  <Box fontSize={14}>Kosuda</Box>
                  <Spacer />
                  <Box
                    fontSize={11}
                    color="blackAlpha.500"
                    fontFamily="ヒラギノ角ゴシック"
                  >
                    1分前
                  </Box>
                </Box>
                <Box fontSize={11} mt={1} color="blackAlpha.500" display="flex">
                  <Box>
                    初めまして。募集に応募させていただきました初初めまして。募
                  </Box>
                  <Spacer />
                  <Box
                    ml={7}
                    h={6}
                    minW={6}
                    rounded={9}
                    fontSize={10}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="bold"
                    fontFamily="ヒラギノ角ゴシック"
                  ></Box>
                </Box>
              </Box>
            </Box>
            <Box
              cursor="pointer"
              mt={2}
              display="flex"
              px={3.5}
              py={4}
              rounded="lg"
              fontFamily="ヒラギノ角ゴシック"
            >
              <Avatar mr={3} w={12} h={12} />
              <Box w="100%">
                <Box display="flex" alignItems="center">
                  <Box fontSize={14}>さかなクン</Box>
                  <Spacer />
                  <Box
                    fontSize={11}
                    color="blackAlpha.500"
                    fontFamily="ヒラギノ角ゴシック"
                  >
                    1分前
                  </Box>
                </Box>
                <Box fontSize={11} mt={1} color="blackAlpha.500" display="flex">
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
                    fontWeight="bold"
                    boxShadow="md"
                    fontFamily="ヒラギノ角ゴシック"
                  >
                    1
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              cursor="pointer"
              mt={2}
              display="flex"
              px={3.5}
              py={4}
              rounded="lg"
              fontFamily="ヒラギノ角ゴシック"
            >
              <Avatar mr={3} w={12} h={12} />
              <Box w="100%">
                <Box display="flex" alignItems="center">
                  <Box fontSize={14}>Nahiro</Box>
                  <Spacer />
                  <Box
                    fontSize={11}
                    color="blackAlpha.500"
                    fontFamily="ヒラギノ角ゴシック"
                  >
                    1分前
                  </Box>
                </Box>
                <Box fontSize={11} mt={1} color="blackAlpha.500" display="flex">
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
          </Box>
        </GridItem>
        <GridItem colSpan={8}>
          <Box mb={2} fontWeight="bold" display="flex" alignItems="center">
            <Avatar mr={2} w={10} h={10} />
            <Box fontSize={16}>Kosuda</Box>
          </Box>
          <Divider />
          <Box overflow="scroll" maxH={573} px={3}>
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
                  border="1px solid"
                  borderColor="blackAlpha.100"
                  maxW={460}
                  px={5}
                  py={5}
                  minW={460}
                  boxShadow="lg"
                  rounded="2xl"
                >
                  <Box>
                    <Box color="primary.main">
                      <MdCheck fontSize={55} />
                    </Box>
                    <Box
                      fontSize={12.5}
                      mt={3.5}
                      fontWeight="bold"
                      fontFamily="ヒラギノ角ゴシック"
                    >
                      Kosudaさんの募集に応募をしました!!
                    </Box>
                    <Box
                      mt={4}
                      fontSize={12}
                      fontWeight="bold"
                      fontFamily="ヒラギノ角ゴシック"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box bg="primary.light" py={2} px={2} rounded="lg" mr={2}>
                        <Box color="primary.main" fontSize={20}>
                          <MdOutlineArticle />
                        </Box>
                      </Box>
                      横浜市内で新規MIXスーパービギナーチーム★メンバー約70名★初心者および未経験者の男女を募集中
                    </Box>
                    <SimpleGrid columns={2} mt={5} spacing={5}>
                      <Box>
                        <Box fontSize={11} color="blackAlpha.600">
                          募集競技
                        </Box>
                        <Box
                          fontSize={12}
                          mt={0.5}
                          fontFamily="ヒラギノ角ゴシック"
                          color="blackAlpha.700"
                          fontWeight="bold"
                        >
                          サッカー
                        </Box>
                      </Box>
                      <Box>
                        <Box fontSize={11} color="blackAlpha.600">
                          募集タイプ
                        </Box>
                        <Box
                          fontSize={12}
                          mt={0.5}
                          fontFamily="ヒラギノ角ゴシック"
                          color="blackAlpha.700"
                          fontWeight="bold"
                        >
                          対戦相手の募集
                        </Box>
                      </Box>
                      <Box>
                        <Box fontSize={11} color="blackAlpha.600">
                          会場
                        </Box>
                        <Box
                          fontSize={12}
                          mt={0.5}
                          fontFamily="ヒラギノ角ゴシック"
                          color="blackAlpha.700"
                          fontWeight="bold"
                        >
                          東京都
                        </Box>
                      </Box>
                      <Box>
                        <Box fontSize={11} color="blackAlpha.600">
                          開催日
                        </Box>
                        <Box
                          fontSize={12}
                          mt={0.5}
                          fontFamily="ヒラギノ角ゴシック"
                          color="blackAlpha.700"
                          fontWeight="bold"
                        >
                          2022年01月22日(日)
                        </Box>
                      </Box>
                    </SimpleGrid>
                    <Divider my={5} />
                    <Box>
                      <Box
                        fontSize={11}
                        fontFamily="ヒラギノ角ゴシック"
                        color="blackAlpha.600"
                      >
                        応募メッセージ
                      </Box>
                      <Box
                        fontSize={12}
                        mt={1.5}
                        px={3}
                        py={3}
                        bg="primary.light"
                        rounded="md"
                        fontFamily="ヒラギノ角ゴシック"
                      >
                        参加させていただきたいです。
                        参加させていただきたいです。
                        参加させていただきたいです。
                        参加させていただきたいです。
                      </Box>
                    </Box>
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
              bottom={-2}
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
