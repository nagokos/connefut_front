import { Box, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { IoMdPricetag } from 'react-icons/io';
import { Tag } from '../../../generated/graphql';

type Props = {
  tag?: Tag | undefined | null;
};

export const MainTag: FC<Props> = memo((props) => {
  const { tag } = props;

  return (
    <Box display="flex" alignItems="center" justifyContent="start">
      <Box
        bg="primary.light"
        display="flex"
        alignItems="center"
        justifyContent="center"
        as="span"
        w={9}
        h={9}
        rounded="full"
        mr={1.5}
        fontSize={18}
        color="primary.main"
        border="1px solid #eceff1"
      >
        <IoMdPricetag />
      </Box>
      <Text fontSize={11} fontFamily="Noto Sans JP">
        {tag?.name}
      </Text>
    </Box>
  );
});
