import { Box, HStack, Text, useBoolean } from '@chakra-ui/react';
import { FC, memo } from 'react';

export const HomeOrder: FC = memo(() => {
  const [flagNew, setFlagNew] = useBoolean();
  const [flagStart, setFlagStart] = useBoolean();

  return (
    <>
      <Box display="flex" justifyContent="end">
        <HStack spacing={3}>
          <Text mr={5} fontSize={13} color="blackAlpha.600">
            並び替え
          </Text>
          <Text
            onMouseEnter={setFlagNew.on}
            onMouseLeave={setFlagNew.off}
            fontSize={15}
            fontWeight={flagNew ? 'bold' : 'medium'}
            color={flagNew ? 'primary.main' : 'black'}
            cursor="pointer"
          >
            新着
          </Text>
          <Text
            onMouseEnter={setFlagStart.on}
            onMouseLeave={setFlagStart.off}
            fontSize={15}
            fontWeight={flagStart ? 'bold' : 'medium'}
            color={flagStart ? 'primary.main' : 'black'}
            cursor="pointer"
          >
            開催日
          </Text>
        </HStack>
      </Box>
    </>
  );
});
