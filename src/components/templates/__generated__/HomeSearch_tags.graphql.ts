/**
 * @generated SignedSource<<beea62dbc2004b6ca143f2246a3557f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeSearch_tags$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"SearchTag_tag">;
  readonly " $fragmentType": "HomeSearch_tags";
}>;
export type HomeSearch_tags$key = ReadonlyArray<{
  readonly " $data"?: HomeSearch_tags$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomeSearch_tags">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "HomeSearch_tags",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchTag_tag"
    }
  ],
  "type": "Tag",
  "abstractKey": null
};

(node as any).hash = "3af7ddc10a32830a572326c588693f79";

export default node;
