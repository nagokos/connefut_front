import { FC, memo } from 'react';
import { Box, FormControl, FormLabel, Spacer } from '@chakra-ui/react';
import {
  CreatableSelect,
  chakraComponents,
  GroupBase,
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
import { useFragment, useMutation } from 'react-relay';
import { RecruitmentInput } from '../../../views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';
import { RecruitmentFormTag_CreateTagMutation } from './__generated__/RecruitmentFormTag_CreateTagMutation.graphql';

const tagsFragment = graphql`
  fragment RecruitmentFormTag_tags on Query {
    tags(first: 2147483647) @connection(key: "RecruitmentFormTag__tags") {
      __id
      edges {
        cursor
        node {
          id
          name
        }
      }
    }
  }
`;

const createTagMutation = graphql`
  mutation RecruitmentFormTag_CreateTagMutation(
    $connections: [ID!]!
    $input: CreateTagInput!
  ) {
    createTag(input: $input) {
      feedbackTagEdge @appendEdge(connections: $connections) {
        cursor
        node {
          id
          name
        }
      }
    }
  }
`;

type Props = {
  tags: RecruitmentFormTag_tags$key;
  control: Control<RecruitmentInput>;
  watchTags: readonly (string | null)[];
};

export const RecruitmentFormTag: FC<Props> = memo((props) => {
  const { control, watchTags, tags } = props;

  const tagsData = useFragment<RecruitmentFormTag_tags$key>(tagsFragment, tags);
  const [commit, isInFlight] =
    useMutation<RecruitmentFormTag_CreateTagMutation>(createTagMutation);

  const replaceOptions = (
    data?: RecruitmentFormTag_tags$data
  ): SelectOption[] | undefined => {
    return data?.tags?.edges?.map((edge) => {
      return { value: edge.node.id, label: edge.node.name };
    });
  };

  const selectTags = () => {
    if (watchTags.length === 0) {
      return [];
    } else {
      return watchTags.map((tagId) => {
        const name = tagsData.tags?.edges.find((edge) => {
          return edge.node.id === tagId;
        })?.node.name;
        return {
          value: String(tagId),
          label: String(name),
        };
      });
    }
  };

  return (
    <Controller
      control={control}
      name="tagIds"
      render={({ field: { onChange } }) => (
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
            onChange={(e) => {
              const tags = e.map((tag) => tag.value);
              const newTag = e.find((tag) => tag.__isNew__);
              if (newTag) {
                return commit({
                  variables: {
                    input: {
                      name: newTag.label,
                    },
                    connections: tagsData.tags?.__id
                      ? [String(tagsData.tags?.__id)]
                      : [],
                  },
                  onCompleted(response, errors) {
                    if (errors) {
                      console.log(errors);
                    }
                    const tagId = response.createTag.feedbackTagEdge.node.id;
                    tags.push(tagId);
                    const newArray = tags.filter((tag) => tag !== newTag.label);
                    onChange(newArray);
                  },
                });
              } else {
                return onChange(tags);
              }
            }}
          />
        </FormControl>
      )}
    />
  );
});
