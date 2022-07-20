/**
 * @generated SignedSource<<bcdb09ba291b75b8159d721a7d903549>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateTagInput = {
  name: string;
};
export type RecruitmentFormTag_CreateTagMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateTagInput;
};
export type RecruitmentFormTag_CreateTagMutation$data = {
  readonly createTag: {
    readonly feedbackTagEdge: {
      readonly cursor: string;
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    };
  };
};
export type RecruitmentFormTag_CreateTagMutation = {
  response: RecruitmentFormTag_CreateTagMutation$data;
  variables: RecruitmentFormTag_CreateTagMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "TagEdge",
  "kind": "LinkedField",
  "name": "feedbackTagEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Tag",
      "kind": "LinkedField",
      "name": "node",
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
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecruitmentFormTag_CreateTagMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTagPayload",
        "kind": "LinkedField",
        "name": "createTag",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RecruitmentFormTag_CreateTagMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTagPayload",
        "kind": "LinkedField",
        "name": "createTag",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "feedbackTagEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "23a708553a6f73c354b1436dd7e78f50",
    "id": null,
    "metadata": {},
    "name": "RecruitmentFormTag_CreateTagMutation",
    "operationKind": "mutation",
    "text": "mutation RecruitmentFormTag_CreateTagMutation(\n  $input: CreateTagInput!\n) {\n  createTag(input: $input) {\n    feedbackTagEdge {\n      cursor\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5558f3a84af617003d159c321d4954ce";

export default node;
