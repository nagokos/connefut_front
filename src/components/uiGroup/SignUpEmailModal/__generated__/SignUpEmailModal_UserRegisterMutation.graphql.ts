/**
 * @generated SignedSource<<511b078eb5f2d457438de38b235ac9ca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserRegisterInvalidInputField = "EMAIL" | "NAME" | "PASSWORD" | "%future added value";
export type UserRegisterInput = {
  email: string;
  name: string;
  password: string;
};
export type SignUpEmailModal_UserRegisterMutation$variables = {
  input: UserRegisterInput;
};
export type SignUpEmailModal_UserRegisterMutation$data = {
  readonly userRegister: {
    readonly user: {
      readonly avatar: string;
      readonly id: string;
      readonly name: string;
    } | null;
    readonly userErrors: ReadonlyArray<{
      readonly __typename: "UserRegisterInvalidInputError";
      readonly field: UserRegisterInvalidInputField;
      readonly message: string;
    }>;
  };
};
export type SignUpEmailModal_UserRegisterMutation = {
  response: SignUpEmailModal_UserRegisterMutation$data;
  variables: SignUpEmailModal_UserRegisterMutation$variables;
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
    "concreteType": "UserRegisterPayload",
    "kind": "LinkedField",
    "name": "userRegister",
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
        "concreteType": "UserRegisterInvalidInputError",
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
    "name": "SignUpEmailModal_UserRegisterMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignUpEmailModal_UserRegisterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dbe2620f30153e4915acc00faac28115",
    "id": null,
    "metadata": {},
    "name": "SignUpEmailModal_UserRegisterMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpEmailModal_UserRegisterMutation(\n  $input: UserRegisterInput!\n) {\n  userRegister(input: $input) {\n    user {\n      id\n      name\n      avatar\n    }\n    userErrors {\n      __typename\n      message\n      field\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ca74e89a5afc49c7e86ac2cb24c6f410";

export default node;
