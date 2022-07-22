/**
 * @generated SignedSource<<d19ca4e519f13705cef2769cb63f414e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Type = "JOIN" | "MEMBER" | "OPPONENT" | "OTHER" | "PERSONAL" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type UserRecruitmentCard_recruitment$data = {
  readonly closingAt: string | null;
  readonly competition: {
    readonly name: string;
  };
  readonly id: string;
  readonly startAt: string | null;
  readonly title: string;
  readonly type: Type;
  readonly " $fragmentType": "UserRecruitmentCard_recruitment";
};
export type UserRecruitmentCard_recruitment$key = {
  readonly " $data"?: UserRecruitmentCard_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserRecruitmentCard_recruitment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserRecruitmentCard_recruitment",
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
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Competition",
      "kind": "LinkedField",
      "name": "competition",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startAt",
      "storageKey": null
    }
  ],
  "type": "Recruitment",
  "abstractKey": null
};

(node as any).hash = "ef2ed6282a2b025c076d41cc9eeac510";

export default node;
