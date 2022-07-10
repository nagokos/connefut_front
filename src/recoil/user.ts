import { atom } from 'recoil';
import { graphQLSelector } from 'recoil-relay';
import { graphql } from 'relay-runtime';
import { RelayEnvironment } from '../RelayEnvironment';
import { user_CurrentUserQuery$data } from './__generated__/user_CurrentUserQuery.graphql';

type currentUser = {
  id: string;
  name: string;
  avatar: string;
};

export const currentUserState = atom<currentUser | null>({
  key: 'currentUserState',
  default: null,
});

export const recruitmentsIDState = atom<string>({
  key: 'recruitmentsIDState',
  default: '',
});

export const currentUserQuery = graphQLSelector({
  key: 'currentUser',
  environment: RelayEnvironment,
  query: graphql`
    query user_CurrentUserQuery {
      currentUser {
        id
        name
        avatar
      }
    }
  `,
  default: null,
  variables: {},
  mapResponse: (data: user_CurrentUserQuery$data, { get }) => {
    const user = get(currentUserState);
    if (user) {
      return user;
    }
    return data.currentUser;
  },
});
