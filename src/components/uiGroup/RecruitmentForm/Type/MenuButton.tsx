import { Box, Button, MenuButton } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Type } from '../../../../generated/graphql';
import { MenuItemType } from '../../../../type/type';

type Props = {
  types: MenuItemType[];
  watchType: Type;
};

export const TypeMenuButton: FC<Props> = memo((props) => {
  const { types, watchType } = props;

  return (
    <MenuButton
      rounded="lg"
      bg="primary.50"
      color="primary.main"
      as={Button}
      fontSize={10}
      h={8}
      px={3.5}
      pr={2}
      _active={{
        bg: '#D2E1DE',
      }}
      _hover={{
        bg: '#D2E1DE',
      }}
    >
      <Box display="flex" alignItems="center">
        <Box as="span" mr={1}>
          {types.find((menuType) => menuType.id === watchType)?.name}
        </Box>
        <BiChevronDown fontSize={17} />
      </Box>
    </MenuButton>
  );
});
