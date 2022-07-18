import { Avatar, Box, Link } from '@chakra-ui/react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { FC, memo } from 'react';
import { MdOutlineArticle } from 'react-icons/md';
import { useFragment } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import { graphql } from 'relay-runtime';
import { RecruitmentStocked_recruitment$key } from './__generated__/RecruitmentStocked_recruitment.graphql';

const recruitmentFragment = graphql`
  fragment RecruitmentStocked_recruitment on Recruitment {
    id
    title
    closingAt
    user {
      id
      name
      avatar
    }
  }
`;

type Props = {
  recruitment: RecruitmentStocked_recruitment$key;
};

export const RecruitmentStocked: FC<Props> = memo((props) => {
  const { recruitment } = props;

  const navigate = useNavigate();

  const recruitmentData = useFragment<RecruitmentStocked_recruitment$key>(
    recruitmentFragment,
    recruitment
  );

  return (
    <Box
      cursor="pointer"
      display="flex"
      alignItems="center"
      onClick={() => navigate(`/recruitments/${recruitmentData.id}`)}
    >
      <Box mr={4}>
        <Box
          bg="primary.light"
          w={14}
          h={14}
          borderRadius="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box color="primary.main" fontSize={27}>
            <MdOutlineArticle />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box cursor="pointer" fontSize={15.5} fontWeight="bold">
          {recruitmentData.title}
        </Box>
        <Box
          fontFamily="ヒラギノ角ゴシック"
          fontSize={11}
          mt={1}
          color="blackAlpha.600"
          display="flex"
          alignItems="center"
        >
          <Link display="flex" alignItems="center">
            <Avatar w={5} h={5} src={recruitmentData.user.avatar} mr={1.5} />
            {recruitmentData.user.name}
          </Link>
          <Box as="span" mx={0.5}>
            ・
          </Box>
          募集期限
          {format(
            new Date(String(recruitmentData.closingAt)),
            'yyyy年MM月dd日(E) HH:dd',
            {
              locale: ja,
            }
          )}
        </Box>
      </Box>
    </Box>
  );
});
