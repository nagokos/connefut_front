import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FC, memo } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import { Control, Controller } from 'react-hook-form';
import { RecruitmentInput } from '../../../views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';
registerLocale('ja', ja);

type Props = {
  control: Control<RecruitmentInput>;
};

export const RecruitmentFormStartAt: FC<Props> = memo((props) => {
  const { control } = props;

  return (
    <Controller
      control={control}
      name="startAt"
      defaultValue=""
      render={({ field }) => (
        <FormControl>
          <FormLabel
            fontSize={12}
            fontWeight="bold"
            color="blackAlpha.600"
            htmlFor="startAt"
          >
            開催日時
          </FormLabel>
          <ReactDatePicker
            id="startAt"
            selected={field.value ? new Date(String(field.value)) : null}
            onChange={(date) => {
              field.onChange(date);
            }}
            autoComplete="off"
            placeholderText=""
            popperPlacement="top"
            dateFormat="yyyy年MM月dd日(E) HH:mm"
            locale="ja"
            showTimeSelect
            timeCaption="時間"
            timeIntervals={5}
            minDate={new Date()}
            customInput={
              <Input
                id="place"
                bg="white"
                fontSize={13}
                readOnly
                border="none"
                _focus={{ boxShadow: 'none !important' }}
                size="lg"
              />
            }
          />
        </FormControl>
      )}
    />
  );
});
