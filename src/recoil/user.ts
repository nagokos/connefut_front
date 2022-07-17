import { atom } from 'recoil';
import { graphQLSelector } from 'recoil-relay';
import { graphql } from 'relay-runtime';
import { RelayEnvironment } from '../RelayEnvironment';
import { user_ViewerQuery$data } from './__generated__/user_ViewerQuery.graphql';

type viewer = {
  id: string;
  name: string;
  avatar: string;
};

export const viewerState = atom<viewer | null>({
  key: 'viewerState',
  default: null,
});

export const viewerQuery = graphQLSelector({
  key: 'viewer',
  environment: RelayEnvironment,
  query: graphql`
    query user_ViewerQuery {
      viewer {
        id
        name
        avatar
      }
    }
  `,
  default: null,
  variables: {},
  mapResponse: (data: user_ViewerQuery$data, { get }) => {
    const viewer = get(viewerState);
    if (viewer) {
      return viewer;
    }
    return data.viewer;
  },
});
