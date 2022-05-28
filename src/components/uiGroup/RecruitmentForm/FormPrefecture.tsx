import { FormControl, FormLabel, Spacer } from '@chakra-ui/react';
import { Select, chakraComponents, GroupBase } from 'chakra-react-select';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { recruitmentChakraStyle } from '../../../assets/theme/chakraStyle';
import {
  Prefecture,
  RecruitmentInput,
  useGetPrefecturesQuery,
} from '../../../generated/graphql';
import { SelectOption } from '../../../type/type';

type Props = {
  control: Control<RecruitmentInput>;
};

export const FormPrefecture: FC<Props> = memo((props) => {
  const { control } = props;

  const [data] = useGetPrefecturesQuery();

  const replaceOptions = (data?: Prefecture[]): SelectOption[] | undefined => {
    return data?.map((node) => {
      return { value: node.id, label: node.name };
    });
  };

  return (
    <Controller
      control={control}
      name="prefectureId"
      defaultValue=""
      render={({ field }) => (
        <FormControl>
          <FormLabel
            fontSize={12}
            fontWeight="bold"
            color="blackAlpha.600"
            htmlFor="prefecture"
          >
            募集エリア
          </FormLabel>
          <Select<SelectOption, false, GroupBase<SelectOption>>
            size="lg"
            ref={field.ref}
            onChange={(e) => field.onChange(e?.value)}
            placeholder=""
            components={{
              IndicatorSeparator: () => null,
              ClearIndicator: () => null,
              Option: (props) => (
                <chakraComponents.Option {...props}>
                  {props.data.label}
                  <Spacer />
                </chakraComponents.Option>
              ),
            }}
            options={replaceOptions(data.data?.getPrefectures)}
            chakraStyles={recruitmentChakraStyle}
            selectedOptionStyle="color"
          />
        </FormControl>
      )}
    />
  );
});
