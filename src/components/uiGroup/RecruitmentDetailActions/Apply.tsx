import { Button, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetCurrentUserQuery,
  useGetRecruitmentQuery,
} from '../../../generated/graphql';

export const Apply: FC = memo(() => {
  const { recruitmentId } = useParams();

  const [userData] = useGetCurrentUserQuery();
  const [recData] = useGetRecruitmentQuery({
    variables: {
      id: String(recruitmentId),
    },
  });

  const isMyRecruitment =
    userData.data?.getCurrentUser?.id === recData.data?.getRecruitment.user.id;

  return (
    <>
      <Text fontSize={13.5} letterSpacing={1} fontFamily="Noto Sans JP">
        1人が応募中
      </Text>
      <Button
        mt={4}
        fontSize={13.5}
        disabled={isMyRecruitment}
        variant="solid"
        w="100%"
        _active={{
          boxShadow: '0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)',
        }}
        _focus={{
          boxShadow: '0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)',
        }}
        boxShadow="0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)"
      >
        応募する
      </Button>
    </>
  );
});
