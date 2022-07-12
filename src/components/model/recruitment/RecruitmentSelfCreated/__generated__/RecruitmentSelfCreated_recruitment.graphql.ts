/**
 * @generated SignedSource<<c29dfab9879e256c935ea9f48726546f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Status = "CLOSED" | "DRAFT" | "PUBLISHED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type RecruitmentSelfCreated_recruitment$data = {
  readonly closingAt: string | null;
  readonly createdAt: string;
  readonly id: string;
  readonly publishedAt: string | null;
  readonly status: Status;
  readonly title: string;
  readonly " $fragmentType": "RecruitmentSelfCreated_recruitment";
};
export type RecruitmentSelfCreated_recruitment$key = {
  readonly " $data"?: RecruitmentSelfCreated_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentSelfCreated_recruitment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecruitmentSelfCreated_recruitment",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "publishedAt",
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

(node as any).hash = "e14556193851385bc43c07aaaddaee77";

export default node;
