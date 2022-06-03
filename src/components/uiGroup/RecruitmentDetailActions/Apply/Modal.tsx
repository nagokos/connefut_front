import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, memo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
  ApplicantInput,
  useApplyForRecruitmentMutation,
} from '../../../../generated/graphql';
import { applicantSchema } from '../../../../yup/applicantSchema';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const ApplyModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  const { recruitmentId } = useParams();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ApplicantInput>({
    defaultValues: {
      message: '',
    },
    resolver: yupResolver(applicantSchema),
    mode: 'onChange',
  });

  const [_, applyForRecruitment] = useApplyForRecruitmentMutation();

  const onSubmit = async (values: ApplicantInput) => {
    const res = await applyForRecruitment({
      recruitmentId: String(recruitmentId),
      applicantInput: values,
    });
    console.log(res);
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(0, 0, 0, 0.22)" />
      <ModalContent maxW={470} py={1.5} borderRadius="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader fontSize={18} textAlign="center" pb={0} pt={5}>
            応募メッセージを入力してください
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={3} mt={2}>
            <Box
              fontSize={13}
              fontFamily="ヒラギノ角ゴシック"
              color="blackAlpha.600"
              textAlign="center"
            >
              募集内容をご確認の上、応募してください
              <br />
              応募の上で必要な情報があればこちらに入力してください。
            </Box>
            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <>
                  <Textarea
                    {...field}
                    fontSize={14}
                    autoFocus
                    py={3}
                    mt={5}
                    rows={9}
                    bg="primary.light"
                    border="1px solid"
                    placeholder="メッセージを入力"
                    borderColor="primary.50"
                    _placeholder={{ color: 'blackAlpha.600' }}
                    _hover={{ border: 'primary.50' }}
                    _active={{ border: 'primary.50' }}
                    _focus={{ border: 'primary.50' }}
                  />
                </>
              )}
            />
          </ModalBody>
          <ModalFooter justifyContent="center" pt={3} pb={4}>
            <Button
              type="submit"
              boxShadow="md"
              fontSize={15}
              h={9}
              px={6}
              disabled={!isValid}
              borderRadius={5}
              _hover={{
                bg: 'primary.main',
              }}
            >
              応募する
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
});
