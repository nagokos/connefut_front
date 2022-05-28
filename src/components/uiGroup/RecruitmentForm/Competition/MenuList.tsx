import { MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { MdCheck } from 'react-icons/md';
import { Competition, RecruitmentInput } from '../../../../generated/graphql';

type Props = {
  competitions: Competition[];
  control: Control<RecruitmentInput>;
};

export const CompMenuList: FC<Props> = memo((props) => {
  const { competitions, control } = props;

  return (
    <MenuList minW={190} boxShadow="md">
      <Controller
        control={control}
        name="competitionId"
        render={({ field }) => (
          <MenuOptionGroup
            defaultValue={field.value}
            title="募集競技"
            fontSize={12}
            type="radio"
            onChange={field.onChange}
          >
            {competitions.map((competition) => (
              <MenuItemOption
                key={competition.id}
                bg="white"
                value={competition.id}
                fontSize={11.5}
                fontFamily="Noto Sans JP"
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
            ))}
          </MenuOptionGroup>
        )}
      ></Controller>
    </MenuList>
  );
});
