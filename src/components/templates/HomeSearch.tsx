import { Box, Divider, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { SelectOption } from '../../type/type';
import { SearchInput, SearchSelect, SearchTag } from '../parts';
import { DatePicker } from '../uiParts';
import {
  HomeSearch_competitions$data,
  HomeSearch_competitions$key,
} from './__generated__/HomeSearch_competitions.graphql';
import {
  HomeSearch_prefectures$data,
  HomeSearch_prefectures$key,
} from './__generated__/HomeSearch_prefectures.graphql';
import { HomeSearch_tags$key } from './__generated__/HomeSearch_tags.graphql';

const searchCompetitionsFragment = graphql`
  fragment HomeSearch_competitions on Competition @relay(plural: true) {
    id
    name
  }
`;

const searchPrefecturesFragment = graphql`
  fragment HomeSearch_prefectures on Prefecture @relay(plural: true) {
    id
    name
  }
`;

const searchTagsFragment = graphql`
  fragment HomeSearch_tags on Tag @relay(plural: true) {
    id
    ...SearchTag_tag
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
  competitions: HomeSearch_competitions$key;
  prefectures: HomeSearch_prefectures$key;
  tags: HomeSearch_tags$key;
};

export const HomeSearch: FC<Props> = memo((props) => {
  const { competitions, prefectures, tags } = props;
  // const tags = () => {
  //   if (isMore) {
  //     return tagData.data?.getTags.slice(0, 10);
  //   } else {
  //     return tagData.data?.getTags.slice(0, 5);
  //   }
  // };

  const competitionsData = useFragment<HomeSearch_competitions$key>(
    searchCompetitionsFragment,
    competitions
  );
  const prefecturesData = useFragment<HomeSearch_prefectures$key>(
    searchPrefecturesFragment,
    prefectures
  );
  const tagsData = useFragment<HomeSearch_tags$key>(searchTagsFragment, tags);

  const replaceOptions = (
    data?: HomeSearch_competitions$data | HomeSearch_prefectures$data
  ): SelectOption[] | undefined => {
    return data?.map((node) => {
      return { value: node.id, label: node.name };
    });
  };

  console.log(competitionsData);

  return (
    <>
      <Box fontSize={13} fontWeight="bold" color="blackAlpha.500">
        検索条件
      </Box>
      <Box mt={3}>
        <SearchInput />
      </Box>
      <Box mt={6}>
        <Stack spacing={3}>
          <SearchSelect
            placeholder="競技"
            options={replaceOptions(competitionsData)}
          />
          <SearchSelect placeholder="募集タイプ" options={types} />
          <SearchSelect
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
          {tagsData.map((tag) => (
            <SearchTag key={tag.id} tag={tag} />
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
