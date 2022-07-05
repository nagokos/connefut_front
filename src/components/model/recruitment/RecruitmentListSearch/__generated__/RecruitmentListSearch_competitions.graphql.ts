/**
 * @generated SignedSource<<cd1971a2b8ff9b85b50a12e8d64662b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentListSearch_competitions$data = ReadonlyArray<{
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "RecruitmentListSearch_competitions";
}>;
export type RecruitmentListSearch_competitions$key = ReadonlyArray<{
  readonly " $data"?: RecruitmentListSearch_competitions$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentListSearch_competitions">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "RecruitmentListSearch_competitions",
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
  "type": "Competition",
  "abstractKey": null
};

(node as any).hash = "a35345b3cda554eb2f7b40ecd4f025aa";

export default node;
