import { FC, memo } from 'react';
import { FormControl, FormLabel, Spacer } from '@chakra-ui/react';
import {
  CreatableSelect,
  chakraComponents,
  GroupBase,
  MultiValue,
} from 'chakra-react-select';
import { Control, Controller } from 'react-hook-form';

import {
  RecruitmentInput,
  Tag,
  useGetTagsQuery,
} from '../../../../generated/graphql';
import { SelectOption } from '../../../../type/type';
import { recruitmentChakraStyle } from '../../../../assets/theme/chakraStyle';
import { CreateLabel } from './CreateLabel';

type Props = {
  control: Control<RecruitmentInput>;
};

export const FormTags: FC<Props> = memo((props) => {
  const { control } = props;

  const [data] = useGetTagsQuery();

  const replaceOptions = (data?: Tag[]): SelectOption[] | undefined => {
    return data?.map((node) => {
      return { value: node.id, label: node.name };
    });
  };

  const newTags = async (values: MultiValue<SelectOption>) => {
    return await Promise.all(
      values.map(async (tag) => {
        if (tag.__isNew__) {
          return {
            id: tag.value,
            name: tag.value,
            isNew: true,
          };
        }
        return { id: tag.value, name: tag.label, isNew: false };
      })
    );
  };

  return (
    <Controller
      control={control}
      name="tags"
      render={({ field }) => (
        <FormControl>
          <FormLabel
            fontSize={12}
            fontWeight="bold"
            color="blackAlpha.600"
            htmlFor="tags"
          >
            タグ
          </FormLabel>
          <CreatableSelect<SelectOption, true, GroupBase<SelectOption>>
            size="lg"
            isMulti
            placeholder=""
            options={replaceOptions(data.data?.getTags)}
            chakraStyles={recruitmentChakraStyle}
            selectedOptionStyle="color"
            formatCreateLabel={(inputValue: string) => (
              <CreateLabel input={inputValue} />
            )}
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
            onChange={async (e) => {
              const tags = await newTags(e);
              field.onChange(tags);
            }}
          />
        </FormControl>
      )}
    />
  );
});
