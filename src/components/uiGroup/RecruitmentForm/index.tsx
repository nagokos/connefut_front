import { Box, SimpleGrid } from '@chakra-ui/react';
import { FC, memo, useEffect } from 'react';

import { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
registerLocale('ja', ja);

import { Header } from './Header';
import { FormTitle } from './FormTitle';
import { FormCompetition } from './Competition';
import { FormContent } from './FormContent';
import { FormPrefecture } from './FormPrefecture';
import { FormPlace } from './FormPlace';
import { FormStartAt } from './FormStartAt';
import { FormClosingAt } from './FormClosingAt';
import { FormLocationMap } from './FormLocationMap';
import { AnyDivider } from './AnyDivider';
import { RecruitmentInput, Type } from '../../../generated/graphql';
import { FormType } from './Type';
import { useFlash } from '../../../hooks/useFlash';
import { FormTags } from './Tags';
import {
  Control,
  FormState,
  UseFormHandleSubmit,
  UseFormResetField,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

type Props = {
  control: Control<RecruitmentInput>;
  resetField: UseFormResetField<RecruitmentInput>;
  handleSubmit: UseFormHandleSubmit<RecruitmentInput>;
  setValue: UseFormSetValue<RecruitmentInput>;
  watch: UseFormWatch<RecruitmentInput>;
  formState: FormState<RecruitmentInput>;
  onSubmit: (values: RecruitmentInput) => void;
};

export const RecruitmentForm: FC<Props> = memo((props) => {
  const { watch, control, handleSubmit, setValue, formState, onSubmit } = props;

  const { showFlash } = useFlash();
  const watchType = watch('type');

  useEffect(() => {
    if (
      watchType === Type.Member ||
      watchType === Type.Joining ||
      watchType === Type.Others
    ) {
      setValue('place', '');
      setValue('startAt', '');
      setValue('locationLat', undefined);
      setValue('locationLng', undefined);
    }
  }, [watchType]);

  useEffect(() => {
    if (Object.keys(formState.errors).length) {
      const message = Object.entries(formState.errors)[0][1].message;
      showFlash({ title: message, status: 'error' });
    }
  }, [formState.errors]);

  return (
    <>
      <Box bg="primary.light">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Header setValue={setValue} isSubmitting={formState.isSubmitting} />
          <Box maxW={700} mx="auto" pt={16} pb={60} zIndex={0}>
            <FormTitle control={control} />
            <Box mt={5} display="flex">
              <Box mr={3}>
                <FormCompetition
                  control={control}
                  watchCompetitionId={watch('competitionId')}
                />
              </Box>
              <Box>
                <FormType control={control} watchType={watchType} />
              </Box>
            </Box>
            <FormContent control={control} />
            <SimpleGrid columns={2} gap={8} mt={7}>
              <FormPrefecture
                watchPrefectureId={watch('prefectureId')}
                control={control}
              />
              {watchType === Type.Opponent || watchType === Type.Individual ? (
                <>
                  <FormPlace control={control} />
                  <FormStartAt control={control} />
                </>
              ) : null}
              <FormClosingAt control={control} />
            </SimpleGrid>
            <AnyDivider />
            <SimpleGrid columns={2} gap={8}>
              <FormTags watchTags={watch('tags')} control={control} />
              {watchType === Type.Opponent || watchType === Type.Individual ? (
                <FormLocationMap watch={watch} setValue={setValue} />
              ) : null}
            </SimpleGrid>
          </Box>
        </form>
      </Box>
    </>
  );
});
