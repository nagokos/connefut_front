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
      icon: <MdOutlineCreate color="RGBA(0, 0, 0, 0.48)" fontSize={19} />,
      title: '募集の作成',
      onClick: () => navigate('/recruitments/new'),
    },
    {
      icon: <MdOutlineArticle color="RGBA(0, 0, 0, 0.48)" fontSize={19} />,
      title: '募集の管理',
      onClick: () => navigate('/dashboard'),
    },
    {
      icon: <MdOutlineEventNote color="RGBA(0, 0, 0, 0.48)" fontSize={19} />,
      title: '応募の管理',
    },
    {
      icon: (
        <MdOutlineBookmarkBorder color="RGBA(0, 0, 0, 0.48)" fontSize={19} />
      ),
      title: 'ストックの管理',
      divider: true,
      onClick: () => navigate('/dashboard/stocks'),
    },
    {
      icon: <MdOutlineSettings color="RGBA(0, 0, 0, 0.48)" fontSize={19} />,
      title: 'アカウント設定',
    },
    {
      icon: <MdOutlineInfo color="RGBA(0, 0, 0, 0.48)" fontSize={19} />,
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
      <MenuList minW={240} py={0} boxShadow="xl">
        <MenuItem
          py={4}
          _hover={{ bg: 'primary.light' }}
          _focus={{ bg: 'white' }}
          _active={{ bg: 'primary.light' }}
        >
          <Avatar w={9} height={9} mr={3} src={user.avatar} />
          <Text fontSize={14} fontFamily="ヒラギノ角ゴシック">
            {user.name}
          </Text>
        </MenuItem>
        <MenuDivider my={0} borderColor="#ebf2f2" />
        {lists.map((list, key) => (
          <AvatarMenuItem list={list} key={key} />
        ))}
      </MenuList>
    </Menu>
  );
});
