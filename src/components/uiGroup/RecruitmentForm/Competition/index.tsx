import { Menu } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Control } from 'react-hook-form';
import {
  RecruitmentInput,
  useGetCompetitionsQuery,
} from '../../../../generated/graphql';
import { CompMenuButton } from './MenuButton';
import { CompMenuList } from './MenuList';

type Props = {
  control: Control<RecruitmentInput>;
  watchCompetitionId?: string;
};

export const FormCompetition: FC<Props> = memo((props) => {
  const { control, watchCompetitionId } = props;

  const [data] = useGetCompetitionsQuery();

  const competitions = data.data?.getCompetitions;

  if (!competitions) return null;

  return (
    <Menu>
      <CompMenuButton
        competitions={competitions}
        watchCompetitionId={watchCompetitionId}
      />
      <CompMenuList competitions={competitions} control={control} />
    </Menu>
  );
});
