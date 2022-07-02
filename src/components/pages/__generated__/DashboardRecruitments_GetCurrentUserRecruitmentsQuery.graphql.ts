/**
 * @generated SignedSource<<99c593e707f39209efe7cd4c04f4ca7f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DashboardRecruitments_GetCurrentUserRecruitmentsQuery$variables = {};
export type DashboardRecruitments_GetCurrentUserRecruitmentsQuery$data = {
  readonly getCurrentUserRecruitments: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
  }>;
};
export type DashboardRecruitments_GetCurrentUserRecruitmentsQuery = {
  response: DashboardRecruitments_GetCurrentUserRecruitmentsQuery$data;
  variables: DashboardRecruitments_GetCurrentUserRecruitmentsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Recruitment",
    "kind": "LinkedField",
    "name": "getCurrentUserRecruitments",
    "plural": true,
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
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardRecruitments_GetCurrentUserRecruitmentsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DashboardRecruitments_GetCurrentUserRecruitmentsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "77d288dac4079596c933ffe30cd9d959",
    "id": null,
    "metadata": {},
    "name": "DashboardRecruitments_GetCurrentUserRecruitmentsQuery",
    "operationKind": "query",
    "text": "query DashboardRecruitments_GetCurrentUserRecruitmentsQuery {\n  getCurrentUserRecruitments {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "502bcd9aab7d5f24d944ea5704d6b590";

export default node;
