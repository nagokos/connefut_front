import { FormControl, FormLabel, Spacer } from '@chakra-ui/react';
import { Select, chakraComponents, GroupBase } from 'chakra-react-select';
import { FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { recruitmentChakraStyle } from '../../../../assets/theme/chakraStyle';
import { SelectOption } from '../../../../type/type';
import { RecruitmentInput } from '../../../views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';
import {
  RecruitmentFormPrefecture_prefectures$key,
  RecruitmentFormPrefecture_prefectures$data,
} from './__generated__/RecruitmentFormPrefecture_prefectures.graphql';

const prefecturesFragemnt = graphql`
  fragment RecruitmentFormPrefecture_prefectures on Prefecture
  @relay(plural: true) {
    id
    name
  }
`;

type Props = {
  prefectures: RecruitmentFormPrefecture_prefectures$key;
  control: Control<RecruitmentInput>;
  watchPrefectureId?: string | null;
};

export const RecruitmentFormPrefecture: FC<Props> = memo((props) => {
  const { control, watchPrefectureId, prefectures } = props;

  const prefecturesData =
    useFragment<RecruitmentFormPrefecture_prefectures$key>(
      prefecturesFragemnt,
      prefectures
    );

  const replaceOptions = (
    data?: RecruitmentFormPrefecture_prefectures$data
  ): SelectOption[] | undefined => {
    return data?.map((node) => {
      return { value: String(node.id), label: node.name };
    });
  };

  const selectValue = () => {
    const findPrefecture = prefecturesData.find(
      (prefecture) => String(prefecture.id) === watchPrefectureId
    );

    if (findPrefecture) {
      return {
        label: String(findPrefecture.name),
        value: String(findPrefecture.id),
      };
    } else {
      return { label: prefecturesData[0].name, value: prefecturesData[0].id };
    }
  };

  return (
    <Controller
      control={control}
      name="prefectureId"
      defaultValue={prefecturesData[0].id}
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
            defaultValue={selectValue()}
            value={selectValue()}
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
            options={replaceOptions(prefecturesData)}
            chakraStyles={recruitmentChakraStyle}
            selectedOptionStyle="color"
          />
        </FormControl>
      )}
    />
  );
});
