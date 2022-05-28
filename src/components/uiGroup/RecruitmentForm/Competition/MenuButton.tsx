import { Box, Button, MenuButton } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Competition } from '../../../../generated/graphql';

type Props = {
  competitions: Competition[];
  watchCompetitionId?: string;
};

export const CompMenuButton: FC<Props> = memo((props) => {
  const { competitions, watchCompetitionId } = props;

  return (
    <MenuButton
      rounded="lg"
      bg="primary.50"
      color="primary.main"
      as={Button}
      fontSize={10}
      px={3.5}
      pr={2}
      h={8}
      _hover={{
        bg: '#D2E1DE',
      }}
      _active={{
        bg: '#D2E1DE',
      }}
    >
      <Box display="flex" alignItems="center">
        <Box as="span" mr={1}>
          {competitions.find((comp) => comp.id === watchCompetitionId)?.name}
        </Box>
        <BiChevronDown fontSize={17} />
      </Box>
    </MenuButton>
  );
});
