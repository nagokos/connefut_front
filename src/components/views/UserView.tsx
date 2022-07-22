import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineArticle } from 'react-icons/md';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { UserRecruitmentCardList } from '../model/user/UserRecruitmentCardList/UserRecruitmentCardList';
import { UserInformation } from '../model/user';
import { userQuery } from '../pages/User';
import { User_UserQuery } from '../pages/__generated__/User_UserQuery.graphql';

type Props = {
  queryRef: PreloadedQuery<User_UserQuery>;
};

export const UserView: FC<Props> = memo((props) => {
  const { queryRef } = props;

  const data = usePreloadedQuery<User_UserQuery>(userQuery, queryRef);

  return (
    <Box w={900} mx="auto" mt={16}>
      <UserInformation user={data.user} feedbackFollow={data.checkFollowed} />
      <Box mt={24} display="flex" alignItems="center">
        <Box fontSize={24} mr={1.5} color="primary.main">
          <MdOutlineArticle />
        </Box>
        <Box fontSize={17} fontWeight="bold">
          掲載中の募集
        </Box>
      </Box>
      <UserRecruitmentCardList user={data.user} />
    </Box>
  );
});
