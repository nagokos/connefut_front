import { FC, memo } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { RecruitmentSelfCreatedList } from '../model/recruitment';
import { viewerQuery } from '../pages/DashboardRecruitments';
import { DashboardRecruitments_ViewerQuery } from '../pages/__generated__/DashboardRecruitments_ViewerQuery.graphql';

type Props = {
  queryRef: PreloadedQuery<DashboardRecruitments_ViewerQuery>;
};

export const DashboardRecruitmentsView: FC<Props> = memo((props) => {
  const { queryRef } = props;

  const data = usePreloadedQuery<DashboardRecruitments_ViewerQuery>(
    viewerQuery,
    queryRef
  );

  return <RecruitmentSelfCreatedList recruitment={data} />;
});
