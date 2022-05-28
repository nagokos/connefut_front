import { FormControl, FormLabel, Input, useDisclosure } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { LocationModal } from '..';
import { RecruitmentInput } from '../../../generated/graphql';

type Props = {
  watch: UseFormWatch<RecruitmentInput>;
  setValue: UseFormSetValue<RecruitmentInput>;
};

export const FormLocationMap: FC<Props> = memo((props) => {
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
      <LocationModal
        isOpen={isOpen}
        onClose={onClose}
        watch={watch}
        setValue={setValue}
      />
    </>
  );
});
