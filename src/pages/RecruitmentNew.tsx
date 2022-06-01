import { yupResolver } from '@hookform/resolvers/yup';
import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RecruitmentForm } from '../components/uiGroup';
import {
  RecruitmentInput,
  Status,
  useCreateRecruitmentMutation,
} from '../generated/graphql';
import { recruitmentSchema } from '../yup/recruitmentSchema';

export const RecruitmentNew: FC = memo(() => {
  const navigate = useNavigate();

  const { control, handleSubmit, watch, resetField, setValue, formState } =
    useForm<RecruitmentInput>({
      defaultValues: {
        title: '',
        competitionId: undefined,
        type: undefined,
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

  const [_, createRecruitment] = useCreateRecruitmentMutation();

  const onSubmit = async (values: RecruitmentInput) => {
    const res = await createRecruitment({
      recruitmentInput: values,
    });
    navigate('/dashboard');
  };

  return (
    <RecruitmentForm
      control={control}
      handleSubmit={handleSubmit}
      watch={watch}
      resetField={resetField}
      setValue={setValue}
      formState={formState}
      onSubmit={onSubmit}
    />
  );
});
