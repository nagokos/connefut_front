/**
 * @generated SignedSource<<8f47c2a30d6b5c7dbcb1dfd24091f77b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserLoginInvalidInputField = "EMAIL" | "PASSWORD" | "%future added value";
export type UserLoginInput = {
  email: string;
  password: string;
};
export type LoginEmailModal_UserLoginMutation$variables = {
  input: UserLoginInput;
};
export type LoginEmailModal_UserLoginMutation$data = {
  readonly userLogin: {
    readonly user: {
      readonly avatar: string;
      readonly id: string;
      readonly name: string;
    } | null;
    readonly userErrors: ReadonlyArray<{
      readonly __typename: "UserLoginAuthenticationError";
      readonly message: string;
    } | {
      readonly __typename: "UserLoginInvalidInputError";
      readonly field: UserLoginInvalidInputField;
      readonly message: string;
    } | {
      // This will never be '%other', but we need some
      // value in case none of the concrete values match.
      readonly __typename: "%other";
    }>;
  };
};
export type LoginEmailModal_UserLoginMutation = {
  response: LoginEmailModal_UserLoginMutation$data;
  variables: LoginEmailModal_UserLoginMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserLoginPayload",
    "kind": "LinkedField",
    "name": "userLogin",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "userErrors",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "field",
                "storageKey": null
              }
            ],
            "type": "UserLoginInvalidInputError",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v1/*: any*/)
            ],
            "type": "UserLoginAuthenticationError",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginEmailModal_UserLoginMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginEmailModal_UserLoginMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "22396bbf47e51e5de6f46457f86ea3cb",
    "id": null,
    "metadata": {},
    "name": "LoginEmailModal_UserLoginMutation",
    "operationKind": "mutation",
    "text": "mutation LoginEmailModal_UserLoginMutation(\n  $input: UserLoginInput!\n) {\n  userLogin(input: $input) {\n    user {\n      id\n      name\n      avatar\n    }\n    userErrors {\n      __typename\n      ... on UserLoginInvalidInputError {\n        message\n        field\n      }\n      ... on UserLoginAuthenticationError {\n        message\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9cbec6d58786b31187459425e5cc1a46";

export default node;
