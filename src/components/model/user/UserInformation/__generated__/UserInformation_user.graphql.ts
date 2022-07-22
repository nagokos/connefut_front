/**
 * @generated SignedSource<<a8c330b6be27d18769bc521f2ed03294>>
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
  readonly id: string;
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
      "name": "avatar",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "b21fc1134f81ff593037b9fcfa7121fe";

export default node;
