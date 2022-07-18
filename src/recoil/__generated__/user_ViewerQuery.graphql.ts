/**
 * @generated SignedSource<<292c5e58791e866f56eb2dbca5dc8f37>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type user_ViewerQuery$variables = {};
export type user_ViewerQuery$data = {
  readonly viewer: {
    readonly avatar: string;
    readonly id: string;
    readonly name: string;
  } | null;
};
export type user_ViewerQuery = {
  response: user_ViewerQuery$data;
  variables: user_ViewerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "viewer",
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
    "name": "user_ViewerQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "user_ViewerQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1a75eeac4977a00ba11a1429e1c78eeb",
    "id": null,
    "metadata": {},
    "name": "user_ViewerQuery",
    "operationKind": "query",
    "text": "query user_ViewerQuery {\n  viewer {\n    id\n    name\n    avatar\n  }\n}\n"
  }
};
})();

(node as any).hash = "598bd32d8d5129be1d356ebd451e0736";

export default node;
