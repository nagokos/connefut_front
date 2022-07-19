/**
 * @generated SignedSource<<50ae10f92d076e80abfa5fc90c346615>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentFormPrefecture_prefectures$data = ReadonlyArray<{
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "RecruitmentFormPrefecture_prefectures";
}>;
export type RecruitmentFormPrefecture_prefectures$key = ReadonlyArray<{
  readonly " $data"?: RecruitmentFormPrefecture_prefectures$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentFormPrefecture_prefectures">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "RecruitmentFormPrefecture_prefectures",
  "selections": [
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
  ],
  "type": "Prefecture",
  "abstractKey": null
};

(node as any).hash = "0b2c5c1a73fe1650e017ce33d4d674a8";

export default node;
