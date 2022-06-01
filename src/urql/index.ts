import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from 'urql';
import { devtoolsExchange } from '@urql/devtools';
import { suspenseExchange } from '@urql/exchange-suspense';

export const client = createClient({
  url: 'http://localhost:8080/query',
  suspense: true,
  exchanges: [
    dedupExchange,
    suspenseExchange,
    cacheExchange,
    devtoolsExchange,
    fetchExchange,
  ],
  fetchOptions: () => ({
    credentials: 'include',
  }),
});
