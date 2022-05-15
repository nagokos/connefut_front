import { Box, MenuDivider, MenuItem, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  list: {
    icon: JSX.Element;
    title: string;
    divider?: boolean;
    onClick?: () => void;
  };
};

export const AvatarMenuItem: FC<Props> = memo((props) => {
  const { list } = props;

  return (
    <Box>
      <MenuItem
        icon={list.icon}
        py={2.5}
        _focus={{ bg: '#f0f5f4' }}
        _active={{ bg: '#f0f5f4' }}
        onClick={list.onClick}
      >
        <Text fontSize={13.5} fontFamily="ヒラギノ角ゴシック">
          {list.title}
        </Text>
      </MenuItem>
      {list.divider && <MenuDivider my={0} borderColor="#ebf2f2" />}
    </Box>
  );
});
