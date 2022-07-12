/**
 * @generated SignedSource<<5861196d37fc4db422d2af01ff9b41e2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentSelfCreatedTrashModal_recruitment$data = {
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "RecruitmentSelfCreatedTrashModal_recruitment";
};
export type RecruitmentSelfCreatedTrashModal_recruitment$key = {
  readonly " $data"?: RecruitmentSelfCreatedTrashModal_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentSelfCreatedTrashModal_recruitment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecruitmentSelfCreatedTrashModal_recruitment",
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
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Recruitment",
  "abstractKey": null
};

(node as any).hash = "8d7dbc7f3c46db599f4f1969b306ea5d";

export default node;
