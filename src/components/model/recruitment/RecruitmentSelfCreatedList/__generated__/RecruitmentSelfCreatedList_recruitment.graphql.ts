/**
 * @generated SignedSource<<98aff7440f456e05e9224f1f88062341>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentSelfCreatedList_recruitment$data = {
  readonly currentUserRecruitments: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"RecruitmentSelfCreatedTrashModal_recruitment" | "RecruitmentSelfCreated_recruitment">;
      };
    }>;
  };
  readonly " $fragmentType": "RecruitmentSelfCreatedList_recruitment";
};
export type RecruitmentSelfCreatedList_recruitment$key = {
  readonly " $data"?: RecruitmentSelfCreatedList_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentSelfCreatedList_recruitment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "currentUserRecruitments"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 20,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./CurrentUserRecruitmentsQuery.graphql')
    }
  },
  "name": "RecruitmentSelfCreatedList_recruitment",
  "selections": [
    {
      "alias": "currentUserRecruitments",
      "args": null,
      "concreteType": "RecruitmentConnection",
      "kind": "LinkedField",
      "name": "__RecruitmentSelfCreatedList__currentUserRecruitments_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "RecruitmentEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Recruitment",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RecruitmentSelfCreated_recruitment"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RecruitmentSelfCreatedTrashModal_recruitment"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "7ca86288a9279fc28ad7a5ce289941f0";

export default node;
