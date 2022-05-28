import { Box, Spacer } from '@chakra-ui/react';
import { FC, memo } from 'react';
import {
  IoIosCloseCircle,
  IoIosCheckmarkCircle,
  IoMdPricetag,
} from 'react-icons/io';
import { Tag } from '../../../generated/graphql';

type Props = {
  tag?: Tag | undefined | null;
};

export const SearchTag: FC<Props> = memo((props) => {
  const { tag } = props;

  return (
    <Box
      cursor="pointer"
      mt={3.5}
      display="flex"
      alignItems="center"
      fontSize={11.5}
      fontFamily="Noto Sans JP"
      letterSpacing={1}
    >
      <Box mr={1.5}>
        <IoMdPricetag fontSize={12} color="RGBA(0, 0, 0, 0.64)" />
      </Box>
      {tag?.name}
      <Spacer />
      <Box>
        <IoIosCheckmarkCircle color="#009688" fontSize={15} />
        <Box display="none">
          <IoIosCloseCircle color="#f42121" fontSize={15} />
        </Box>
      </Box>
    </Box>
  );
});
