import { Box, Divider, Spacer } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useGetAppliedRecruitmentsQuery } from '../../../generated/graphql';
import { MessageButton } from './MessageButton';
import { OtherContents } from './OtherContents';
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
              <Title id={recruitment.id} title={recruitment.title} />
              <OtherContents
                avatar={recruitment.user.avatar}
                name={recruitment.user.name}
                appliedAt={recruitment.applicant?.createdAt}
              />
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
