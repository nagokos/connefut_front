import { Type } from '../generated/graphql';

export type SelectOption = {
  value: string;
  label: string;
};

export type CardRecEdge = {
  cursor: string;
  node: CardRecruitment;
};

export type CardRecruitment = {
  id: string;
  title: string;
  content?: string | null | undefined;
  type: Type;
  prefecture?: CardPrefecture | null | undefined;
  user: CardUser;
  capacity?: number | null | undefined;
  place?: string | null | undefined;
  competition?: CardCompetition | null | undefined;
  startAt?: any;
  closingAt?: any;
  updatedAt: any;
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
