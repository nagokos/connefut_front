/**
 * @generated SignedSource<<acd09a1304c26e1b7f889b96b9530bd0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentStock_RemoveStockMutation$variables = {
  connections: ReadonlyArray<string>;
  recruitmentId: string;
};
export type RecruitmentStock_RemoveStockMutation$data = {
  readonly removeStock: {
    readonly removedRecruitmentId: string | null;
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
  "name": "removedRecruitmentId",
  "storageKey": null
};
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
          },
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
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "removedRecruitmentId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
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
    "cacheID": "5768e771e83e76d1794d69e6e7aa4651",
    "id": null,
    "metadata": {},
    "name": "RecruitmentStock_RemoveStockMutation",
    "operationKind": "mutation",
    "text": "mutation RecruitmentStock_RemoveStockMutation(\n  $recruitmentId: ID!\n) {\n  removeStock(recruitmentId: $recruitmentId) {\n    ...RecruitmentStock_feedbackStock\n    removedRecruitmentId\n    id\n  }\n}\n\nfragment RecruitmentStock_feedbackStock on FeedbackStock {\n  viewerDoesStock\n}\n"
  }
};
})();

(node as any).hash = "bcaa008c7fd95b8694858646003bd946";

export default node;
