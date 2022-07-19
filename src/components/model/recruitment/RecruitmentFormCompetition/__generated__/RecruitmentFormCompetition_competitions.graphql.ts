/**
 * @generated SignedSource<<c19eb56b77533ceca3553f72b9628965>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentFormCompetition_competitions$data = ReadonlyArray<{
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "RecruitmentFormCompetition_competitions";
}>;
export type RecruitmentFormCompetition_competitions$key = ReadonlyArray<{
  readonly " $data"?: RecruitmentFormCompetition_competitions$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentFormCompetition_competitions">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "RecruitmentFormCompetition_competitions",
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

(node as any).hash = "1f09f2a3fd3adab54f59125f1a99aa13";

export default node;
