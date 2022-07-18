/**
 * @generated SignedSource<<4c9fa1190dee525f1cc2ba5dde225501>>
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
    "cacheID": "6f9cf47e9f5e20e855c20462cb59cc6a",
    "id": null,
    "metadata": {},
    "name": "RecruitmentStock_AddStockMutation",
    "operationKind": "mutation",
    "text": "mutation RecruitmentStock_AddStockMutation(\n  $recruitmentId: String!\n) {\n  addStock(recruitmentId: $recruitmentId) {\n    ...RecruitmentStock_feedbackStock\n    feedbackRecruitmentEdge {\n      node {\n        ...RecruitmentStocked_recruitment\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment RecruitmentStock_feedbackStock on FeedbackStock {\n  viewerDoesStock\n}\n\nfragment RecruitmentStocked_recruitment on Recruitment {\n  id\n  title\n  closingAt\n  user {\n    id\n    name\n    avatar\n  }\n}\n"
  }
};
})();

(node as any).hash = "ad8088ccfcdea83c9de5004681f2157f";

export default node;
