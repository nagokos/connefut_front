import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetRecruitmentQuery,
  useGetRecruitmentTagsQuery,
} from '../../../generated/graphql';
import { CompTag } from './CompTag';
import { MainTag } from './MainTag';
import { TypeTag } from './TypeTag';

export const RecruitmentDetailTags: FC = memo(() => {
  const { recruitmentId } = useParams();

  const [data] = useGetRecruitmentQuery({
    variables: {
      id: String(recruitmentId),
    },
  });

  const [tagData] = useGetRecruitmentTagsQuery({
    variables: {
      recruitmentId: String(recruitmentId),
    },
  });

  const recruitment = data.data?.getRecruitment;

  return (
    <Box bg="white" boxShadow="0 2px 4px #4385bb12" px={5} py={5} rounded="lg">
      <Text fontSize={20} fontWeight="bold">
        Tags
      </Text>
      <SimpleGrid mt={2.5} columns={2} spacing={3}>
        <CompTag compName={recruitment?.competition?.name} />
        <TypeTag type={recruitment?.type} />
        {tagData.data?.getRecruitmentTags.map((tag) => (
          <MainTag key={tag?.id} tag={tag} />
        ))}
      </SimpleGrid>
    </Box>
  );
});
