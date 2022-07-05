/**
 * @generated SignedSource<<e5ae9ed1e3866ed96bade9b3bb26cbc5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LoginUserInvalidInputField = "EMAIL" | "PASSWORD" | "%future added value";
export type LoginUserInput = {
  email: string;
  password: string;
};
export type UserLoginModal_LoginUserMutation$variables = {
  input: LoginUserInput;
};
export type UserLoginModal_LoginUserMutation$data = {
  readonly loginUser: {
    readonly user: {
      readonly avatar: string;
      readonly id: string;
      readonly name: string;
    } | null;
    readonly userErrors: ReadonlyArray<{
      readonly __typename: "LoginUserAuthenticationError";
      readonly message: string;
    } | {
      readonly __typename: "LoginUserInvalidInputError";
      readonly field: LoginUserInvalidInputField;
      readonly message: string;
    } | {
      // This will never be '%other', but we need some
      // value in case none of the concrete values match.
      readonly __typename: "%other";
    }>;
  };
};
export type UserLoginModal_LoginUserMutation = {
  response: UserLoginModal_LoginUserMutation$data;
  variables: UserLoginModal_LoginUserMutation$variables;
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
    "concreteType": "LoginUserPayload",
    "kind": "LinkedField",
    "name": "loginUser",
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
            "type": "LoginUserInvalidInputError",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v1/*: any*/)
            ],
            "type": "LoginUserAuthenticationError",
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
    "name": "UserLoginModal_LoginUserMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserLoginModal_LoginUserMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "2d4c0b982347afec9aed83adc590b3a7",
    "id": null,
    "metadata": {},
    "name": "UserLoginModal_LoginUserMutation",
    "operationKind": "mutation",
    "text": "mutation UserLoginModal_LoginUserMutation(\n  $input: LoginUserInput!\n) {\n  loginUser(input: $input) {\n    user {\n      id\n      name\n      avatar\n    }\n    userErrors {\n      __typename\n      ... on LoginUserInvalidInputError {\n        message\n        field\n      }\n      ... on LoginUserAuthenticationError {\n        message\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d1d9f6093bf9ddc4ae8d3e521040c4cd";

export default node;
