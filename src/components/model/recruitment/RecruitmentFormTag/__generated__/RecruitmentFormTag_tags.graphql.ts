/**
 * @generated SignedSource<<52b2ed2567f15785038cd30d9b8c53b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentFormTag_tags$data = ReadonlyArray<{
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "RecruitmentFormTag_tags";
}>;
export type RecruitmentFormTag_tags$key = ReadonlyArray<{
  readonly " $data"?: RecruitmentFormTag_tags$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentFormTag_tags">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "RecruitmentFormTag_tags",
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

(node as any).hash = "c82d69fd8e97d34dc9c1d66f7d8177de";

export default node;
