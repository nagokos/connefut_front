import { FC, memo } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { RecruitmentStockedList } from '../model/recruitment';
import { stockedRecruitmentsQuery } from '../pages/DashboardStocked';
import { DashboardStocked_StockedRecruitmentsQuery } from '../pages/__generated__/DashboardStocked_StockedRecruitmentsQuery.graphql';

type Props = {
  queryRef: PreloadedQuery<DashboardStocked_StockedRecruitmentsQuery>;
};

export const DashboardStockedView: FC<Props> = memo((props) => {
  const { queryRef } = props;

  const data = usePreloadedQuery<DashboardStocked_StockedRecruitmentsQuery>(
    stockedRecruitmentsQuery,
    queryRef
  );

  return <RecruitmentStockedList recruitment={data} />;
});
