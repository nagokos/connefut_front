/**
 * @generated SignedSource<<ad20d7757d9da7351bd15567451d42fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardRecruitments_CurrentUserRecruitmentsQuery$variables = {
  after?: string | null;
  first: number;
};
export type DashboardRecruitments_CurrentUserRecruitmentsQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentSelfCreatedList_recruitment">;
};
export type DashboardRecruitments_CurrentUserRecruitmentsQuery = {
  response: DashboardRecruitments_CurrentUserRecruitmentsQuery$data;
  variables: DashboardRecruitments_CurrentUserRecruitmentsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardRecruitments_CurrentUserRecruitmentsQuery",
    "selections": [
      {
        "args": (v2/*: any*/),
        "kind": "FragmentSpread",
        "name": "RecruitmentSelfCreatedList_recruitment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "DashboardRecruitments_CurrentUserRecruitmentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RecruitmentConnection",
        "kind": "LinkedField",
        "name": "currentUserRecruitments",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RecruitmentEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
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
                "concreteType": "Recruitment",
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
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "status",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "publishedAt",
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
                    "kind": "ScalarField",
                    "name": "__typename",
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
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
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
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RecruitmentSelfCreatedList__currentUserRecruitments",
        "kind": "LinkedHandle",
        "name": "currentUserRecruitments"
      }
    ]
  },
  "params": {
    "cacheID": "83e39c0983fc5933aa1ea5fbfd2b67a5",
    "id": null,
    "metadata": {},
    "name": "DashboardRecruitments_CurrentUserRecruitmentsQuery",
    "operationKind": "query",
    "text": "query DashboardRecruitments_CurrentUserRecruitmentsQuery(\n  $first: Int!\n  $after: String\n) {\n  ...RecruitmentSelfCreatedList_recruitment_2HEEH6\n}\n\nfragment RecruitmentSelfCreatedList_recruitment_2HEEH6 on Query {\n  currentUserRecruitments(first: $first, after: $after) {\n    edges {\n      cursor\n      node {\n        ...RecruitmentSelfCreated_recruitment\n        ...RecruitmentSelfCreatedTrashModal_recruitment\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment RecruitmentSelfCreatedTrashModal_recruitment on Recruitment {\n  id\n  title\n}\n\nfragment RecruitmentSelfCreated_recruitment on Recruitment {\n  id\n  title\n  status\n  createdAt\n  publishedAt\n  closingAt\n}\n"
  }
};
})();

(node as any).hash = "24a7aefec5894e36002ff49488e4de5d";

export default node;
