/**
 * @generated SignedSource<<8c1960cf3a6ae3d66ef859767b6e8f7a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Recruitment_RecruitmentQuery$variables = {
  id: string;
};
export type Recruitment_RecruitmentQuery$data = {
  readonly checkStocked: {
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentStock_feedbackStock">;
  };
  readonly recruitment: {
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentApply_recruitment" | "RecruitmentDetails_recruitment" | "RecruitmentTagList_recruitment">;
  };
};
export type Recruitment_RecruitmentQuery = {
  response: Recruitment_RecruitmentQuery$data;
  variables: Recruitment_RecruitmentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "recruitmentId",
    "variableName": "id"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v3/*: any*/),
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Recruitment_RecruitmentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Recruitment",
        "kind": "LinkedField",
        "name": "recruitment",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecruitmentDetails_recruitment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecruitmentTagList_recruitment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecruitmentApply_recruitment"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "FeedbackStock",
        "kind": "LinkedField",
        "name": "checkStocked",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecruitmentStock_feedbackStock"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Recruitment_RecruitmentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Recruitment",
        "kind": "LinkedField",
        "name": "recruitment",
        "plural": false,
        "selections": [
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
            "kind": "ScalarField",
            "name": "detail",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "avatar",
                "storageKey": null
              },
              (v4/*: any*/)
            ],
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
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "FeedbackStock",
        "kind": "LinkedField",
        "name": "checkStocked",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "viewerDoesStock",
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "148b8306f3f6559cfd0b23001a84b025",
    "id": null,
    "metadata": {},
    "name": "Recruitment_RecruitmentQuery",
    "operationKind": "query",
    "text": "query Recruitment_RecruitmentQuery(\n  $id: String!\n) {\n  recruitment(id: $id) {\n    ...RecruitmentDetails_recruitment\n    ...RecruitmentTagList_recruitment\n    ...RecruitmentApply_recruitment\n    id\n  }\n  checkStocked(recruitmentId: $id) {\n    ...RecruitmentStock_feedbackStock\n    id\n  }\n}\n\nfragment RecruitmentApply_recruitment on Recruitment {\n  user {\n    id\n  }\n  closingAt\n}\n\nfragment RecruitmentDetails_recruitment on Recruitment {\n  title\n  closingAt\n  startAt\n  venue\n  locationLat\n  locationLng\n  detail\n  type\n  competition {\n    name\n    id\n  }\n  prefecture {\n    name\n    id\n  }\n  user {\n    name\n    avatar\n    id\n  }\n  ...RecruitmentLocationModal_recruitment\n}\n\nfragment RecruitmentLocationModal_recruitment on Recruitment {\n  locationLat\n  locationLng\n}\n\nfragment RecruitmentStock_feedbackStock on FeedbackStock {\n  viewerDoesStock\n}\n\nfragment RecruitmentTagList_recruitment on Recruitment {\n  type\n  competition {\n    name\n    id\n  }\n  tags {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "abbbbf55abaa40048ad844d67312b900";

export default node;
