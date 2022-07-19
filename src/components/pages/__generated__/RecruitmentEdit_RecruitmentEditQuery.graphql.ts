/**
 * @generated SignedSource<<acf5c3504e39041da35638ab725cf4ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentEdit_RecruitmentEditQuery$variables = {
  id: string;
};
export type RecruitmentEdit_RecruitmentEditQuery$data = {
  readonly competitions: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentFormCompetition_competitions">;
  }>;
  readonly prefectures: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentFormPrefecture_prefectures">;
  }>;
  readonly recruitment: {
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentForm_recruitment">;
  };
  readonly tags: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentFormTag_tags">;
  }>;
};
export type RecruitmentEdit_RecruitmentEditQuery = {
  response: RecruitmentEdit_RecruitmentEditQuery$data;
  variables: RecruitmentEdit_RecruitmentEditQuery$variables;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Tag",
  "kind": "LinkedField",
  "name": "tags",
  "plural": true,
  "selections": (v4/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecruitmentEdit_RecruitmentEditQuery",
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
            "name": "RecruitmentForm_recruitment"
          }
        ],
        "storageKey": null
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
        "alias": null,
        "args": null,
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "tags",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecruitmentFormTag_tags"
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
    "name": "RecruitmentEdit_RecruitmentEditQuery",
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
            "concreteType": "Competition",
            "kind": "LinkedField",
            "name": "competition",
            "plural": false,
            "selections": (v3/*: any*/),
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
            "name": "closingAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Prefecture",
            "kind": "LinkedField",
            "name": "prefecture",
            "plural": false,
            "selections": (v3/*: any*/),
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
          (v5/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Competition",
        "kind": "LinkedField",
        "name": "competitions",
        "plural": true,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Prefecture",
        "kind": "LinkedField",
        "name": "prefectures",
        "plural": true,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      (v5/*: any*/)
    ]
  },
  "params": {
    "cacheID": "38a383970867e1f4c53b016555de19da",
    "id": null,
    "metadata": {},
    "name": "RecruitmentEdit_RecruitmentEditQuery",
    "operationKind": "query",
    "text": "query RecruitmentEdit_RecruitmentEditQuery(\n  $id: ID!\n) {\n  recruitment(id: $id) {\n    ...RecruitmentForm_recruitment\n    id\n  }\n  competitions {\n    ...RecruitmentFormCompetition_competitions\n    id\n  }\n  prefectures {\n    ...RecruitmentFormPrefecture_prefectures\n    id\n  }\n  tags {\n    ...RecruitmentFormTag_tags\n    id\n  }\n}\n\nfragment RecruitmentFormCompetition_competitions on Competition {\n  id\n  name\n}\n\nfragment RecruitmentFormPrefecture_prefectures on Prefecture {\n  id\n  name\n}\n\nfragment RecruitmentFormTag_tags on Tag {\n  id\n  name\n}\n\nfragment RecruitmentForm_recruitment on Recruitment {\n  title\n  competition {\n    id\n  }\n  type\n  detail\n  startAt\n  closingAt\n  prefecture {\n    id\n  }\n  status\n  venue\n  locationLat\n  locationLng\n  tags {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "723477e9f36154ab088719482d4df678";

export default node;
