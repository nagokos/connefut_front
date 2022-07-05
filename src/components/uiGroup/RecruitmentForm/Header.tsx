import { Box, Button, HStack, Spacer } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RecruitmentInput, Status } from '../../../generated/graphql';
import { ArrowLeftButton } from '../../ui/ArrowLeftButton/ArrowLeftButton';

type Props = {
  setValue: UseFormSetValue<RecruitmentInput>;
  isSubmitting: boolean;
};

export const Header: FC<Props> = memo((props) => {
  const { setValue, isSubmitting } = props;

  const navigate = useNavigate();

  return (
    <Box
      bg="primary.light"
      minH={65}
      px={8}
      boxShadow="0 0 8px #1f193c1a;"
      display="flex"
      alignItems="center"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <ArrowLeftButton clickEvent={() => navigate('/dashboard')} />
      <Spacer />
      <HStack spacing={4}>
        <Button
          type="submit"
          bg="white"
          fontSize={11}
          h={9}
          color="blackAlpha.800"
          border="1px solid RGBA(0, 0, 0, 0.08)"
          _hover={{
            bg: 'whiteAlpha.600',
          }}
          _active={{
            bg: 'whiteAlpha.600',
          }}
          isLoading={isSubmitting}
          onClick={() => setValue('status', Status.Draft)}
        >
          下書き保存
        </Button>
        <Button
          type="submit"
          border="1px solid #009688"
          fontSize={11}
          h={8}
          isLoading={isSubmitting}
          onClick={() => setValue('status', Status.Published)}
        >
          公開する
        </Button>
      </HStack>
    </Box>
  );
});
