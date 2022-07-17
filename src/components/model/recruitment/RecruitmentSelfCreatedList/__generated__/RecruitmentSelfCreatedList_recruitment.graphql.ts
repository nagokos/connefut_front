/**
 * @generated SignedSource<<c83b13d8108ab63d1b5e8fc823fcb84a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentSelfCreatedList_recruitment$data = {
  readonly viewerRecruitments: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"RecruitmentSelfCreatedTrashModal_recruitment" | "RecruitmentSelfCreated_recruitment">;
      };
    }>;
    readonly pageInfo: {
      readonly endCursor: string | null;
    };
  };
  readonly " $fragmentType": "RecruitmentSelfCreatedList_recruitment";
};
export type RecruitmentSelfCreatedList_recruitment$key = {
  readonly " $data"?: RecruitmentSelfCreatedList_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentSelfCreatedList_recruitment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "viewerRecruitments"
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
      "operation": require('./ViewerRecruitmentsQuery.graphql')
    }
  },
  "name": "RecruitmentSelfCreatedList_recruitment",
  "selections": [
    {
      "alias": "viewerRecruitments",
      "args": null,
      "concreteType": "RecruitmentConnection",
      "kind": "LinkedField",
      "name": "__RecruitmentSelfCreatedList__viewerRecruitments_connection",
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
        },
        {
          "kind": "ClientExtension",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__id",
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "3c8db505fe244ca926bb23bc682699ee";

export default node;
