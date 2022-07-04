/**
 * @generated SignedSource<<23edadc4ef39e2f76f72f718f9a996a9>>
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
export type LoginEmailModal_LoginUserMutation$variables = {
  input: LoginUserInput;
};
export type LoginEmailModal_LoginUserMutation$data = {
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
export type LoginEmailModal_LoginUserMutation = {
  response: LoginEmailModal_LoginUserMutation$data;
  variables: LoginEmailModal_LoginUserMutation$variables;
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
    "name": "LoginEmailModal_LoginUserMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginEmailModal_LoginUserMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ae720afa4edc308fe027267f92a52cc0",
    "id": null,
    "metadata": {},
    "name": "LoginEmailModal_LoginUserMutation",
    "operationKind": "mutation",
    "text": "mutation LoginEmailModal_LoginUserMutation(\n  $input: LoginUserInput!\n) {\n  loginUser(input: $input) {\n    user {\n      id\n      name\n      avatar\n    }\n    userErrors {\n      __typename\n      ... on LoginUserInvalidInputError {\n        message\n        field\n      }\n      ... on LoginUserAuthenticationError {\n        message\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8dfb232bd7cb0907aab678be93855048";

export default node;
