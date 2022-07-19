import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { BiChevronDown } from 'react-icons/bi';
import { MdCheck } from 'react-icons/md';

import { MenuItemType } from '../../../../type/type';
import {
  RecruitmentInput,
  Type,
} from '../../../views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';

const types: Array<MenuItemType> = [
  { id: 'OPPONENT', name: '対戦相手の募集' },
  { id: 'PERSONAL', name: '個人プレーヤーの募集' },
  { id: 'MEMBER', name: 'メンバーの募集' },
  { id: 'JOIN', name: 'チームに加入したい人の募集' },
  { id: 'OTHER', name: 'その他' },
];

type Props = {
  control: Control<RecruitmentInput>;
  watchType: Type;
};

export const RecruitmentFormType: FC<Props> = memo((props) => {
  const { control, watchType } = props;

  return (
    <Menu>
      <MenuButton
        rounded="lg"
        bg="primary.50"
        color="primary.main"
        as={Button}
        fontSize={11}
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
            {types.find((type) => type.id === watchType)?.name}
          </Box>
          <BiChevronDown fontSize={17} />
        </Box>
      </MenuButton>
      <MenuList minW={220} boxShadow="md">
        <Controller
          control={control}
          name="type"
          defaultValue={watchType || types[0].id}
          render={({ field }) => (
            <MenuOptionGroup
              defaultValue={watchType || types[0].id}
              title="募集タイプ"
              fontSize={12}
              type="radio"
              onChange={field.onChange}
            >
              {types.map((type) => (
                <MenuItemOption
                  key={type.id}
                  bg="white"
                  value={type.id}
                  fontSize={12}
                  fontFamily="Noto Sans JP"
                  icon={
                    <Box color="primary.main">
                      <MdCheck fontSize={14} />
                    </Box>
                  }
                  _hover={{
                    bg: 'primary.light',
                  }}
                  _focus={{
                    bg: 'white',
                  }}
                >
                  {type.name}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          )}
        />
      </MenuList>
    </Menu>
  );
});
