import { FC, memo } from 'react';
import { usePaginationFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { DashboardRecruitments_CurrentUserRecruitmentsQuery } from '../../../pages/__generated__/DashboardRecruitments_CurrentUserRecruitmentsQuery.graphql';
import { RecruitmentSelfCreated } from '../RecruitmentSelfCreated/RecruitmentSelfCreated';
import { RecruitmentSelfCreatedList_recruitment$key } from './__generated__/RecruitmentSelfCreatedList_recruitment.graphql';

const recruitmentsFragment = graphql`
  fragment RecruitmentSelfCreatedList_recruitment on Query
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 20 }
    after: { type: "String" }
  )
  @refetchable(queryName: "CurrentUserRecruitmentsQuery") {
    currentUserRecruitments(first: $first, after: $after)
      @connection(key: "RecruitmentSelfCreatedList__currentUserRecruitments") {
      edges {
        cursor
        node {
          ...RecruitmentSelfCreated_recruitment
          ...RecruitmentSelfCreatedTrashModal_recruitment
        }
      }
    }
  }
`;

type Props = {
  recruitment: RecruitmentSelfCreatedList_recruitment$key;
};

export const RecruitmentSelfCreatedList: FC<Props> = memo((props) => {
  const { recruitment } = props;

  const { data, loadNext } = usePaginationFragment<
    DashboardRecruitments_CurrentUserRecruitmentsQuery,
    RecruitmentSelfCreatedList_recruitment$key
  >(recruitmentsFragment, recruitment);

  return (
    <>
      {data.currentUserRecruitments.edges.map((edge) => (
        <RecruitmentSelfCreated
          recruitment={edge.node}
          trashRecruitment={edge.node}
          key={edge.cursor}
        />
      ))}
    </>
  );
});
