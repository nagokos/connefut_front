/**
 * @generated SignedSource<<7afb89dedd65362543ee52762ed23a5d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeSearch_competitions$data = ReadonlyArray<{
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "HomeSearch_competitions";
}>;
export type HomeSearch_competitions$key = ReadonlyArray<{
  readonly " $data"?: HomeSearch_competitions$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomeSearch_competitions">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "HomeSearch_competitions",
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

(node as any).hash = "adeb3baa12d2f06f89d5fc0968e3d4d7";

export default node;
