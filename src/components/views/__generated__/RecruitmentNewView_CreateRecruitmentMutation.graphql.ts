/**
 * @generated SignedSource<<455e342b115bdc94ed5de6d5568d05be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Status = "CLOSED" | "DRAFT" | "PUBLISHED" | "%future added value";
export type Type = "JOIN" | "MEMBER" | "OPPONENT" | "OTHER" | "PERSONAL" | "%future added value";
export type RecruitmentInput = {
  closingAt?: string | null;
  competitionId: string;
  detail?: string | null;
  locationLat?: number | null;
  locationLng?: number | null;
  prefectureId?: string | null;
  startAt?: string | null;
  status: Status;
  tags: ReadonlyArray<recruitmentTagInput | null>;
  title: string;
  type: Type;
  venue?: string | null;
};
export type recruitmentTagInput = {
  id: string;
  isNew: boolean;
  name: string;
};
export type RecruitmentNewView_CreateRecruitmentMutation$variables = {
  connections: ReadonlyArray<string>;
  input: RecruitmentInput;
};
export type RecruitmentNewView_CreateRecruitmentMutation$data = {
  readonly createRecruitment: {
    readonly feedbackRecruitmentEdge: {
      readonly cursor: string;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"RecruitmentCard_recruitment" | "RecruitmentSelfCreatedTrashModal_recruitment" | "RecruitmentSelfCreated_recruitment">;
      };
    };
  };
};
export type RecruitmentNewView_CreateRecruitmentMutation = {
  response: RecruitmentNewView_CreateRecruitmentMutation$data;
  variables: RecruitmentNewView_CreateRecruitmentMutation$variables;
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
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  (v4/*: any*/),
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecruitmentNewView_CreateRecruitmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RecruitmentPayload",
        "kind": "LinkedField",
        "name": "createRecruitment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RecruitmentEdge",
            "kind": "LinkedField",
            "name": "feedbackRecruitmentEdge",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Recruitment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "RecruitmentSelfCreated_recruitment"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "RecruitmentSelfCreatedTrashModal_recruitment"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "RecruitmentCard_recruitment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
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
    "name": "RecruitmentNewView_CreateRecruitmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RecruitmentPayload",
        "kind": "LinkedField",
        "name": "createRecruitment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RecruitmentEdge",
            "kind": "LinkedField",
            "name": "feedbackRecruitmentEdge",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Recruitment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
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
                    "name": "type",
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
                      (v3/*: any*/),
                      (v4/*: any*/),
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
                    "selections": (v5/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Prefecture",
                    "kind": "LinkedField",
                    "name": "prefecture",
                    "plural": false,
                    "selections": (v5/*: any*/),
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
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "feedbackRecruitmentEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3dfd0d874ae55bdb8170e0545bb6eb64",
    "id": null,
    "metadata": {},
    "name": "RecruitmentNewView_CreateRecruitmentMutation",
    "operationKind": "mutation",
    "text": "mutation RecruitmentNewView_CreateRecruitmentMutation(\n  $input: RecruitmentInput!\n) {\n  createRecruitment(input: $input) {\n    feedbackRecruitmentEdge {\n      cursor\n      node {\n        ...RecruitmentSelfCreated_recruitment\n        ...RecruitmentSelfCreatedTrashModal_recruitment\n        ...RecruitmentCard_recruitment\n        id\n      }\n    }\n  }\n}\n\nfragment RecruitmentCard_recruitment on Recruitment {\n  id\n  title\n  type\n  closingAt\n  publishedAt\n  user {\n    id\n    name\n    avatar\n  }\n  competition {\n    name\n    id\n  }\n  prefecture {\n    name\n    id\n  }\n}\n\nfragment RecruitmentSelfCreatedTrashModal_recruitment on Recruitment {\n  id\n  title\n}\n\nfragment RecruitmentSelfCreated_recruitment on Recruitment {\n  id\n  title\n  status\n  createdAt\n  publishedAt\n  closingAt\n}\n"
  }
};
})();

(node as any).hash = "6cf5538e791799b2aafb4e421655b0e5";

export default node;
