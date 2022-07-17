/**
 * @generated SignedSource<<09db74cd8e907890c6b5f9d27c0ce0e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentStock_RemoveStockMutation$variables = {
  recruitmentId: string;
};
export type RecruitmentStock_RemoveStockMutation$data = {
  readonly removeStock: {
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentStock_feedbackStock">;
  };
};
export type RecruitmentStock_RemoveStockMutation = {
  response: RecruitmentStock_RemoveStockMutation$data;
  variables: RecruitmentStock_RemoveStockMutation$variables;
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
    "name": "RecruitmentStock_RemoveStockMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FeedbackStock",
        "kind": "LinkedField",
        "name": "removeStock",
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
    "name": "RecruitmentStock_RemoveStockMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FeedbackStock",
        "kind": "LinkedField",
        "name": "removeStock",
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
    "cacheID": "ce304c7255f145a799dcbd68a51e2a56",
    "id": null,
    "metadata": {},
    "name": "RecruitmentStock_RemoveStockMutation",
    "operationKind": "mutation",
    "text": "mutation RecruitmentStock_RemoveStockMutation(\n  $recruitmentId: String!\n) {\n  removeStock(recruitmentId: $recruitmentId) {\n    ...RecruitmentStock_feedbackStock\n    id\n  }\n}\n\nfragment RecruitmentStock_feedbackStock on FeedbackStock {\n  viewerDoesStock\n}\n"
  }
};
})();

(node as any).hash = "86f0b2cfcc4accaac27fdd32bd0b0193";

export default node;
