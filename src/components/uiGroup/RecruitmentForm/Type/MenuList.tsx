import { MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { MdCheck } from 'react-icons/md';
import { RecruitmentInput } from '../../../../generated/graphql';
import { MenuItemType } from '../../../../type/type';

type Props = {
  control: Control<RecruitmentInput>;
  types: MenuItemType[];
};

export const TypeMenuList: FC<Props> = memo((props) => {
  const { control, types } = props;

  return (
    <MenuList minW={220} boxShadow="md">
      <Controller
        control={control}
        name="type"
        render={({ field }) => (
          <MenuOptionGroup
            defaultValue={types[0].id}
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
                fontSize={11.5}
                fontFamily="Noto Sans JP"
                icon={<MdCheck color="#009688" fontSize={14} />}
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
  );
});
