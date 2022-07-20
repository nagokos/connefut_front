import { FC, memo, useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { useParams } from 'react-router-dom';
import { graphql } from 'relay-runtime';
import { RecruitmentEditView } from '../views';
import { RecruitmentEdit_RecruitmentEditQuery } from './__generated__/RecruitmentEdit_RecruitmentEditQuery.graphql';

export const recruitmentEditQuery = graphql`
  query RecruitmentEdit_RecruitmentEditQuery($id: ID!) {
    recruitment(id: $id) {
      ...RecruitmentForm_recruitment
    }
    competitions {
      ...RecruitmentFormCompetition_competitions
    }
    prefectures {
      ...RecruitmentFormPrefecture_prefectures
    }
    ...RecruitmentFormTag_tags
  }
`;

export const RecruitmentEdit: FC = memo(() => {
  const { recruitmentId } = useParams();

  const [recruitmentEditQueryRef, loadRecruitmentEditQuery] =
    useQueryLoader<RecruitmentEdit_RecruitmentEditQuery>(recruitmentEditQuery);

  useEffect(() => {
    loadRecruitmentEditQuery({ id: String(recruitmentId) });
  }, []);

  if (!recruitmentEditQueryRef) return null;

  return <RecruitmentEditView queryRef={recruitmentEditQueryRef} />;
});
