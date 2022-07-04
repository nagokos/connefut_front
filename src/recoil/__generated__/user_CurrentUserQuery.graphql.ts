/**
 * @generated SignedSource<<28d20fd5501647bee22240947b247165>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type user_CurrentUserQuery$variables = {};
export type user_CurrentUserQuery$data = {
  readonly currentUser: {
    readonly avatar: string;
    readonly id: string;
    readonly name: string;
  } | null;
};
export type user_CurrentUserQuery = {
  response: user_CurrentUserQuery$data;
  variables: user_CurrentUserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "currentUser",
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
    "name": "user_CurrentUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "user_CurrentUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5c3e24408c4ba6f06bb7a87427b2bbad",
    "id": null,
    "metadata": {},
    "name": "user_CurrentUserQuery",
    "operationKind": "query",
    "text": "query user_CurrentUserQuery {\n  currentUser {\n    id\n    name\n    avatar\n  }\n}\n"
  }
};
})();

(node as any).hash = "61ec91cd217fe61a85e5b60197b38970";

export default node;
