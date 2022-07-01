import { atom } from 'recoil';
import { graphQLSelector } from 'recoil-relay';
import { graphql } from 'relay-runtime';
import { RelayEnvironment } from '../RelayEnvironment';
import { user_GetCurrentUserQuery$data } from './__generated__/user_GetCurrentUserQuery.graphql';

type currentUser = {
  id: string;
  name: string;
  avatar: string;
};

export const currentUserState = atom<currentUser | null>({
  key: 'currentUserState',
  default: null,
});

export const currentUserQuery = graphQLSelector({
  key: 'currentUser',
  environment: RelayEnvironment,
  query: graphql`
    query user_GetCurrentUserQuery {
      getCurrentUser {
        id
        name
        avatar
      }
    }
  `,
  default: null,
  variables: {},
  mapResponse: (data: user_GetCurrentUserQuery$data, { get }) => {
    const user = get(currentUserState);
    if (user) {
      return user;
    }
    return data.getCurrentUser;
  },
});
