import { Box, Spacer } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { HiOutlineTag } from 'react-icons/hi';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';

type Props = {
  tag: string;
};

export const SearchTag: FC<Props> = memo((props) => {
  const { tag } = props;

  return (
    <Box
      cursor="pointer"
      key={tag}
      mt={3.5}
      display="flex"
      alignItems="center"
      fontSize={12}
      fontWeight="bold"
      letterSpacing={1}
    >
      <Box mr={1}>
        <HiOutlineTag fontSize={13} />
      </Box>
      {tag}
      <Spacer />
      <Box>
        <IoIosCheckmarkCircle color="#009688" fontSize={15.5} />
        <Box display="none">
          <IoIosCloseCircle color="#f42121" fontSize={15} />
        </Box>
      </Box>
    </Box>
  );
});
