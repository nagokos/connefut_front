/**
 * @generated SignedSource<<743cb001f994b82e8940229fc1c611ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Status = "CLOSED" | "DRAFT" | "PUBLISHED" | "%future added value";
export type Type = "JOIN" | "MEMBER" | "OPPONENT" | "OTHER" | "PERSONAL" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type RecruitmentForm_recruitment$data = {
  readonly closingAt: string | null;
  readonly competition: {
    readonly id: string;
  };
  readonly detail: string | null;
  readonly locationLat: number | null;
  readonly locationLng: number | null;
  readonly prefecture: {
    readonly id: string;
  };
  readonly startAt: string | null;
  readonly status: Status;
  readonly tags: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  } | null>;
  readonly title: string;
  readonly type: Type;
  readonly venue: string | null;
  readonly " $fragmentType": "RecruitmentForm_recruitment";
};
export type RecruitmentForm_recruitment$key = {
  readonly " $data"?: RecruitmentForm_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentForm_recruitment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecruitmentForm_recruitment",
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
      "selections": (v1/*: any*/),
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
      "selections": (v1/*: any*/),
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
    {
      "alias": null,
      "args": null,
      "concreteType": "Tag",
      "kind": "LinkedField",
      "name": "tags",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Recruitment",
  "abstractKey": null
};
})();

(node as any).hash = "fe5c98297f972cb1d0485732adde59ea";

export default node;
