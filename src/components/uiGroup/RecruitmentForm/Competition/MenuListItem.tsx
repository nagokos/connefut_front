import { MenuItemOption } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdCheck } from 'react-icons/md';
import { Competition } from '../../../../generated/graphql';

type Props = {
  competition: Competition;
};

export const MenuListItem: FC<Props> = memo((props) => {
  const { competition } = props;

  return (
    <MenuItemOption
      bg="white"
      value={competition.id}
      fontSize={12}
      icon={<MdCheck color="#009688" fontSize={14} />}
      _focus={{
        bg: 'white',
      }}
      _hover={{
        bg: 'primary.light',
      }}
    >
      {competition.name}
    </MenuItemOption>
  );
});
