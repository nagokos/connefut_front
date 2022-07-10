import { FC, memo } from 'react';
import { Box, FormControl, FormLabel, Spacer } from '@chakra-ui/react';
import {
  CreatableSelect,
  chakraComponents,
  GroupBase,
  MultiValue,
} from 'chakra-react-select';
import { Control, Controller } from 'react-hook-form';

import { SelectOption } from '../../../../type/type';
import { recruitmentChakraStyle } from '../../../../assets/theme/chakraStyle';
import { IoMdAdd } from 'react-icons/io';
import { graphql } from 'relay-runtime';
import {
  RecruitmentFormTag_tags$data,
  RecruitmentFormTag_tags$key,
} from './__generated__/RecruitmentFormTag_tags.graphql';
import { useFragment } from 'react-relay';
import {
  RecruitmentInput,
  recruitmentTagInput,
} from '../../../views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';

const tagsFragment = graphql`
  fragment RecruitmentFormTag_tags on Tag @relay(plural: true) {
    id
    name
  }
`;

type Props = {
  tags: RecruitmentFormTag_tags$key;
  control: Control<RecruitmentInput>;
  watchTags: readonly (recruitmentTagInput | null)[];
};

export const RecruitmentFormTag: FC<Props> = memo((props) => {
  const { control, watchTags, tags } = props;

  const tagsData = useFragment<RecruitmentFormTag_tags$key>(tagsFragment, tags);

  const replaceOptions = (
    data?: RecruitmentFormTag_tags$data
  ): SelectOption[] | undefined => {
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

  const selectTags = () => {
    if (watchTags.length === 0) {
      return [];
    } else {
      return watchTags.map((tag) => {
        return { value: String(tag?.id), label: String(tag?.name) };
      });
    }
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
            options={replaceOptions(tagsData)}
            chakraStyles={recruitmentChakraStyle}
            selectedOptionStyle="color"
            formatCreateLabel={(inputValue: string) => (
              <Box display="flex" alignItems="center">
                <IoMdAdd fontSize={13} />
                <Box ml={2} fontWeight="bold" mr={2}>
                  {inputValue}
                </Box>
                を作成する
              </Box>
            )}
            value={selectTags()}
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
