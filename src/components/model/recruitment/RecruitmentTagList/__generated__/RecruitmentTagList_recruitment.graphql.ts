/**
 * @generated SignedSource<<7cf46a848bc286bc7418843f2cad1a14>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Type = "INDIVIDUAL" | "JOINING" | "MEMBER" | "OPPONENT" | "OTHERS" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type RecruitmentTagList_recruitment$data = {
  readonly competition: {
    readonly name: string;
  };
  readonly tags: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  } | null>;
  readonly type: Type;
  readonly " $fragmentType": "RecruitmentTagList_recruitment";
};
export type RecruitmentTagList_recruitment$key = {
  readonly " $data"?: RecruitmentTagList_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentTagList_recruitment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecruitmentTagList_recruitment",
  "selections": [
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
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Tag",
      "kind": "LinkedField",
      "name": "tags",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Recruitment",
  "abstractKey": null
};
})();

(node as any).hash = "925386454d28eabc8e97cf2baf970b4f";

export default node;
