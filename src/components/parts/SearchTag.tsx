import { Box, Spacer } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { SearchTag_tag$key } from '../../__generated__/SearchTag_tag.graphql';

const tagFragment = graphql`
  fragment SearchTag_tag on Tag {
    id
    name
  }
`;

type Props = {
  tag: SearchTag_tag$key;
};

export const SearchTag: FC<Props> = memo((props) => {
  const { tag } = props;
  const tagData = useFragment<SearchTag_tag$key>(tagFragment, tag);

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
      {tagData.name}
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
