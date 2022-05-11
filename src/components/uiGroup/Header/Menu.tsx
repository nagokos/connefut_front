import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import {
  MdOutlineCreate,
  MdOutlineArticle,
  MdOutlineEventNote,
  MdOutlineBookmarkBorder,
  MdOutlineSettings,
  MdOutlineInfo,
  MdOutlineLogout,
} from 'react-icons/md';
import { AvatarMenuItem } from './MenuItem';

const lists = [
  {
    id: 1,
    icon: <MdOutlineCreate color="#78909c" fontSize={19} />,
    title: '募集の作成',
  },
  {
    id: 2,
    icon: <MdOutlineArticle color="#78909c" fontSize={19} />,
    title: '募集の管理',
  },
  {
    id: 3,
    icon: <MdOutlineEventNote color="#78909c" fontSize={19} />,
    title: '応募の管理',
  },
  {
    id: 4,
    icon: <MdOutlineBookmarkBorder color="#78909c" fontSize={19} />,
    title: 'ストックの管理',
    divider: true,
  },
  {
    id: 5,
    icon: <MdOutlineSettings color="#78909c" fontSize={19} />,
    title: 'アカウント設定',
  },
  {
    id: 6,
    icon: <MdOutlineInfo color="#78909c" fontSize={19} />,
    title: 'お問い合わせ',
    divider: true,
  },
  {
    id: 7,
    icon: <MdOutlineLogout color="#78909c" fontSize={19} />,
    title: 'ログアウト',
  },
];

export const AvatarMenu: FC = memo(() => {
  return (
    <Menu>
      <MenuButton>
        <Avatar w={9} height={9} />
      </MenuButton>
      <MenuList minW={230} py={0} boxShadow="menu">
        <MenuItem _focus={{ bg: '#f0f5f4' }} _active={{ bg: '#f0f5f4' }} py={4}>
          <Avatar w={9} height={9} mr={3} />
          <Text>kosuda</Text>
        </MenuItem>
        <MenuDivider my={0} borderColor="#ebf2f2" />
        {lists.map((list) => (
          <AvatarMenuItem list={list} key={list.id} />
        ))}
      </MenuList>
    </Menu>
  );
});
