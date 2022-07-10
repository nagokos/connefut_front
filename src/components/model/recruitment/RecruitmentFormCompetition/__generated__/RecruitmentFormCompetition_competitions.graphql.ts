/**
 * @generated SignedSource<<1b224272dc807e8adeee0a5650bc4b01>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentFormCompetition_competitions$data = ReadonlyArray<{
  readonly databaseId: number;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "databaseId",
      "storageKey": null
    }
  ],
  "type": "Competition",
  "abstractKey": null
};

(node as any).hash = "4dbd6c7efff9160671990c605b1dfc18";

export default node;
