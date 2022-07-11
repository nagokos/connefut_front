import { Box, SimpleGrid } from '@chakra-ui/react';
import { FC, memo, useEffect } from 'react';
import { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
registerLocale('ja', ja);
import {
  Control,
  FormState,
  UseFormHandleSubmit,
  UseFormResetField,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

import { RecruitmentInput } from '../../../views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';
import { useFlash } from '../../../../hooks/useFlash';
import {
  RecruitmentFormHeader,
  RecruitmentFormTitle,
  RecruitmentFormCompetition,
  RecruitmentFormType,
  RecruitmentFormDetail,
  RecruitmentFormPrefecture,
  RecruitmentFormClosingAt,
  RecruitmentFormVenue,
  RecruitmentFormTag,
  RecruitmentFormLocationMap,
  RecruitmentFormStartAt,
} from '../index';
import { RecruitmentFormCompetition_competitions$key } from '../RecruitmentFormCompetition/__generated__/RecruitmentFormCompetition_competitions.graphql';
import { RecruitmentFormPrefecture_prefectures$key } from '../RecruitmentFormPrefecture/__generated__/RecruitmentFormPrefecture_prefectures.graphql';
import { RecruitmentFormTag_tags$key } from '../RecruitmentFormTag/__generated__/RecruitmentFormTag_tags.graphql';
import { DividerText } from '../../../ui';

type Props = {
  competitions: RecruitmentFormCompetition_competitions$key;
  prefectures: RecruitmentFormPrefecture_prefectures$key;
  tags: RecruitmentFormTag_tags$key;
  control: Control<RecruitmentInput>;
  resetField: UseFormResetField<RecruitmentInput>;
  handleSubmit: UseFormHandleSubmit<RecruitmentInput>;
  setValue: UseFormSetValue<RecruitmentInput>;
  watch: UseFormWatch<RecruitmentInput>;
  isInFlight: boolean;
  formState: FormState<RecruitmentInput>;
  onSubmit: (values: RecruitmentInput) => void;
};

export const RecruitmentForm: FC<Props> = memo((props) => {
  const {
    watch,
    control,
    handleSubmit,
    setValue,
    isInFlight,
    onSubmit,
    competitions,
    prefectures,
    formState,
    tags,
  } = props;

  const { showFlash } = useFlash();
  const watchType = watch('type');

  useEffect(() => {
    if (
      watchType === 'MEMBER' ||
      watchType === 'JOIN' ||
      watchType === 'OTHER'
    ) {
      setValue('venue', '');
      setValue('startAt', '');
      setValue('locationLat', undefined);
      setValue('locationLng', undefined);
    }
  }, [watchType]);

  useEffect(() => {
    if (Object.keys(formState.errors).length) {
      const message = Object.entries(formState.errors)[0][1].message;
      showFlash({ title: String(message), status: 'error' });
    }
  }, [formState.errors]);

  console.log(watchType === 'OPPONENT');

  return (
    <>
      <Box bg="primary.light">
        <form onSubmit={handleSubmit(onSubmit)}>
          <RecruitmentFormHeader setValue={setValue} isInFlight={isInFlight} />
          <Box maxW={700} mx="auto" pt={16} pb={60} zIndex={0}>
            <RecruitmentFormTitle control={control} />
            <Box mt={4} display="flex">
              <Box mr={3}>
                <RecruitmentFormCompetition
                  competitions={competitions}
                  control={control}
                  watchCompetitionId={watch('competitionId')}
                />
              </Box>
              <Box>
                <RecruitmentFormType control={control} watchType={watchType} />
              </Box>
            </Box>
            <Box mt={1}>
              <RecruitmentFormDetail control={control} />
            </Box>
            <SimpleGrid columns={2} gap={9} mt={9}>
              <RecruitmentFormPrefecture
                prefectures={prefectures}
                watchPrefectureId={watch('prefectureId')}
                control={control}
              />
              {watchType === 'OPPONENT' || watchType === 'PERSONAL' ? (
                <RecruitmentFormVenue control={control} />
              ) : null}
              {watchType === 'OPPONENT' || watchType === 'PERSONAL' ? (
                <RecruitmentFormStartAt control={control} />
              ) : null}
              <RecruitmentFormClosingAt control={control} />
            </SimpleGrid>
            <Box mt={10}>
              <DividerText displayName="任意項目" />
            </Box>
            <SimpleGrid columns={2} gap={9} mt={5}>
              <RecruitmentFormTag
                watchTags={watch('tags')}
                control={control}
                tags={tags}
              />
              {watchType === 'OPPONENT' || watchType === 'PERSONAL' ? (
                <RecruitmentFormLocationMap watch={watch} setValue={setValue} />
              ) : null}
            </SimpleGrid>
          </Box>
        </form>
      </Box>
    </>
  );
});