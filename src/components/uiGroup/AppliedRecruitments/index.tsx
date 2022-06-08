import { Avatar, Box, Divider, Link, Spacer } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useGetAppliedRecruitmentsQuery } from '../../../generated/graphql';
import { MessageButton } from './MessageButton';
import { AppliedAt } from './AppliedAt';
import { Title } from './Title';

export const AppliedRecruitments: FC = memo(() => {
  const [data] = useGetAppliedRecruitmentsQuery();

  const recruitments = data.data?.getAppliedRecruitments;

  return (
    <>
      {recruitments?.map((recruitment) => (
        <Box key={recruitment.id}>
          <Box display="flex" alignItems="center">
            <Box>
              <Link
                display="flex"
                alignItems="center"
                fontFamily="ヒラギノ角ゴシック"
                fontSize={11.5}
                mb={1}
              >
                <Avatar w={4} h={4} mr={1.5} />
                <Box as="span">{recruitment.user.name}</Box>
              </Link>
              <Title title={recruitment.title} />
              <AppliedAt appliedAt={recruitment.applicant?.createdAt} />
            </Box>
            <Spacer />
            <Box>
              <MessageButton />
            </Box>
          </Box>
          <Divider borderColor="#ebf2f2" my={5} />
        </Box>
      ))}
    </>
  );
});
