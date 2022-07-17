/**
 * @generated SignedSource<<0d977cb46fb804b4784e3525c913dfa8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentStock_feedbackStock$data = {
  readonly viewerDoesStock: boolean;
  readonly " $fragmentType": "RecruitmentStock_feedbackStock";
};
export type RecruitmentStock_feedbackStock$key = {
  readonly " $data"?: RecruitmentStock_feedbackStock$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentStock_feedbackStock">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecruitmentStock_feedbackStock",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerDoesStock",
      "storageKey": null
    }
  ],
  "type": "FeedbackStock",
  "abstractKey": null
};

(node as any).hash = "902ac2f2155909c74b151f03be995991";

export default node;
