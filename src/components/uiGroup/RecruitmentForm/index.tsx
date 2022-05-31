import { Box, SimpleGrid } from '@chakra-ui/react';
import { FC, memo, useEffect } from 'react';

import { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
registerLocale('ja', ja);

import { useForm } from 'react-hook-form';
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
import {
  RecruitmentInput,
  Status,
  Type,
  useCreateRecruitmentMutation,
  useGetCompetitionsQuery,
} from '../../../generated/graphql';
import { recruitmentSchema } from '../../../yup/recruitmentSchema';
import { FormType } from './Type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFlash } from '../../../hooks/useFlash';
import { FormTags } from './Tags';
import { useNavigate } from 'react-router-dom';

export const RecruitmentForm: FC = memo(() => {
  const [data] = useGetCompetitionsQuery();

  const navigate = useNavigate();

  const { showFlash } = useFlash();

  const [_, createRecruitment] = useCreateRecruitmentMutation();

  const {
    control,
    handleSubmit,
    watch,
    resetField,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<RecruitmentInput>({
    defaultValues: {
      title: '',
      competitionId: data.data?.getCompetitions[0].id,
      type: Type.Opponent,
      content: '',
      prefectureId: null,
      place: '',
      startAt: '',
      status: Status.Draft,
      closingAt: '',
      locationLat: undefined,
      locationLng: undefined,
      tags: [],
    },
    resolver: yupResolver(recruitmentSchema),
    mode: 'onChange',
  });

  const watchType = watch('type');

  const onSubmit = async (values: RecruitmentInput) => {
    const res = await createRecruitment({
      recruitmentInput: values,
    });
    navigate('/dashboard');
  };

  useEffect(() => {
    if (
      watchType === Type.Member ||
      watchType === Type.Joining ||
      watchType === Type.Others
    ) {
      resetField('place');
      resetField('startAt');
      resetField('locationLat');
      resetField('locationLng');
    }
  }, [watchType]);

  useEffect(() => {
    if (Object.keys(errors).length) {
      const message = Object.entries(errors)[0][1].message;
      showFlash({ title: message, status: 'error' });
    }
  }, [errors]);

  console.log(watch('locationLat'), watch('locationLng'));

  return (
    <>
      <Box bg="primary.light">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Header setValue={setValue} isSubmitting={isSubmitting} />
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
              <FormPrefecture control={control} />
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
              <FormTags control={control} />
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
