/**
 * @generated SignedSource<<3f1cf2d8a259549f861e5bd15813e9a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type User_UserQuery$variables = {
  after?: string | null;
  first: number;
  id: string;
};
export type User_UserQuery$data = {
  readonly checkFollowed: {
    readonly " $fragmentSpreads": FragmentRefs<"UserFollow_feedbackFollow">;
  };
  readonly user: {
    readonly " $fragmentSpreads": FragmentRefs<"UserInformation_user" | "UserRecruitmentCardList_user">;
  };
};
export type User_UserQuery = {
  response: User_UserQuery$data;
  variables: User_UserQuery$variables;
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
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v4 = [
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
v5 = [
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "id"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "User_UserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserInformation_user"
          },
          {
            "args": (v4/*: any*/),
            "kind": "FragmentSpread",
            "name": "UserRecruitmentCardList_user"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "FeedbackFollow",
        "kind": "LinkedField",
        "name": "checkFollowed",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserFollow_feedbackFollow"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "User_UserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "avatar",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v4/*: any*/),
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
                      (v6/*: any*/),
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
                        "concreteType": "Competition",
                        "kind": "LinkedField",
                        "name": "competition",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          (v6/*: any*/)
                        ],
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
                        "name": "startAt",
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
            "args": (v4/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "UserRecruitmentCard__recruitments",
            "kind": "LinkedHandle",
            "name": "recruitments"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "FeedbackFollow",
        "kind": "LinkedField",
        "name": "checkFollowed",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "viewerDoesFollow",
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "14d0f8f9f835a822500004dfca0ea792",
    "id": null,
    "metadata": {},
    "name": "User_UserQuery",
    "operationKind": "query",
    "text": "query User_UserQuery(\n  $id: ID!\n  $first: Int!\n  $after: String\n) {\n  user(id: $id) {\n    ...UserInformation_user\n    ...UserRecruitmentCardList_user_2HEEH6\n    id\n  }\n  checkFollowed(userId: $id) {\n    ...UserFollow_feedbackFollow\n    id\n  }\n}\n\nfragment UserFollow_feedbackFollow on FeedbackFollow {\n  viewerDoesFollow\n}\n\nfragment UserInformation_user on User {\n  id\n  name\n  avatar\n}\n\nfragment UserRecruitmentCardList_user_2HEEH6 on User {\n  recruitments(first: $first, after: $after) {\n    edges {\n      cursor\n      node {\n        ...UserRecruitmentCard_recruitment\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment UserRecruitmentCard_recruitment on Recruitment {\n  id\n  title\n  type\n  competition {\n    name\n    id\n  }\n  closingAt\n  startAt\n}\n"
  }
};
})();

(node as any).hash = "a526124ff4882db4b358212465408f0c";

export default node;
