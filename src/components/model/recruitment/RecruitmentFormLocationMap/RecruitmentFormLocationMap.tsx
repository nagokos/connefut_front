import { FormControl, FormLabel, Input, useDisclosure } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { RecruitmentInput } from '../../../views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';
import { RecruitmentFormLocationMapModal } from '../index';

type Props = {
  watch: UseFormWatch<RecruitmentInput>;
  setValue: UseFormSetValue<RecruitmentInput>;
};

export const RecruitmentFormLocationMap: FC<Props> = memo((props) => {
  const { watch, setValue } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const lat = watch('locationLat');
  const lng = watch('locationLng');

  return (
    <>
      <FormControl>
        <FormLabel fontSize={12} fontWeight="bold" color="blackAlpha.600">
          会場マップ
        </FormLabel>
        <Input
          onClick={onOpen}
          bg="white"
          border="none"
          size="lg"
          fontSize={13}
          readOnly
          placeholder={lat && lng ? '登録済み' : ''}
          cursor="pointer"
          _placeholder={{
            color: 'blackAlpha.600',
          }}
          _focus={{ border: 'none' }}
        />
      </FormControl>
      <RecruitmentFormLocationMapModal
        isOpen={isOpen}
        onClose={onClose}
        watch={watch}
        setValue={setValue}
      />
    </>
  );
});
