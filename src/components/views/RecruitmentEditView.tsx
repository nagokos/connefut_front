import { FC, memo } from 'react';
import { PreloadedQuery, useMutation, usePreloadedQuery } from 'react-relay';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { graphql } from 'relay-runtime';
import { recruitmentCardConnection } from '../../recoil/recruitment';
import { RecruitmentForm } from '../model/recruitment';
import { recruitmentEditQuery } from '../pages/RecruitmentEdit';
import { RecruitmentEdit_RecruitmentEditQuery } from '../pages/__generated__/RecruitmentEdit_RecruitmentEditQuery.graphql';
import {
  RecruitmentEditView_UpdateRecruitmentMutation,
  RecruitmentInput,
  Status,
} from './__generated__/RecruitmentEditView_UpdateRecruitmentMutation.graphql';

const updateRecruitmentMutation = graphql`
  mutation RecruitmentEditView_UpdateRecruitmentMutation(
    $connections: [ID!]!
    $id: ID!
    $input: RecruitmentInput!
  ) {
    updateRecruitment(id: $id, input: $input) {
      feedbackRecruitmentEdge @prependEdge(connections: $connections) {
        cursor
        node {
          ...RecruitmentSelfCreated_recruitment
          ...RecruitmentSelfCreatedTrashModal_recruitment
          ...RecruitmentCard_recruitment
          ...RecruitmentForm_recruitment
        }
      }
      deletedRecruitmentId @deleteEdge(connections: $connections)
    }
  }
`;

type Props = {
  queryRef: PreloadedQuery<RecruitmentEdit_RecruitmentEditQuery>;
};

export const RecruitmentEditView: FC<Props> = memo((props) => {
  const { queryRef } = props;

  const { recruitmentId } = useParams();
  const navigate = useNavigate();

  const data = usePreloadedQuery<RecruitmentEdit_RecruitmentEditQuery>(
    recruitmentEditQuery,
    queryRef
  );

  const [commit, isInFlight] =
    useMutation<RecruitmentEditView_UpdateRecruitmentMutation>(
      updateRecruitmentMutation
    );

  const cardConnection = useRecoilValue(recruitmentCardConnection);

  const connections = (status: Status) => {
    if (status === 'PUBLISHED') {
      if (cardConnection) {
        return [cardConnection];
      } else {
        return [];
      }
    } else {
      if (cardConnection) {
        return [cardConnection];
      } else {
        return [];
      }
    }
  };

  const onSubmit = async (values: RecruitmentInput) => {
    commit({
      variables: {
        id: String(recruitmentId),
        input: values,
        connections: connections(values.status),
      },
    });
    navigate('/dashboard');
  };

  return (
    <RecruitmentForm
      tags={data}
      {...data}
      isInFlight={isInFlight}
      onSubmit={onSubmit}
    />
  );
});
