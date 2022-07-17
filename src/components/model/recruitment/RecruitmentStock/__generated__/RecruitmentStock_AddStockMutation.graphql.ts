/**
 * @generated SignedSource<<277c6f3c1d95121b3a15cf1c7fd325a0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentStock_AddStockMutation$variables = {
  recruitmentId: string;
};
export type RecruitmentStock_AddStockMutation$data = {
  readonly addStock: {
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
    "name": "recruitmentId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "recruitmentId",
    "variableName": "recruitmentId"
  }
];
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
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1e2948f46058a0a00bea53e1cc836c7b",
    "id": null,
    "metadata": {},
    "name": "RecruitmentStock_AddStockMutation",
    "operationKind": "mutation",
    "text": "mutation RecruitmentStock_AddStockMutation(\n  $recruitmentId: String!\n) {\n  addStock(recruitmentId: $recruitmentId) {\n    ...RecruitmentStock_feedbackStock\n    id\n  }\n}\n\nfragment RecruitmentStock_feedbackStock on FeedbackStock {\n  viewerDoesStock\n}\n"
  }
};
})();

(node as any).hash = "200f05ce30a33716fc8426e406f250e3";

export default node;
