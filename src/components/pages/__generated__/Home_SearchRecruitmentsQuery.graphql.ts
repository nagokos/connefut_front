/**
 * @generated SignedSource<<06e725fe2f2f5c1dc9b26b5cb49b57eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_SearchRecruitmentsQuery$variables = {
  after?: string | null;
  first: number;
};
export type Home_SearchRecruitmentsQuery$data = {
  readonly competitions: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentListSearch_competitions">;
  }>;
  readonly prefectures: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentListSearch_prefectures">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentCardList_recruitment" | "RecruitmentListSearch_tags">;
};
export type Home_SearchRecruitmentsQuery = {
  response: Home_SearchRecruitmentsQuery$data;
  variables: Home_SearchRecruitmentsQuery$variables;
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
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = [
  (v5/*: any*/),
  (v4/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
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
v9 = {
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
},
v10 = [
  (v4/*: any*/),
  (v5/*: any*/)
],
v11 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
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
    "name": "Home_SearchRecruitmentsQuery",
    "selections": [
      {
        "args": (v2/*: any*/),
        "kind": "FragmentSpread",
        "name": "RecruitmentCardList_recruitment"
      },
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
            "name": "RecruitmentListSearch_competitions"
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
            "name": "RecruitmentListSearch_prefectures"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RecruitmentListSearch_tags"
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
    "name": "Home_SearchRecruitmentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RecruitmentConnection",
        "kind": "LinkedField",
        "name": "recruitments",
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
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Recruitment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
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
                    "name": "type",
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
                    "name": "publishedAt",
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
                      (v4/*: any*/),
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "avatar",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Competition",
                    "kind": "LinkedField",
                    "name": "competition",
                    "plural": false,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Prefecture",
                    "kind": "LinkedField",
                    "name": "prefecture",
                    "plural": false,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v8/*: any*/),
          (v9/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RecruitmentCardList__recruitments",
        "kind": "LinkedHandle",
        "name": "recruitments"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Competition",
        "kind": "LinkedField",
        "name": "competitions",
        "plural": true,
        "selections": (v10/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Prefecture",
        "kind": "LinkedField",
        "name": "prefectures",
        "plural": true,
        "selections": (v10/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v11/*: any*/),
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
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Tag",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v8/*: any*/),
          (v9/*: any*/)
        ],
        "storageKey": "tags(first:2147483647)"
      },
      {
        "alias": null,
        "args": (v11/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RecruitmentListSearch__tags",
        "kind": "LinkedHandle",
        "name": "tags"
      }
    ]
  },
  "params": {
    "cacheID": "94db32aae732debed788d61412a649db",
    "id": null,
    "metadata": {},
    "name": "Home_SearchRecruitmentsQuery",
    "operationKind": "query",
    "text": "query Home_SearchRecruitmentsQuery(\n  $first: Int!\n  $after: String\n) {\n  ...RecruitmentCardList_recruitment_2HEEH6\n  competitions {\n    ...RecruitmentListSearch_competitions\n    id\n  }\n  prefectures {\n    ...RecruitmentListSearch_prefectures\n    id\n  }\n  ...RecruitmentListSearch_tags\n}\n\nfragment RecruitmentCardList_recruitment_2HEEH6 on Query {\n  recruitments(first: $first, after: $after) {\n    edges {\n      cursor\n      node {\n        ...RecruitmentCard_recruitment\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment RecruitmentCard_recruitment on Recruitment {\n  id\n  title\n  type\n  closingAt\n  publishedAt\n  user {\n    id\n    name\n    avatar\n  }\n  competition {\n    name\n    id\n  }\n  prefecture {\n    name\n    id\n  }\n}\n\nfragment RecruitmentListSearch_competitions on Competition {\n  id\n  name\n}\n\nfragment RecruitmentListSearch_prefectures on Prefecture {\n  id\n  name\n}\n\nfragment RecruitmentListSearch_tags on Query {\n  tags(first: 2147483647) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        ...RecruitmentSearchTag_tag\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment RecruitmentSearchTag_tag on Tag {\n  id\n  name\n}\n"
  }
};
})();

(node as any).hash = "fbbcc5e02aef834bb287c7a29f8b3760";

export default node;
