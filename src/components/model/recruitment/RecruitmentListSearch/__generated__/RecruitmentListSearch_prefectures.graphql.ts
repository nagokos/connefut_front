/**
 * @generated SignedSource<<0c01d11069e0f7b7fc5d6384f2015448>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentListSearch_prefectures$data = ReadonlyArray<{
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "RecruitmentListSearch_prefectures";
}>;
export type RecruitmentListSearch_prefectures$key = ReadonlyArray<{
  readonly " $data"?: RecruitmentListSearch_prefectures$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentListSearch_prefectures">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "RecruitmentListSearch_prefectures",
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

(node as any).hash = "cff5d157bc539e435eed583a9f8d440e";

export default node;
