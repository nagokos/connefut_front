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
import { useLogoutUserMutation, User } from '../../../../generated/graphql';
import { AvatarMenuItem } from './MenuItem';
import { useNavigate } from 'react-router-dom';

type Props = {
  user: User;
};

export const AvatarMenu: FC<Props> = memo((props) => {
  const { user } = props;

  const navigate = useNavigate();

  const [_, logoutUser] = useLogoutUserMutation();
  const logout = async () => {
    const res = await logoutUser();
    if (res.data?.logoutUser) {
      window.location.href = '/';
    }
  };

  const lists = [
    {
      icon: <MdOutlineCreate color="#78909c" fontSize={19} />,
      title: '募集の作成',
      onClick: () => navigate('/recruitments/new'),
    },
    {
      icon: <MdOutlineArticle color="#78909c" fontSize={19} />,
      title: '募集の管理',
    },
    {
      icon: <MdOutlineEventNote color="#78909c" fontSize={19} />,
      title: '応募の管理',
    },
    {
      icon: <MdOutlineBookmarkBorder color="#78909c" fontSize={19} />,
      title: 'ストックの管理',
      divider: true,
    },
    {
      icon: <MdOutlineSettings color="#78909c" fontSize={19} />,
      title: 'アカウント設定',
    },
    {
      icon: <MdOutlineInfo color="#78909c" fontSize={19} />,
      title: 'お問い合わせ',
      divider: true,
    },
    {
      icon: <MdOutlineLogout color="#78909c" fontSize={19} />,
      title: 'ログアウト',
      onClick: logout,
    },
  ];

  return (
    <Menu>
      <MenuButton>
        <Avatar w={9} height={9} src={user.avatar} />
      </MenuButton>
      <MenuList minW={230} py={0} boxShadow="menu">
        <MenuItem _focus={{ bg: '#f0f5f4' }} _active={{ bg: '#f0f5f4' }} py={4}>
          <Avatar w={9} height={9} mr={3} src={user.avatar} />
          <Text fontSize={15}>{user.name}</Text>
        </MenuItem>
        <MenuDivider my={0} borderColor="#ebf2f2" />
        {lists.map((list, key) => (
          <AvatarMenuItem list={list} key={key} />
        ))}
      </MenuList>
    </Menu>
  );
});
