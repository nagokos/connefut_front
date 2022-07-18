/**
 * @generated SignedSource<<d9e647657ba5bf34924814805c0d1f5e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentStocked_recruitment$data = {
  readonly closingAt: string | null;
  readonly id: string;
  readonly title: string;
  readonly user: {
    readonly avatar: string;
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "RecruitmentStocked_recruitment";
};
export type RecruitmentStocked_recruitment$key = {
  readonly " $data"?: RecruitmentStocked_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentStocked_recruitment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecruitmentStocked_recruitment",
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "avatar",
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

(node as any).hash = "6e092ac7d862463fba1764abde1b5b75";

export default node;
