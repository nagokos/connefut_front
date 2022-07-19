/**
 * @generated SignedSource<<72ffd6cd524fa8b99c2871a6bd38d24a>>
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
  prefectureId: string;
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
export type RecruitmentEditView_UpdateRecruitmentMutation$variables = {
  connections: ReadonlyArray<string>;
  id: string;
  input: RecruitmentInput;
};
export type RecruitmentEditView_UpdateRecruitmentMutation$data = {
  readonly updateRecruitment: {
    readonly deletedRecruitmentId: string | null;
    readonly feedbackRecruitmentEdge: {
      readonly cursor: string;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"RecruitmentCard_recruitment" | "RecruitmentForm_recruitment" | "RecruitmentSelfCreatedTrashModal_recruitment" | "RecruitmentSelfCreated_recruitment">;
      };
    };
  };
};
export type RecruitmentEditView_UpdateRecruitmentMutation = {
  response: RecruitmentEditView_UpdateRecruitmentMutation$data;
  variables: RecruitmentEditView_UpdateRecruitmentMutation$variables;
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
    "name": "id"
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
    "name": "id",
    "variableName": "id"
  },
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
  "name": "deletedRecruitmentId",
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
v7 = [
  {
    "kind": "Variable",
    "name": "connections",
    "variableName": "connections"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecruitmentEditView_UpdateRecruitmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateRecruitmentPayload",
        "kind": "LinkedField",
        "name": "updateRecruitment",
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
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "RecruitmentForm_recruitment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
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
    "name": "RecruitmentEditView_UpdateRecruitmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateRecruitmentPayload",
        "kind": "LinkedField",
        "name": "updateRecruitment",
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "detail",
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
                    "name": "venue",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "locationLat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "locationLng",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Tag",
                    "kind": "LinkedField",
                    "name": "tags",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
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
            "handleArgs": (v7/*: any*/)
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedRecruitmentId",
            "handleArgs": (v7/*: any*/)
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f6489bb5a06b5cdbafb892829b79b7b1",
    "id": null,
    "metadata": {},
    "name": "RecruitmentEditView_UpdateRecruitmentMutation",
    "operationKind": "mutation",
    "text": "mutation RecruitmentEditView_UpdateRecruitmentMutation(\n  $id: ID!\n  $input: RecruitmentInput!\n) {\n  updateRecruitment(id: $id, input: $input) {\n    feedbackRecruitmentEdge {\n      cursor\n      node {\n        ...RecruitmentSelfCreated_recruitment\n        ...RecruitmentSelfCreatedTrashModal_recruitment\n        ...RecruitmentCard_recruitment\n        ...RecruitmentForm_recruitment\n        id\n      }\n    }\n    deletedRecruitmentId\n  }\n}\n\nfragment RecruitmentCard_recruitment on Recruitment {\n  id\n  title\n  type\n  closingAt\n  publishedAt\n  user {\n    id\n    name\n    avatar\n  }\n  competition {\n    name\n    id\n  }\n  prefecture {\n    name\n    id\n  }\n}\n\nfragment RecruitmentForm_recruitment on Recruitment {\n  title\n  competition {\n    id\n  }\n  type\n  detail\n  startAt\n  closingAt\n  prefecture {\n    id\n  }\n  status\n  venue\n  locationLat\n  locationLng\n  tags {\n    id\n    name\n  }\n}\n\nfragment RecruitmentSelfCreatedTrashModal_recruitment on Recruitment {\n  id\n  title\n}\n\nfragment RecruitmentSelfCreated_recruitment on Recruitment {\n  id\n  title\n  status\n  createdAt\n  publishedAt\n  closingAt\n}\n"
  }
};
})();

(node as any).hash = "131ff3056b46ea47dd7f99b0dbb5c182";

export default node;
