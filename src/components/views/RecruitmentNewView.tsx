import { FC, memo } from 'react';
import { PreloadedQuery, useMutation, usePreloadedQuery } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { graphql } from 'relay-runtime';
import {
  recruitmentCardConnection,
  recruitmentSelfCreatedConnection,
} from '../../recoil/recruitment';

import { RecruitmentForm } from '../model/recruitment/RecruitmentForm/RecruitmentForm';
import { recruitmentNewQuery } from '../pages/RecruitmentNew';
import { RecruitmentNew_RecruitmentNewQuery } from '../pages/__generated__/RecruitmentNew_RecruitmentNewQuery.graphql';
import {
  RecruitmentInput,
  RecruitmentNewView_CreateRecruitmentMutation,
  Status,
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
          ...RecruitmentForm_recruitment
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

  const connections = (status: Status) => {
    if (status === 'PUBLISHED') {
      if (cardConnection && selfConnection) {
        return [selfConnection, cardConnection];
      } else if (cardConnection) {
        return [cardConnection];
      } else if (selfConnection) {
        return [selfConnection];
      } else {
        return [];
      }
    } else {
      if (selfConnection) {
        return [selfConnection];
      } else {
        return [];
      }
    }
  };

  const onSubmit = (values: RecruitmentInput) => {
    commit({
      variables: {
        input: values,
        connections: connections(values.status),
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
    });
  };

  return (
    <RecruitmentForm
      {...data}
      tags={data}
      recruitment={null}
      isInFlight={isInFlight}
      onSubmit={onSubmit}
    />
  );
});
