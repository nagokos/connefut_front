import { FC, memo } from 'react';

import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { currentUserRecruitmentsQuery } from '../../pages/DashboardRecruitments';
import { DashboardRecruitments_currentUserRecruitmentsQuery } from '../../pages/__generated__/DashboardRecruitments_currentUserRecruitmentsQuery.graphql';

type Props = {
  queryRef: PreloadedQuery<DashboardRecruitments_currentUserRecruitmentsQuery>;
};

export const DashboardRecruitment: FC<Props> = memo((props) => {
  const { queryRef } = props;

  const data =
    usePreloadedQuery<DashboardRecruitments_currentUserRecruitmentsQuery>(
      currentUserRecruitmentsQuery,
      queryRef
    );

  return (
    <>
      {/* {data.data?.getCurrentUserRecruitments.map((recruitment) => (
        <Box key={recruitment.id}>
          <Box display="flex" alignItems="center">
            <StatusTag status={recruitment.status} />
            <Spacer />
            {recruitment.status === Status.Published && <Applicants />}
            <Edit id={recruitment.id} />
            <Trash id={recruitment.id} title={recruitment.title} />
          </Box>
          <Title id={recruitment.id} title={recruitment.title} />
          <OtherContents
            status={recruitment.status}
            publishedAt={recruitment.publishedAt}
            createdAt={recruitment.createdAt}
            closingAt={recruitment.closingAt}
          />
          <Divider borderColor="#ebf2f2" my={4} />
        </Box>
      ))} */}
    </>
  );
});
