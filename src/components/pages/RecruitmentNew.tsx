import { FC, memo, useEffect } from 'react';
import { useQueryLoader } from 'react-relay';
import { graphql } from 'relay-runtime';
import { RecruitmentNewView } from '../views';
import { RecruitmentNew_RecruitmentNewQuery } from './__generated__/RecruitmentNew_RecruitmentNewQuery.graphql';

export const recruitmentNewQuery = graphql`
  query RecruitmentNew_RecruitmentNewQuery {
    competitions {
      ...RecruitmentFormCompetition_competitions
    }
    prefectures {
      ...RecruitmentFormPrefecture_prefectures
    }
    ...RecruitmentFormTag_tags
  }
`;

export const RecruitmentNew: FC = memo(() => {
  const [recruitmentNewQueryRef, loadRecruitmentNewQuery] =
    useQueryLoader<RecruitmentNew_RecruitmentNewQuery>(recruitmentNewQuery);

  useEffect(() => {
    loadRecruitmentNewQuery({});
  }, []);

  if (!recruitmentNewQueryRef) return null;

  return <RecruitmentNewView queryRef={recruitmentNewQueryRef} />;
});
