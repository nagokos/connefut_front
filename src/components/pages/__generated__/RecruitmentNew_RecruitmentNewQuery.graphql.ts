/**
 * @generated SignedSource<<a73f406853b1812be171b11675b542b2>>
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
  readonly tags: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"RecruitmentFormTag_tags">;
  }>;
};
export type RecruitmentNew_RecruitmentNewQuery = {
  response: RecruitmentNew_RecruitmentNewQuery$data;
  variables: RecruitmentNew_RecruitmentNewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
    "name": "name",
    "storageKey": null
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
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Prefecture",
        "kind": "LinkedField",
        "name": "prefectures",
        "plural": true,
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "tags",
        "plural": true,
        "selections": (v0/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e758b8df9ae285e1b41fc4129cce6dba",
    "id": null,
    "metadata": {},
    "name": "RecruitmentNew_RecruitmentNewQuery",
    "operationKind": "query",
    "text": "query RecruitmentNew_RecruitmentNewQuery {\n  competitions {\n    ...RecruitmentFormCompetition_competitions\n    id\n  }\n  prefectures {\n    ...RecruitmentFormPrefecture_prefectures\n    id\n  }\n  tags {\n    ...RecruitmentFormTag_tags\n    id\n  }\n}\n\nfragment RecruitmentFormCompetition_competitions on Competition {\n  id\n  name\n}\n\nfragment RecruitmentFormPrefecture_prefectures on Prefecture {\n  id\n  name\n}\n\nfragment RecruitmentFormTag_tags on Tag {\n  id\n  name\n}\n"
  }
};
})();

(node as any).hash = "bc310b8b360429139001e8df29467835";

export default node;
