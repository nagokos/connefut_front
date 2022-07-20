/**
 * @generated SignedSource<<e63c6bfdf9d383e5d8df371a5220f74a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentNew_RecruitmentNewQuery$variables = {};
export type RecruitmentNew_RecruitmentNewQuery$data = {
  readonly competitions: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentFormCompetition_competitions">;
  }>;
  readonly prefectures: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentFormPrefecture_prefectures">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentFormTag_tags">;
};
export type RecruitmentNew_RecruitmentNewQuery = {
  response: RecruitmentNew_RecruitmentNewQuery$data;
  variables: RecruitmentNew_RecruitmentNewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RecruitmentNew_RecruitmentNewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Competition",
        "kind": "LinkedField",
        "name": "competitions",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecruitmentFormCompetition_competitions"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Prefecture",
        "kind": "LinkedField",
        "name": "prefectures",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecruitmentFormPrefecture_prefectures"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RecruitmentFormTag_tags"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RecruitmentNew_RecruitmentNewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Competition",
        "kind": "LinkedField",
        "name": "competitions",
        "plural": true,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Prefecture",
        "kind": "LinkedField",
        "name": "prefectures",
        "plural": true,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "TagConnection",
        "kind": "LinkedField",
        "name": "tags",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TagEdge",
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
                "concreteType": "Tag",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
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
        "storageKey": "tags(first:2147483647)"
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RecruitmentFormTag__tags",
        "kind": "LinkedHandle",
        "name": "tags"
      }
    ]
  },
  "params": {
    "cacheID": "4f7ed768e72a11b6b8491618177d0c38",
    "id": null,
    "metadata": {},
    "name": "RecruitmentNew_RecruitmentNewQuery",
    "operationKind": "query",
    "text": "query RecruitmentNew_RecruitmentNewQuery {\n  competitions {\n    ...RecruitmentFormCompetition_competitions\n    id\n  }\n  prefectures {\n    ...RecruitmentFormPrefecture_prefectures\n    id\n  }\n  ...RecruitmentFormTag_tags\n}\n\nfragment RecruitmentFormCompetition_competitions on Competition {\n  id\n  name\n}\n\nfragment RecruitmentFormPrefecture_prefectures on Prefecture {\n  id\n  name\n}\n\nfragment RecruitmentFormTag_tags on Query {\n  tags(first: 2147483647) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "aeb8d5f495785ed02bd243df32cfdbb2";

export default node;
