/**
 * @generated SignedSource<<26b81b59717258653dfbe2de68fdca96>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentApply_recruitment$data = {
  readonly closingAt: string | null;
  readonly user: {
    readonly id: string;
  };
  readonly " $fragmentType": "RecruitmentApply_recruitment";
};
export type RecruitmentApply_recruitment$key = {
  readonly " $data"?: RecruitmentApply_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentApply_recruitment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecruitmentApply_recruitment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "closingAt",
      "storageKey": null
    }
  ],
  "type": "Recruitment",
  "abstractKey": null
};

(node as any).hash = "a996fee7aa9701729911ed14e5b542c2";

export default node;
