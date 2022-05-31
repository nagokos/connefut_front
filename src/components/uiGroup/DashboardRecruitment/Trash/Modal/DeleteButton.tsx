import { FC, memo } from 'react';
import { Box, Button } from '@chakra-ui/react';
import {
  useDeleteRecruitmentMutation,
  useGetCurrentUserRecruitmentsQuery,
} from '../../../../../generated/graphql';
import { useFlash } from '../../../../../hooks/useFlash';

type Props = {
  id: string;
  title: string;
  onClose: () => void;
};

export const DeleteButton: FC<Props> = memo((props) => {
  const { id, title, onClose } = props;

  const [_c, deleteRecruitment] = useDeleteRecruitmentMutation();
  const [_d, executeQuery] = useGetCurrentUserRecruitmentsQuery();

  const { showFlash } = useFlash();

  const clickDeleteRecruitment = async () => {
    const res = await deleteRecruitment({
      id: id,
    });

    if (!res.error) {
      executeQuery({
        requestPolicy: 'network-only',
      });
      showFlash({ title: '削除しました', status: 'success' });
      onClose();
    }
  };

  return (
    <Box>
      <Button
        fontSize={12}
        w="100%"
        bg="error.main"
        onClick={clickDeleteRecruitment}
        _hover={{ bg: '#D11C1C' }}
        _active={{ bg: '#D11C1C' }}
      >
        削除する
      </Button>
    </Box>
  );
});
