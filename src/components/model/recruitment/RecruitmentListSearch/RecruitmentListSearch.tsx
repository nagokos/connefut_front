import { Box, Divider, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { SelectOption } from '../../../../type/type';
import { DatePicker } from '../../../ui/DatePicker/DatePicker';
import { RecruitmentSearchInput } from '../RecruitmentSearchInput/RecruitmentSearchInput';
import { RecruitmentSearchSelect } from '../RecruitmentSearchSelect/RecruitmentSearchSelect';
import { RecruitmentSearchTag } from '../RecruitmentSearchTag/RecruitmentSearchTag';
import {
  RecruitmentListSearch_competitions$data,
  RecruitmentListSearch_competitions$key,
} from './__generated__/RecruitmentListSearch_competitions.graphql';
import {
  RecruitmentListSearch_prefectures$data,
  RecruitmentListSearch_prefectures$key,
} from './__generated__/RecruitmentListSearch_prefectures.graphql';
import { RecruitmentListSearch_tags$key } from './__generated__/RecruitmentListSearch_tags.graphql';

const searchCompetitionsFragment = graphql`
  fragment RecruitmentListSearch_competitions on Competition
  @relay(plural: true) {
    id
    name
  }
`;

const searchPrefecturesFragment = graphql`
  fragment RecruitmentListSearch_prefectures on Prefecture
  @relay(plural: true) {
    id
    name
  }
`;

const tagsFragment = graphql`
  fragment RecruitmentListSearch_tags on Query {
    tags(first: 2147483647) @connection(key: "RecruitmentListSearch__tags") {
      __id
      edges {
        cursor
        node {
          id
          name
          ...RecruitmentSearchTag_tag
        }
      }
    }
  }
`;

const types = [
  { value: '1', label: '対戦相手の募集' },
  { value: '2', label: '個人プレーヤーの募集' },
  { value: '3', label: 'メンバーの募集' },
  { value: '4', label: 'チームに加入したい人の募集' },
  { value: '5', label: 'その他' },
];

type Props = {
  competitions: RecruitmentListSearch_competitions$key;
  prefectures: RecruitmentListSearch_prefectures$key;
  tags: RecruitmentListSearch_tags$key;
};

export const RecruitmentListSearch: FC<Props> = memo((props) => {
  const { competitions, prefectures, tags } = props;
  // const tags = () => {
  //   if (isMore) {
  //     return tagData.data?.getTags.slice(0, 10);
  //   } else {
  //     return tagData.data?.getTags.slice(0, 5);
  //   }
  // };

  const competitionsData = useFragment<RecruitmentListSearch_competitions$key>(
    searchCompetitionsFragment,
    competitions
  );
  const prefecturesData = useFragment<RecruitmentListSearch_prefectures$key>(
    searchPrefecturesFragment,
    prefectures
  );
  const tagsData = useFragment<RecruitmentListSearch_tags$key>(
    tagsFragment,
    tags
  );

  const replaceOptions = (
    data?:
      | RecruitmentListSearch_competitions$data
      | RecruitmentListSearch_prefectures$data
  ): SelectOption[] | undefined => {
    return data?.map((node) => {
      return { value: node.id, label: node.name };
    });
  };

  return (
    <>
      <Box fontSize={13} fontWeight="bold" color="blackAlpha.500">
        検索条件
      </Box>
      <Box mt={3}>
        <RecruitmentSearchInput />
      </Box>
      <Box mt={6}>
        <Stack spacing={3}>
          <RecruitmentSearchSelect
            placeholder="競技"
            options={replaceOptions(competitionsData)}
          />
          <RecruitmentSearchSelect placeholder="募集タイプ" options={types} />
          <RecruitmentSearchSelect
            placeholder="エリア"
            options={replaceOptions(prefecturesData)}
          />
          <DatePicker />
        </Stack>
        <Divider my={7} borderColor="#E1EBE9" />
        <Box mt={-2} px={1}>
          <Box fontSize={13} fontWeight="bold" color="blackAlpha.500">
            タグ
          </Box>
          {tagsData?.tags?.edges.map((edge) => (
            <RecruitmentSearchTag key={edge.node.id} tag={edge.node} />
          ))}
          <Box
            mt={4}
            fontSize={11}
            color="#009688"
            fontWeight="bold"
            cursor="pointer"
            // onClick={() => setIsMore(true)}
            // display={isMore ? 'none' : ''}
          >
            もっとみる
          </Box>
        </Box>
      </Box>
    </>
  );
});
