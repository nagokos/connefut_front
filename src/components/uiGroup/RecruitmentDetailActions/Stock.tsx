import { Button, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdBookmark, MdOutlineBookmarkBorder } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useCheckStockedQuery,
  useCreateStockMutation,
  useDeleteStockMutation,
} from '../../../generated/graphql';
import { useFlash } from '../../../hooks/useFlash';

export const Stock: FC = memo(() => {
  const { recruitmentId } = useParams();

  const navigate = useNavigate();
  const { showFlash } = useFlash();

  const [data, executeQuery] = useCheckStockedQuery({
    variables: {
      recruitmentId: String(recruitmentId),
    },
  });
  const [_c, createStock] = useCreateStockMutation();
  const [_d, deleteStock] = useDeleteStockMutation();

  const isStocked = !!data.data?.checkStocked;

  // const createOrDeleteStock = async () => {
  //   if (!userData.data?.getCurrentUser) {
  //     navigate('/login');
  //     showFlash({ title: 'ログインしてください', status: 'error' });
  //   }

  //   const variables = { recruitmentId: String(recruitmentId) };

  //   executeQuery({
  //     requestPolicy: 'network-only',
  //   });

  //   if (isStocked) {
  //     await deleteStock(variables);
  //   } else {
  //     await createStock(variables);
  //   }

  //   executeQuery({
  //     requestPolicy: 'network-only',
  //   });
  // };

  return (
    <>
      <Text fontSize={13.5} letterSpacing={1} fontFamily="Noto Sans JP">
        10人がストック済み
      </Text>
      <Button
        mt={4}
        bg="white"
        w="100%"
        color="blackAlpha.700"
        fontSize={13}
        boxShadow="0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)"
        leftIcon={
          <>
            {isStocked ? (
              <MdBookmark size={16} color="RGBA(0, 0, 0, 0.40)" />
            ) : (
              <MdOutlineBookmarkBorder size={16} color="RGBA(0, 0, 0, 0.48)" />
            )}
          </>
        }
        // onClick={createOrDeleteStock}
        _hover={{
          bg: 'blackAlpha.50',
        }}
        _active={{
          bg: 'blackAlpha.50',
        }}
        _focus={{
          boxShadow: '0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)',
        }}
      >
        {isStocked ? 'ストック済み' : 'ストックする'}
      </Button>
    </>
  );
});
