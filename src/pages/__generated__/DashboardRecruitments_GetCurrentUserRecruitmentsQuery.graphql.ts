/**
 * @generated SignedSource<<afee5aac8408abe7239e4bc658f5aaf1>>
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
    "cacheID": "abe64c618e8c32eb94d7a09b111c6116",
    "id": null,
    "metadata": {},
    "name": "DashboardRecruitments_GetCurrentUserRecruitmentsQuery",
    "operationKind": "query",
    "text": "query DashboardRecruitments_GetCurrentUserRecruitmentsQuery {\n  getCurrentUserRecruitments {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "510efcf9efc38b7a993de2c061859d3c";

export default node;
