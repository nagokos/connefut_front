import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { usePaginationFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { Home_SearchRecruitmentsQuery } from '../../../pages/__generated__/Home_SearchRecruitmentsQuery.graphql';
import { RecruitmentCard } from '../RecruitmentCard/RecruitmentCard';

import { RecruitmentCardList_recruitment$key } from './__generated__/RecruitmentCardList_recruitment.graphql';

export const recruitmentsFragment = graphql`
  fragment RecruitmentCardList_recruitment on Query
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 10 }
    after: { type: "String" }
  )
  @refetchable(queryName: "RecruitmentsQuery") {
    recruitments(first: $first, after: $after)
      @connection(key: "RecruitmentCardList__recruitments") {
      edges {
        cursor
        node {
          ...RecruitmentCard_recruitment
        }
      }
    }
  }
`;

type Props = {
  recruitment: RecruitmentCardList_recruitment$key;
};

export const RecruitmentCardList: FC<Props> = memo((props) => {
  const { recruitment } = props;

  const { data, loadNext, hasNext } = usePaginationFragment<
    Home_SearchRecruitmentsQuery,
    RecruitmentCardList_recruitment$key
  >(recruitmentsFragment, recruitment);

  return (
    <>
      <SimpleGrid columns={2} spacing={10}>
        {data.recruitments.edges.map((edge) => (
          <RecruitmentCard key={edge.cursor} recruitment={edge.node} />
        ))}
      </SimpleGrid>
      {hasNext && (
        <Box display="flex" justifyContent="center" mt={10}>
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
