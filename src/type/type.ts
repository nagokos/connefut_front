import { Type } from '../components/views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';

export type SelectOption = {
  value: string;
  label: string;
  __isNew__?: boolean;
};

export type CardRecEdge = {
  cursor: string;
  node: CardRecruitment;
};

export type CardRecruitment = {
  id: string;
  title: string;
  detail?: string | null | undefined;
  type: Type;
  prefecture?: CardPrefecture | null | undefined;
  user: CardUser;
  place?: string | null | undefined;
  competition?: CardCompetition | null | undefined;
  startAt?: string;
  closingAt?: string;
  publishedAt?: string;
};

export type CardPrefecture = {
  name: string;
};

export type CardUser = {
  name: string;
  avatar: string;
};

export type CardCompetition = {
  name: string;
};

export type MenuItemType = {
  id: Type;
  name: string;
};
