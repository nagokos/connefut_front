/**
 * @generated SignedSource<<c08325d0323accd6a76535d5318958ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DashboardRecruitments_currentUserRecruitmentsQuery$variables = {};
export type DashboardRecruitments_currentUserRecruitmentsQuery$data = {
  readonly currentUserRecruitments: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
  }>;
};
export type DashboardRecruitments_currentUserRecruitmentsQuery = {
  response: DashboardRecruitments_currentUserRecruitmentsQuery$data;
  variables: DashboardRecruitments_currentUserRecruitmentsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Recruitment",
    "kind": "LinkedField",
    "name": "currentUserRecruitments",
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
    "name": "DashboardRecruitments_currentUserRecruitmentsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DashboardRecruitments_currentUserRecruitmentsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9d02cde923878fd6b379a8b4d0016124",
    "id": null,
    "metadata": {},
    "name": "DashboardRecruitments_currentUserRecruitmentsQuery",
    "operationKind": "query",
    "text": "query DashboardRecruitments_currentUserRecruitmentsQuery {\n  currentUserRecruitments {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "55753201e8750d426275d7f06938b162";

export default node;
