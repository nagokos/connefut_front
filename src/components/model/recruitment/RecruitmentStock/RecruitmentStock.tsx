import { Button } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdBookmark, MdOutlineBookmarkBorder } from 'react-icons/md';
import { useFragment, useMutation } from 'react-relay';
import { useParams } from 'react-router-dom';
import { graphql } from 'relay-runtime';
import { RecruitmentStock_AddStockMutation } from './__generated__/RecruitmentStock_AddStockMutation.graphql';

import { RecruitmentStock_feedbackStock$key } from './__generated__/RecruitmentStock_feedbackStock.graphql';
import { RecruitmentStock_RemoveStockMutation } from './__generated__/RecruitmentStock_RemoveStockMutation.graphql';

const feedbackStockFragment = graphql`
  fragment RecruitmentStock_feedbackStock on FeedbackStock {
    viewerDoesStock
  }
`;

const addStockMutation = graphql`
  mutation RecruitmentStock_AddStockMutation($recruitmentId: String!) {
    addStock(recruitmentId: $recruitmentId) {
      ...RecruitmentStock_feedbackStock
    }
  }
`;

const removeStockMutation = graphql`
  mutation RecruitmentStock_RemoveStockMutation($recruitmentId: String!) {
    removeStock(recruitmentId: $recruitmentId) {
      ...RecruitmentStock_feedbackStock
    }
  }
`;

type Props = {
  feedbackStock: RecruitmentStock_feedbackStock$key;
};

export const RecruitmentStock: FC<Props> = memo((props) => {
  const { feedbackStock } = props;

  const { recruitmentId } = useParams();

  const feedbackStockData = useFragment<RecruitmentStock_feedbackStock$key>(
    feedbackStockFragment,
    feedbackStock
  );

  const [commitAdd, isInFlightAdd] =
    useMutation<RecruitmentStock_AddStockMutation>(addStockMutation);
  const [commitRemove, isInFlightRemove] =
    useMutation<RecruitmentStock_RemoveStockMutation>(removeStockMutation);

  const addStock = () => {
    commitAdd({
      variables: {
        recruitmentId: String(recruitmentId),
      },
    });
  };

  const removeStock = () => {
    commitRemove({
      variables: {
        recruitmentId: String(recruitmentId),
      },
    });
  };

  return (
    <Button
      bg="white"
      w="100%"
      color="blackAlpha.700"
      fontSize={13}
      boxShadow="0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)"
      leftIcon={
        <>
          {feedbackStockData.viewerDoesStock ? (
            <MdBookmark size={16} color="RGBA(0, 0, 0, 0.40)" />
          ) : (
            <MdOutlineBookmarkBorder size={16} color="RGBA(0, 0, 0, 0.48)" />
          )}
        </>
      }
      _hover={{
        bg: 'blackAlpha.50',
      }}
      _active={{
        bg: 'blackAlpha.50',
      }}
      _focus={{
        boxShadow: '0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)',
      }}
      mb={1.5}
      onClick={feedbackStockData.viewerDoesStock ? removeStock : addStock}
    >
      {feedbackStockData.viewerDoesStock ? 'ストック済み' : 'ストックする'}
    </Button>
  );
});
