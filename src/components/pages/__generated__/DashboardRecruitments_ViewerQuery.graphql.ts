/**
 * @generated SignedSource<<dfc8bc9cad8faa2ee4110ab32024210f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardRecruitments_ViewerQuery$variables = {
  after?: string | null;
  first: number;
};
export type DashboardRecruitments_ViewerQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentSelfCreatedList_recruitment">;
};
export type DashboardRecruitments_ViewerQuery = {
  response: DashboardRecruitments_ViewerQuery$data;
  variables: DashboardRecruitments_ViewerQuery$variables;
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
    "name": "DashboardRecruitments_ViewerQuery",
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
    "name": "DashboardRecruitments_ViewerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RecruitmentConnection",
        "kind": "LinkedField",
        "name": "viewerRecruitments",
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
          },
          {
            "kind": "ClientExtension",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__id",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RecruitmentSelfCreatedList__viewerRecruitments",
        "kind": "LinkedHandle",
        "name": "viewerRecruitments"
      }
    ]
  },
  "params": {
    "cacheID": "9d78d8d119b6e3d7bf7114399027bc0e",
    "id": null,
    "metadata": {},
    "name": "DashboardRecruitments_ViewerQuery",
    "operationKind": "query",
    "text": "query DashboardRecruitments_ViewerQuery(\n  $first: Int!\n  $after: String\n) {\n  ...RecruitmentSelfCreatedList_recruitment_2HEEH6\n}\n\nfragment RecruitmentSelfCreatedList_recruitment_2HEEH6 on Query {\n  viewerRecruitments(first: $first, after: $after) {\n    edges {\n      cursor\n      node {\n        ...RecruitmentSelfCreated_recruitment\n        ...RecruitmentSelfCreatedTrashModal_recruitment\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment RecruitmentSelfCreatedTrashModal_recruitment on Recruitment {\n  id\n  title\n}\n\nfragment RecruitmentSelfCreated_recruitment on Recruitment {\n  id\n  title\n  status\n  createdAt\n  publishedAt\n  closingAt\n}\n"
  }
};
})();

(node as any).hash = "c040fc721972d1849835aaa397ff5a89";

export default node;
