import { FC, memo, useEffect, useMemo, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

import { useGetRecruitmentsQuery } from '../../../generated/graphql';
import { Card } from './Card';
import { PageButton } from './Button';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

export const RecruitmentCardList: FC = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const page = new URLSearchParams();

  const [pageNumber, setPageNumber] = useState<number>(1);

  const [first, setFirst] = useState<number | null>(10);
  const [after, setAfter] = useState<string | null>(null);
  const [last, setLast] = useState<number | null>(null);
  const [before, setBefore] = useState<string | null>(null);

  const [data, executeQuery] = useGetRecruitmentsQuery({
    variables: {
      paginationInput: {
        first: first,
        after: after,
        last: last,
        before: before,
        options: {},
      },
    },
    context: useMemo(() => ({ additionalTypenames: ['Recruitment'] }), []),
  });

  const pageInfo = data.data?.getRecruitments.pageInfo;
  const isNextPageExists = data.data?.getRecruitments.pageInfo.hasNextPage;
  const isPreviousPageExists =
    data.data?.getRecruitments.pageInfo.hasPreviousPage;

  const onClickNextPage = async () => {
    localStorage.setItem('cursor', String(pageInfo?.endCursor));
    localStorage.setItem('after_or_before', 'after');
    setFirst(10);
    setAfter(String(pageInfo?.endCursor));
    setLast(null);
    setBefore(null);
    executeQuery();

    const newNumber = pageNumber + 1;
    setPageNumber(newNumber);
    navigate({
      pathname: '/recruitments',
      search: createSearchParams({
        page: String(newNumber),
      }).toString(),
    });
  };

  const onClickPreviousPage = () => {
    localStorage.setItem('cursor', String(pageInfo?.startCursor));
    localStorage.setItem('after_or_before', 'before');
    setFirst(null);
    setAfter(null);
    setLast(10);
    setBefore(String(pageInfo?.startCursor));
    executeQuery();

    const newNumber = pageNumber - 1;
    setPageNumber(newNumber);
    navigate({
      pathname: '/recruitments',
      search: createSearchParams({
        page: String(newNumber),
      }).toString(),
    });
  };

  useEffect(() => {
    if (location.search === '') {
      setFirst(10);
      setAfter(null);
      setLast(null);
      setBefore(null);
      executeQuery();
    }
  }, [location]);

  return (
    <>
      <SimpleGrid columns={2} spacing={10}>
        {data.data?.getRecruitments.edges.map((edge) => (
          <Card key={edge.cursor} node={edge.node} />
        ))}
      </SimpleGrid>
      <Box my={10} display="flex" justifyContent="center">
        {isPreviousPageExists && (
          <PageButton
            onClick={onClickPreviousPage}
            displayName="前のページへ"
          />
        )}
        {isPreviousPageExists && isNextPageExists && <Box mx={5} />}
        {isNextPageExists && (
          <PageButton onClick={onClickNextPage} displayName="次のページへ" />
        )}
      </Box>
    </>
  );
});
