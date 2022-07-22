/**
 * @generated SignedSource<<404c683441300bfb93cf318cb50293ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserFollow_feedbackFollow$data = {
  readonly viewerDoesFollow: boolean;
  readonly " $fragmentType": "UserFollow_feedbackFollow";
};
export type UserFollow_feedbackFollow$key = {
  readonly " $data"?: UserFollow_feedbackFollow$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserFollow_feedbackFollow">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserFollow_feedbackFollow",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerDoesFollow",
      "storageKey": null
    }
  ],
  "type": "FeedbackFollow",
  "abstractKey": null
};

(node as any).hash = "4ab572f6e4cc403f714bbbf4799d410f";

export default node;
