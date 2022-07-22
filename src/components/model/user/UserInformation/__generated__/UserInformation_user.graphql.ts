/**
 * @generated SignedSource<<ad1546e143809b2a1520c76d6d704098>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserInformation_user$data = {
  readonly avatar: string;
  readonly name: string;
  readonly " $fragmentType": "UserInformation_user";
};
export type UserInformation_user$key = {
  readonly " $data"?: UserInformation_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserInformation_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserInformation_user",
  "selections": [
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
      "name": "avatar",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "b9a1f6cb8e7d211a6bf44f8422f56165";

export default node;
