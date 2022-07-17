import { Box, Button, Divider } from '@chakra-ui/react';
import { FC, memo, useEffect } from 'react';
import { usePaginationFragment } from 'react-relay';
import { useSetRecoilState } from 'recoil';
import { graphql } from 'relay-runtime';
import { recruitmentSelfCreatedConnection } from '../../../../recoil/recruitment';
import { DashboardRecruitments_ViewerQuery } from '../../../pages/__generated__/DashboardRecruitments_ViewerQuery.graphql';
import { RecruitmentSelfCreated } from '../RecruitmentSelfCreated/RecruitmentSelfCreated';
import { RecruitmentSelfCreatedList_recruitment$key } from './__generated__/RecruitmentSelfCreatedList_recruitment.graphql';

const recruitmentsFragment = graphql`
  fragment RecruitmentSelfCreatedList_recruitment on Query
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 20 }
    after: { type: "String" }
  )
  @refetchable(queryName: "ViewerRecruitmentsQuery") {
    viewerRecruitments(first: $first, after: $after)
      @connection(key: "RecruitmentSelfCreatedList__viewerRecruitments") {
      __id
      edges {
        cursor
        node {
          ...RecruitmentSelfCreated_recruitment
          ...RecruitmentSelfCreatedTrashModal_recruitment
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
`;

type Props = {
  recruitment: RecruitmentSelfCreatedList_recruitment$key;
};

export const RecruitmentSelfCreatedList: FC<Props> = memo((props) => {
  const { recruitment } = props;

  const { data, loadNext, hasNext } = usePaginationFragment<
    DashboardRecruitments_ViewerQuery,
    RecruitmentSelfCreatedList_recruitment$key
  >(recruitmentsFragment, recruitment);

  const setValue = useSetRecoilState(recruitmentSelfCreatedConnection);

  useEffect(() => {
    setValue(data.viewerRecruitments.__id);
  }, []);

  return (
    <>
      {data.viewerRecruitments.edges.map((edge) => (
        <Box key={edge.cursor}>
          <RecruitmentSelfCreated
            recruitment={edge.node}
            trashRecruitment={edge.node}
          />
          {data.viewerRecruitments.pageInfo.endCursor !== edge.cursor && (
            <Divider borderColor="#ebf2f2" my={4} />
          )}
        </Box>
      ))}
      {hasNext && (
        <Box display="flex" justifyContent="center" mt={10} mb={4}>
          <Button
            fontSize={13}
            border="1px solid"
            borderColor="primary.50"
            bg="white"
            boxShadow="sm"
            color="primary.main"
            _hover={{
              bg: 'primary.light',
            }}
            _active={{
              bg: 'primary.light',
            }}
            _focus={{
              boxShadow: 'sm',
            }}
            onClick={() => loadNext(10)}
          >
            もっとみる
          </Button>
        </Box>
      )}
    </>
  );
});
