/**
 * @generated SignedSource<<70c0c9c1d02e5ace90affeae735f06e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentListSearch_tags$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentSearchTag_tag">;
  readonly " $fragmentType": "RecruitmentListSearch_tags";
}>;
export type RecruitmentListSearch_tags$key = ReadonlyArray<{
  readonly " $data"?: RecruitmentListSearch_tags$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentListSearch_tags">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "RecruitmentListSearch_tags",
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
      "name": "RecruitmentSearchTag_tag"
    }
  ],
  "type": "Tag",
  "abstractKey": null
};

(node as any).hash = "ea7cb5570d99fab6edb07268aa918a96";

export default node;
