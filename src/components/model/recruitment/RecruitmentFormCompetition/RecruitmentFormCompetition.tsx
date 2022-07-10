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
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { RecruitmentInput } from '../../../views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';
import { RecruitmentFormCompetition_competitions$key } from './__generated__/RecruitmentFormCompetition_competitions.graphql';

const competitionsFragment = graphql`
  fragment RecruitmentFormCompetition_competitions on Competition
  @relay(plural: true) {
    id
    name
    databaseId
  }
`;

type Props = {
  competitions: RecruitmentFormCompetition_competitions$key;
  control: Control<RecruitmentInput>;
  watchCompetitionId?: string;
};

export const RecruitmentFormCompetition: FC<Props> = memo((props) => {
  const { control, watchCompetitionId, competitions } = props;

  const competitionsData =
    useFragment<RecruitmentFormCompetition_competitions$key>(
      competitionsFragment,
      competitions
    );

  return (
    <Menu>
      <MenuButton
        rounded="lg"
        bg="primary.50"
        color="primary.main"
        as={Button}
        fontSize={11}
        px={3.5}
        pr={2}
        h={8}
        _hover={{
          bg: '#D2E1DE',
        }}
        _active={{
          bg: '#D2E1DE',
        }}
      >
        <Box display="flex" alignItems="center">
          <Box as="span" mr={1}>
            {watchCompetitionId
              ? competitionsData.find(
                  (competition) =>
                    String(competition.databaseId) === watchCompetitionId
                )?.name
              : competitionsData[0].name}
          </Box>
          <BiChevronDown fontSize={17} />
        </Box>
      </MenuButton>
      <MenuList minW={190} boxShadow="md">
        <Controller
          control={control}
          name="competitionId"
          defaultValue={String(competitionsData[0].databaseId)}
          render={({ field }) => (
            <MenuOptionGroup
              defaultValue={String(competitionsData[0].databaseId)}
              title="募集競技"
              fontSize={12.5}
              type="radio"
              onChange={field.onChange}
            >
              {competitionsData.map((competition) => (
                <MenuItemOption
                  key={String(competition.databaseId)}
                  bg="white"
                  value={String(competition.databaseId)}
                  fontSize={12}
                  fontFamily="Noto Sans JP"
                  icon={
                    <Box color="primary.main">
                      <MdCheck fontSize={14} />
                    </Box>
                  }
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
        />
      </MenuList>
    </Menu>
  );
});
