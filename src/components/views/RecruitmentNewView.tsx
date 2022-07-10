import { yupResolver } from '@hookform/resolvers/yup';
import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { PreloadedQuery, useMutation, usePreloadedQuery } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { graphql } from 'relay-runtime';
import { recruitmentsIDState } from '../../recoil/user';
import { recruitmentSchema } from '../../yup/recruitmentSchema';
import { RecruitmentForm } from '../model/recruitment';
import { recruitmentNewQuery } from '../pages/RecruitmentNew';
import { RecruitmentNew_RecruitmentNewQuery } from '../pages/__generated__/RecruitmentNew_RecruitmentNewQuery.graphql';
import {
  RecruitmentInput,
  RecruitmentNewView_CreateRecruitmentMutation,
} from './__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';

const createRecruitmentMutation = graphql`
  mutation RecruitmentNewView_CreateRecruitmentMutation(
    $connections: [ID!]!
    $input: RecruitmentInput!
  ) {
    createRecruitment(input: $input) @appendEdge(connections: $connections) {
      cursor
      node {
        id
      }
    }
  }
`;

type Props = {
  queryRef: PreloadedQuery<RecruitmentNew_RecruitmentNewQuery>;
};

export const RecruitmentNewView: FC<Props> = memo((props) => {
  const { queryRef } = props;

  const navigate = useNavigate();
  const value = useRecoilValue(recruitmentsIDState);

  const data = usePreloadedQuery<RecruitmentNew_RecruitmentNewQuery>(
    recruitmentNewQuery,
    queryRef
  );

  const [commit, isInFlight] =
    useMutation<RecruitmentNewView_CreateRecruitmentMutation>(
      createRecruitmentMutation
    );

  const { control, handleSubmit, watch, resetField, setValue, formState } =
    useForm<RecruitmentInput>({
      defaultValues: {
        title: '',
        competitionId: undefined,
        type: 'OPPONENT',
        detail: '',
        prefectureId: null,
        place: '',
        startAt: '',
        status: 'DRAFT',
        closingAt: '',
        locationLat: undefined,
        locationLng: undefined,
        tags: [],
      },
      resolver: yupResolver(recruitmentSchema),
      mode: 'onChange',
    });

  const onSubmit = (values: RecruitmentInput) => {
    commit({
      variables: {
        input: values,
        connections: [value],
      },
      onCompleted(response, errors) {
        console.log(response);
      },
      onError(error) {
        console.log(error);
      },
    });
  };

  return (
    <RecruitmentForm
      {...data}
      control={control}
      handleSubmit={handleSubmit}
      watch={watch}
      resetField={resetField}
      setValue={setValue}
      formState={formState}
      isInFlight={isInFlight}
      onSubmit={onSubmit}
    />
  );
});
