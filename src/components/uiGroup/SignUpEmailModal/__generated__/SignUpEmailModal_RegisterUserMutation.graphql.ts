/**
 * @generated SignedSource<<d6ba60e2f31f8aa8f1cf42c3f2af1881>>
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
export type SignUpEmailModal_RegisterUserMutation$variables = {
  input: RegisterUserInput;
};
export type SignUpEmailModal_RegisterUserMutation$data = {
  readonly registerUser: {
    readonly user: {
      readonly avatar: string;
      readonly id: string;
      readonly name: string;
    } | null;
    readonly userErrors: ReadonlyArray<{
      readonly __typename: "RegisterUserInvalidInputError";
      readonly field: RegisterUserInvalidInputField;
      readonly message: string;
    }>;
  };
};
export type SignUpEmailModal_RegisterUserMutation = {
  response: SignUpEmailModal_RegisterUserMutation$data;
  variables: SignUpEmailModal_RegisterUserMutation$variables;
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
    "name": "SignUpEmailModal_RegisterUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignUpEmailModal_RegisterUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "60e8a826ba1ccf737fa7d106dda4f62f",
    "id": null,
    "metadata": {},
    "name": "SignUpEmailModal_RegisterUserMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpEmailModal_RegisterUserMutation(\n  $input: RegisterUserInput!\n) {\n  registerUser(input: $input) {\n    user {\n      id\n      name\n      avatar\n    }\n    userErrors {\n      __typename\n      message\n      field\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "90d7900f84d65d823c4ec810658bf500";

export default node;
