/**
 * @generated SignedSource<<a1cfcd17e624d474d23d45e3ed7689c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentLocationModal_recruitment$data = {
  readonly locationLat: number | null;
  readonly locationLng: number | null;
  readonly " $fragmentType": "RecruitmentLocationModal_recruitment";
};
export type RecruitmentLocationModal_recruitment$key = {
  readonly " $data"?: RecruitmentLocationModal_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentLocationModal_recruitment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecruitmentLocationModal_recruitment",
  "selections": [
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
    }
  ],
  "type": "Recruitment",
  "abstractKey": null
};

(node as any).hash = "5ece2dd63e0bd35e3537984a4429866f";

export default node;
