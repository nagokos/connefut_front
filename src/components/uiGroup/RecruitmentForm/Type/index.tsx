import { Menu } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control } from 'react-hook-form';
import { RecruitmentInput, Type } from '../../../../generated/graphql';

import { MenuItemType } from '../../../../type/type';
import { TypeMenuButton } from './MenuButton';
import { TypeMenuList } from './MenuList';

const types: Array<MenuItemType> = [
  { id: Type.Opponent, name: '試合相手の募集' },
  { id: Type.Individual, name: '個人参加の募集' },
  { id: Type.Member, name: 'メンバーの募集' },
  { id: Type.Joining, name: 'チームに加入したい人の募集' },
  { id: Type.Others, name: 'その他' },
];

type Props = {
  control: Control<RecruitmentInput>;
  watchType: Type;
};

export const FormType: FC<Props> = memo((props) => {
  const { control, watchType } = props;

  return (
    <Menu>
      <TypeMenuButton types={types} watchType={watchType} />
      <TypeMenuList control={control} types={types} />
    </Menu>
  );
});
