import { FC, memo, useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { useParams } from 'react-router-dom';
import { graphql } from 'relay-runtime';
import { RecruitmentView } from '../views';
import { Recruitment_RecruitmentQuery } from './__generated__/Recruitment_RecruitmentQuery.graphql';

export const recruitmentQuery = graphql`
  query Recruitment_RecruitmentQuery($id: String!) {
    recruitment(id: $id) {
      ...RecruitmentDetails_recruitment
      ...RecruitmentTagList_recruitment
    }
  }
`;

export const Recruitment: FC = memo(() => {
  const { recruitmentId } = useParams();

  const [recruitmentQueryRef, loadRecruitmentQuery] =
    useQueryLoader<Recruitment_RecruitmentQuery>(recruitmentQuery);

  useEffect(() => {
    loadRecruitmentQuery({ id: String(recruitmentId) });
  }, []);

  if (!recruitmentQueryRef) return null;

  return <RecruitmentView queryRef={recruitmentQueryRef} />;
});
