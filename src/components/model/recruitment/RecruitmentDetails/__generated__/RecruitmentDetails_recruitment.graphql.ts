/**
 * @generated SignedSource<<9a9ab91cce121b27a93f46029a232df1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Type = "JOIN" | "MEMBER" | "OPPONENT" | "OTHER" | "PERSONAL" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type RecruitmentDetails_recruitment$data = {
  readonly closingAt: string | null;
  readonly competition: {
    readonly name: string;
  };
  readonly detail: string | null;
  readonly locationLat: number | null;
  readonly locationLng: number | null;
  readonly prefecture: {
    readonly name: string;
  } | null;
  readonly startAt: string | null;
  readonly title: string;
  readonly type: Type;
  readonly user: {
    readonly avatar: string;
    readonly name: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentLocationModal_recruitment">;
  readonly " $fragmentType": "RecruitmentDetails_recruitment";
};
export type RecruitmentDetails_recruitment$key = {
  readonly " $data"?: RecruitmentDetails_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentDetails_recruitment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecruitmentDetails_recruitment",
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
      "selections": (v1/*: any*/),
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
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "RecruitmentLocationModal_recruitment"
    }
  ],
  "type": "Recruitment",
  "abstractKey": null
};
})();

(node as any).hash = "43bcc1ec4f81046b4dd4ff83a7cf4ff2";

export default node;
