/**
 * @generated SignedSource<<aeb2e3732e434415312c16bb3dbbf65f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentSearchTag_tag$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "RecruitmentSearchTag_tag";
};
export type RecruitmentSearchTag_tag$key = {
  readonly " $data"?: RecruitmentSearchTag_tag$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentSearchTag_tag">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecruitmentSearchTag_tag",
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

(node as any).hash = "fde529800af3f658d1aa5bd930cfac84";

export default node;
