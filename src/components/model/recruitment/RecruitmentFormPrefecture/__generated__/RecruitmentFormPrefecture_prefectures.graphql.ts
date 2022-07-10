/**
 * @generated SignedSource<<63d6c1ed5032e6905bfb0a45d0a7a6dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentFormPrefecture_prefectures$data = ReadonlyArray<{
  readonly databaseId: number;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "databaseId",
      "storageKey": null
    }
  ],
  "type": "Prefecture",
  "abstractKey": null
};

(node as any).hash = "033440275601cd8566d4d699b22663d0";

export default node;
