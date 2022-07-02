/**
 * @generated SignedSource<<e2bff31952ce50521f920736bf9b4c11>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Type = "INDIVIDUAL" | "JOINING" | "MEMBER" | "OPPONENT" | "OTHERS" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type RecruitmentCard_recruitment$data = {
  readonly closingAt: any | null;
  readonly competition: {
    readonly name: string;
  } | null;
  readonly id: string;
  readonly prefecture: {
    readonly name: string;
  } | null;
  readonly title: string;
  readonly type: Type;
  readonly user: {
    readonly avatar: string;
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "RecruitmentCard_recruitment";
};
export type RecruitmentCard_recruitment$key = {
  readonly " $data"?: RecruitmentCard_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentCard_recruitment">;
};

const node: ReaderFragment = (function(){
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
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecruitmentCard_recruitment",
  "selections": [
    (v0/*: any*/),
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
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
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
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Prefecture",
      "kind": "LinkedField",
      "name": "prefecture",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Recruitment",
  "abstractKey": null
};
})();

(node as any).hash = "9092702577ea6a0af3f15917e26182b9";

export default node;
