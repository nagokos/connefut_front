/**
 * @generated SignedSource<<28a6eccd17dc30689bb6cd94ad326c20>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserFollow_FollowMutation$variables = {
  userId: string;
};
export type UserFollow_FollowMutation$data = {
  readonly follow: {
    readonly " $fragmentSpreads": FragmentRefs<"UserFollow_feedbackFollow">;
  };
};
export type UserFollow_FollowMutation = {
  response: UserFollow_FollowMutation$data;
  variables: UserFollow_FollowMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserFollow_FollowMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FeedbackFollow",
        "kind": "LinkedField",
        "name": "follow",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserFollow_feedbackFollow"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserFollow_FollowMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FeedbackFollow",
        "kind": "LinkedField",
        "name": "follow",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "viewerDoesFollow",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "823898b58eda068d88c878c78f7208fa",
    "id": null,
    "metadata": {},
    "name": "UserFollow_FollowMutation",
    "operationKind": "mutation",
    "text": "mutation UserFollow_FollowMutation(\n  $userId: ID!\n) {\n  follow(userId: $userId) {\n    ...UserFollow_feedbackFollow\n    id\n  }\n}\n\nfragment UserFollow_feedbackFollow on FeedbackFollow {\n  viewerDoesFollow\n}\n"
  }
};
})();

(node as any).hash = "59330f460394fc6d6938ee6ea298c07c";

export default node;
