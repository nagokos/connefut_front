import { Box, Button, Divider } from '@chakra-ui/react';
import { FC, memo, useEffect } from 'react';
import { usePaginationFragment } from 'react-relay';
import { useSetRecoilState } from 'recoil';
import { graphql } from 'relay-runtime';
import { RecruitmentStocked } from '..';
import { recruitmentStockedConnection } from '../../../../recoil/recruitment';
import { DashboardStocked_StockedRecruitmentsQuery } from '../../../pages/__generated__/DashboardStocked_StockedRecruitmentsQuery.graphql';
import { RecruitmentStockedList_recruitment$key } from './__generated__/RecruitmentStockedList_recruitment.graphql';

const recruitmentsFragment = graphql`
  fragment RecruitmentStockedList_recruitment on Query
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 20 }
    after: { type: "String" }
  )
  @refetchable(queryName: "StockedRecruitmentsQuery") {
    stockedRecruitments(first: $first, after: $after)
      @connection(key: "RecruitmentSelfCreatedList__stockedRecruitments") {
      __id
      edges {
        cursor
        node {
          ...RecruitmentStocked_recruitment
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
`;

type Props = {
  recruitment: RecruitmentStockedList_recruitment$key;
};

export const RecruitmentStockedList: FC<Props> = memo((props) => {
  const { recruitment } = props;

  const { data, loadNext, hasNext } = usePaginationFragment<
    DashboardStocked_StockedRecruitmentsQuery,
    RecruitmentStockedList_recruitment$key
  >(recruitmentsFragment, recruitment);

  const setValue = useSetRecoilState(recruitmentStockedConnection);

  useEffect(() => {
    setValue(data.stockedRecruitments.__id);
  }, []);

  return (
    <>
      {data.stockedRecruitments.edges.map((edge) => (
        <Box key={edge.cursor}>
          <RecruitmentStocked recruitment={edge.node} />
          {data.stockedRecruitments.pageInfo.endCursor !== edge.cursor && (
            <Divider borderColor="#ebf2f2" my={5} />
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
