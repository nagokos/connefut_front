/**
 * @generated SignedSource<<b8b67265a604ba21fe4c240091d8d13a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type user_GetCurrentUserQuery$variables = {};
export type user_GetCurrentUserQuery$data = {
  readonly getCurrentUser: {
    readonly avatar: string;
    readonly id: string;
    readonly name: string;
  } | null;
};
export type user_GetCurrentUserQuery = {
  response: user_GetCurrentUserQuery$data;
  variables: user_GetCurrentUserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "getCurrentUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "avatar",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "user_GetCurrentUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "user_GetCurrentUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6898a458586200ef69397cf6b700a7f9",
    "id": null,
    "metadata": {},
    "name": "user_GetCurrentUserQuery",
    "operationKind": "query",
    "text": "query user_GetCurrentUserQuery {\n  getCurrentUser {\n    id\n    name\n    avatar\n  }\n}\n"
  }
};
})();

(node as any).hash = "6201fb0eb45e04caf94c9f8df27b6ddd";

export default node;
