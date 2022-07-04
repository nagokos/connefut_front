/**
 * @generated SignedSource<<593df99226ecac14f7cd5c4f37e16194>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeSearch_tags$data = ReadonlyArray<{
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchTag_tag"
    }
  ],
  "type": "Tag",
  "abstractKey": null
};

(node as any).hash = "635c5a7962b1ed49cec750e2bdfa714a";

export default node;
