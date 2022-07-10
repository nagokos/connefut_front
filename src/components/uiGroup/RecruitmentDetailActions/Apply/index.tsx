import { Button, Text, useDisclosure } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useFlash } from '../../../../hooks/useFlash';

export const Apply: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { recruitmentId } = useParams();
  const navigate = useNavigate();
  const { showFlash } = useFlash();

  // const isDisable =
  //   userData.data?.getCurrentUser?.id ===
  //     recData.data?.getRecruitment.user.id ||
  //   checkData.data?.checkAppliedForRecruitment;

  // const modalOpen = () => {
  //   if (!userData.data?.getCurrentUser) {
  //     navigate('/login');
  //     showFlash({ title: 'ログインしてください', status: 'error' });
  //   }
  //   onOpen();
  // };

  // const buttonDisplayName = () => {
  //   if (
  //     userData.data?.getCurrentUser?.id === recData.data?.getRecruitment.user.id
  //   ) {
  //     return '応募する';
  //   } else {
  //     return '応募済み';
  //   }
  // };

  return (
    <>
      <Text fontSize={13.5} letterSpacing={1} fontFamily="Noto Sans JP">
        1人が応募中
      </Text>
      <Button
        mt={4}
        fontSize={13.5}
        // disabled={isDisable}
        variant="solid"
        w="100%"
        // onClick={modalOpen}
        boxShadow="0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)"
        _active={{
          boxShadow: '0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)',
        }}
        _focus={{
          boxShadow: '0 0 0 1px rgb(0 0 0 / 2%), 0 5px 8px 0 rgb(0 0 0 / 10%)',
        }}
        _hover={{
          bg: 'primary.hover',
        }}
      >
        {/* {buttonDisplayName()} */}
      </Button>
      {/* <ApplyModal isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
});
