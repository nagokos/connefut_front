import { yupResolver } from '@hookform/resolvers/yup';
import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { PreloadedQuery, useMutation, usePreloadedQuery } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { graphql } from 'relay-runtime';
import {
  recruitmentCardConnection,
  recruitmentSelfCreatedConnection,
} from '../../recoil/recruitment';

import { recruitmentSchema } from '../../yup/recruitmentSchema';
import { RecruitmentForm } from '../model/recruitment/RecruitmentForm/RecruitmentForm';
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
    createRecruitment(input: $input) {
      feedbackRecruitmentEdge @prependEdge(connections: $connections) {
        cursor
        node {
          ...RecruitmentSelfCreated_recruitment
          ...RecruitmentSelfCreatedTrashModal_recruitment
          ...RecruitmentCard_recruitment
        }
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
  const selfConnection = useRecoilValue(recruitmentSelfCreatedConnection);
  const cardConnection = useRecoilValue(recruitmentCardConnection);

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
        venue: '',
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
        connections:
          values.status === 'PUBLISHED'
            ? [selfConnection, cardConnection]
            : [selfConnection],
      },
      onCompleted(response, errors) {
        if (errors) {
          console.log(errors);
        }
        console.log(response);
        navigate('/dashboard');
      },
      onError(error) {
        console.log(error);
      },
      updater(store) {
        console.log(store);
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
