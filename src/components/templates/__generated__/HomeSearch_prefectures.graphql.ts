/**
 * @generated SignedSource<<364ec8702a2ad159739c1a30037d8bef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeSearch_prefectures$data = ReadonlyArray<{
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "HomeSearch_prefectures";
}>;
export type HomeSearch_prefectures$key = ReadonlyArray<{
  readonly " $data"?: HomeSearch_prefectures$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomeSearch_prefectures">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "HomeSearch_prefectures",
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

(node as any).hash = "eb04cb9ec13394f26a26a69f52ec7402";

export default node;
