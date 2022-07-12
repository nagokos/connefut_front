import { FC, memo } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { RecruitmentSelfCreatedList } from '../model/recruitment';
import { currentUserRecruitmentsQuery } from '../pages/DashboardRecruitments';
import { DashboardRecruitments_CurrentUserRecruitmentsQuery } from '../pages/__generated__/DashboardRecruitments_CurrentUserRecruitmentsQuery.graphql';

type Props = {
  queryRef: PreloadedQuery<DashboardRecruitments_CurrentUserRecruitmentsQuery>;
};

export const DashboardRecruitmentsView: FC<Props> = memo((props) => {
  const { queryRef } = props;

  const data =
    usePreloadedQuery<DashboardRecruitments_CurrentUserRecruitmentsQuery>(
      currentUserRecruitmentsQuery,
      queryRef
    );

  return <RecruitmentSelfCreatedList recruitment={data} />;
});
