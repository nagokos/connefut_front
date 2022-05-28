import { Box, Divider, Stack, Text } from '@chakra-ui/react';
import { FC, memo, useState } from 'react';

import { DatePicker } from '../../uiParts/DatePicker';
import { SearchSelect } from './Select';
import { SearchInput } from './Input';
import {
  Competition,
  Prefecture,
  Type,
  useGetCompetitionsQuery,
  useGetPrefecturesQuery,
  useGetTagsQuery,
} from '../../../generated/graphql';
import { SelectOption } from '../../../type/type';
import { SearchTag } from './Tag';

const types = [
  { value: String(Type.Individual), label: '試合相手の募集' },
  { value: String(Type.Opponent), label: '個人での参加の募集' },
  { value: String(Type.Member), label: 'チームメイトの募集' },
  { value: String(Type.Joining), label: 'チームに加入したい人の募集' },
  { value: String(Type.Others), label: 'その他' },
];

export const HomeSearch: FC = memo(() => {
  const [prefData] = useGetPrefecturesQuery();
  const [compData] = useGetCompetitionsQuery();
  const [tagData] = useGetTagsQuery();
  const [isMore, setIsMore] = useState(false);

  const tags = () => {
    if (isMore) {
      return tagData.data?.getTags.slice(0, 10);
    } else {
      return tagData.data?.getTags.slice(0, 5);
    }
  };

  const replaceOptions = (
    data?: Prefecture[] | Competition[]
  ): SelectOption[] | undefined => {
    return data?.map((node) => {
      return { value: node.id, label: node.name };
    });
  };

  return (
    <>
      <Text fontSize={13} fontWeight="bold" color="blackAlpha.500">
        検索条件
      </Text>
      <Box mt={3}>
        <SearchInput />
      </Box>
      <Box mt={6}>
        <Stack spacing={3}>
          <SearchSelect
            placeholder="競技"
            options={replaceOptions(compData.data?.getCompetitions)}
          />
          <SearchSelect placeholder="募集タイプ" options={types} />
          <SearchSelect
            placeholder="エリア"
            options={replaceOptions(prefData.data?.getPrefectures)}
          />
          <DatePicker />
        </Stack>
        <Divider my={7} borderColor="#E1EBE9" />
        <Box mt={-2} px={1}>
          <Text fontSize={13} fontWeight="bold" color="blackAlpha.500">
            タグ
          </Text>
          {tags()?.map((tag) => (
            <SearchTag key={tag.id} tag={tag} />
          ))}
          <Text
            mt={4}
            fontSize={11}
            color="#009688"
            fontWeight="bold"
            cursor="pointer"
            onClick={() => setIsMore(true)}
            display={isMore ? 'none' : ''}
          >
            もっとみる
          </Text>
        </Box>
      </Box>
    </>
  );
});
