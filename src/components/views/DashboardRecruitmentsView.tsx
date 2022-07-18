import { FC, memo } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { RecruitmentSelfCreatedList } from '../model/recruitment';
import { viewerRecruitmentsQuery } from '../pages/DashboardRecruitments';
import { DashboardRecruitments_ViewerRecruitmentsQuery } from '../pages/__generated__/DashboardRecruitments_ViewerRecruitmentsQuery.graphql';

type Props = {
  queryRef: PreloadedQuery<DashboardRecruitments_ViewerRecruitmentsQuery>;
};

export const DashboardRecruitmentsView: FC<Props> = memo((props) => {
  const { queryRef } = props;

  const data = usePreloadedQuery<DashboardRecruitments_ViewerRecruitmentsQuery>(
    viewerRecruitmentsQuery,
    queryRef
  );

  return <RecruitmentSelfCreatedList recruitment={data} />;
});
