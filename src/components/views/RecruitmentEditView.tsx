import { FC, memo } from 'react';

export const RecruitmentEditView: FC = memo(() => {
  const { control, handleSubmit, watch, resetField, setValue, formState } =
    useForm<RecruitmentInput>({
      defaultValues: {
        title: recruitment.title,
        competitionId: recruitment.competition?.id,
        type: recruitment.type,
        detail: recruitment.detail,
        prefectureId: recruitment.prefecture?.id
          ? recruitment.prefecture.id
          : null,
        place: recruitment.place,
        startAt: recruitment.startAt ? new Date(recruitment.startAt) : '',
        status: recruitment.status,
        closingAt: recruitment.closingAt ? new Date(recruitment.closingAt) : '',
        locationLat: recruitment.locationLat
          ? recruitment.locationLat
          : undefined,
        locationLng: recruitment.locationLng
          ? recruitment.locationLng
          : undefined,
        tags: recruitment.tags,
      },
      resolver: yupResolver(recruitmentSchema),
      mode: 'onChange',
    });

  const onSubmit = async (values: RecruitmentInput) => {
    if (values.tags.length !== 0) {
      const transformTags = values.tags.map((tag) => {
        return {
          id: String(tag?.id),
          name: String(tag?.name),
          isNew: Boolean(tag?.isNew),
        };
      });
      values.tags = transformTags;
    }

    const res = await updateRecruitment({
      id: String(recruitmentId),
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
