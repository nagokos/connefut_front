/**
 * @generated SignedSource<<59292b09b61d23aeb013243251b3480d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchTag_tag$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "SearchTag_tag";
};
export type SearchTag_tag$key = {
  readonly " $data"?: SearchTag_tag$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchTag_tag">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchTag_tag",
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
  "type": "Tag",
  "abstractKey": null
};

(node as any).hash = "db1427631686061a2aae25718385dc80";

export default node;
