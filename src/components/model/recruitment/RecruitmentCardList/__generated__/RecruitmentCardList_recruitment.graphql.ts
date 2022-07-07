/**
 * @generated SignedSource<<9db705fc34efad83005ed6c65f1946ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecruitmentCardList_recruitment$data = {
  readonly recruitments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"RecruitmentCard_recruitment">;
      };
    }>;
  };
  readonly " $fragmentType": "RecruitmentCardList_recruitment";
};
export type RecruitmentCardList_recruitment$key = {
  readonly " $data"?: RecruitmentCardList_recruitment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecruitmentCardList_recruitment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "recruitments"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 10,
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
      "operation": require('./RecruitmentsQuery.graphql')
    }
  },
  "name": "RecruitmentCardList_recruitment",
  "selections": [
    {
      "alias": "recruitments",
      "args": null,
      "concreteType": "RecruitmentConnection",
      "kind": "LinkedField",
      "name": "__RecruitmentCardList__recruitments_connection",
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
              "concreteType": "Recruitment",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RecruitmentCard_recruitment"
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
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

(node as any).hash = "fcc9f23b406231413fffb15d61855629";

export default node;
