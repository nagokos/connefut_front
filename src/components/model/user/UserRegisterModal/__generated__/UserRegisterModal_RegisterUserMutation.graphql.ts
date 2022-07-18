/**
 * @generated SignedSource<<e0e326045e44b2576d51f9be0d3eb938>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RegisterUserInvalidInputField = "EMAIL" | "NAME" | "PASSWORD" | "%future added value";
export type RegisterUserInput = {
  email: string;
  name: string;
  password: string;
};
export type UserRegisterModal_RegisterUserMutation$variables = {
  input: RegisterUserInput;
};
export type UserRegisterModal_RegisterUserMutation$data = {
  readonly registerUser: {
    readonly userErrors: ReadonlyArray<{
      readonly __typename: "RegisterUserInvalidInputError";
      readonly field: RegisterUserInvalidInputField;
      readonly message: string;
    }>;
    readonly viewer: {
      readonly avatar: string;
      readonly id: string;
      readonly name: string;
    } | null;
  };
};
export type UserRegisterModal_RegisterUserMutation = {
  response: UserRegisterModal_RegisterUserMutation$data;
  variables: UserRegisterModal_RegisterUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RegisterUserPayload",
    "kind": "LinkedField",
    "name": "registerUser",
    "plural": false,
    "selections": [
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "RegisterUserInvalidInputError",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "message",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "field",
            "storageKey": null
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
    "name": "UserRegisterModal_RegisterUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserRegisterModal_RegisterUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5f087deccaba9ea54f74109991451813",
    "id": null,
    "metadata": {},
    "name": "UserRegisterModal_RegisterUserMutation",
    "operationKind": "mutation",
    "text": "mutation UserRegisterModal_RegisterUserMutation(\n  $input: RegisterUserInput!\n) {\n  registerUser(input: $input) {\n    viewer {\n      id\n      name\n      avatar\n    }\n    userErrors {\n      __typename\n      message\n      field\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ff01f235b0f5880130f9e76492e460d2";

export default node;
