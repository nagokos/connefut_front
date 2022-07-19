/**
 * @generated SignedSource<<ae7efc8d7027ead255a2f7924ac66637>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentStock_AddStockMutation$variables = {
  connections: ReadonlyArray<string>;
  recruitmentId: string;
};
export type RecruitmentStock_AddStockMutation$data = {
  readonly addStock: {
    readonly feedbackRecruitmentEdge: {
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"RecruitmentStocked_recruitment">;
      };
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentStock_feedbackStock">;
  };
};
export type RecruitmentStock_AddStockMutation = {
  response: RecruitmentStock_AddStockMutation$data;
  variables: RecruitmentStock_AddStockMutation$variables;
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
    "name": "recruitmentId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "recruitmentId",
    "variableName": "recruitmentId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecruitmentStock_AddStockMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FeedbackStock",
        "kind": "LinkedField",
        "name": "addStock",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecruitmentStock_feedbackStock"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "RecruitmentEdge",
            "kind": "LinkedField",
            "name": "feedbackRecruitmentEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Recruitment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "RecruitmentStocked_recruitment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
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
    "name": "RecruitmentStock_AddStockMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FeedbackStock",
        "kind": "LinkedField",
        "name": "addStock",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "viewerDoesStock",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "RecruitmentEdge",
            "kind": "LinkedField",
            "name": "feedbackRecruitmentEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Recruitment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "closingAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
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
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "feedbackRecruitmentEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a53f70ab09cadcbd813f26ee1fe98da1",
    "id": null,
    "metadata": {},
    "name": "RecruitmentStock_AddStockMutation",
    "operationKind": "mutation",
    "text": "mutation RecruitmentStock_AddStockMutation(\n  $recruitmentId: ID!\n) {\n  addStock(recruitmentId: $recruitmentId) {\n    ...RecruitmentStock_feedbackStock\n    feedbackRecruitmentEdge {\n      node {\n        ...RecruitmentStocked_recruitment\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment RecruitmentStock_feedbackStock on FeedbackStock {\n  viewerDoesStock\n}\n\nfragment RecruitmentStocked_recruitment on Recruitment {\n  id\n  title\n  closingAt\n  user {\n    id\n    name\n    avatar\n  }\n}\n"
  }
};
})();

(node as any).hash = "8d3a3017a5206e44657063f06565d1f5";

export default node;
