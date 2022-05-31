import { Box, Divider } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetStockedRecruitmentsQuery } from '../../../generated/graphql';
import { Logo } from './Logo';
import { OtherContents } from './OtherContents';
import { Title } from './Title';

export const StockRecruitment: FC = memo(() => {
  const [data] = useGetStockedRecruitmentsQuery({
    requestPolicy: 'network-only',
  });

  const navigate = useNavigate();

  return (
    <>
      {data.data?.getStockedRecruitments.map((recruitment) => (
        <Box key={recruitment.id}>
          <Box
            cursor="pointer"
            display="flex"
            alignItems="center"
            onClick={() => navigate(`/recruitments/${recruitment.id}`)}
          >
            <Box mr={4}>
              <Logo />
            </Box>
            <Box>
              <Title title={recruitment.title} />
              <OtherContents
                avatar={recruitment.user.avatar}
                name={recruitment.user.name}
                closingAt={recruitment.closingAt}
              />
            </Box>
          </Box>
          <Divider borderColor="#ebf2f2" my={5} />
        </Box>
      ))}
    </>
  );
});
