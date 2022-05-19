import { Box, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  content?: string;
};

export const Content: FC<Props> = memo((props) => {
  const { content } = props;

  return (
    <Box display="flex">
      <Box
        display="flex"
        alignItems="start"
        fontSize={14}
        justifyContent="start"
        minW={130}
      >
        <Box mr={1}>■</Box>
        <Box>募集詳細</Box>
      </Box>
      <Text
        bg="primary.light"
        fontSize={14}
        px={4}
        py={3}
        overflowWrap="break-word"
        whiteSpace="pre-wrap"
        rounded="md"
        minW="590"
      >
        {content}
      </Text>
    </Box>
  );
});
