/**
 * @generated SignedSource<<30670bbf803deca716c6fb66dcb0bb34>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserFollow_UnFollowMutation$variables = {
  userId: string;
};
export type UserFollow_UnFollowMutation$data = {
  readonly unFollow: {
    readonly " $fragmentSpreads": FragmentRefs<"UserFollow_feedbackFollow">;
  };
};
export type UserFollow_UnFollowMutation = {
  response: UserFollow_UnFollowMutation$data;
  variables: UserFollow_UnFollowMutation$variables;
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
    "name": "UserFollow_UnFollowMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FeedbackFollow",
        "kind": "LinkedField",
        "name": "unFollow",
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
    "name": "UserFollow_UnFollowMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FeedbackFollow",
        "kind": "LinkedField",
        "name": "unFollow",
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
    "cacheID": "78b95d2b4609af94533e804340b9b13b",
    "id": null,
    "metadata": {},
    "name": "UserFollow_UnFollowMutation",
    "operationKind": "mutation",
    "text": "mutation UserFollow_UnFollowMutation(\n  $userId: ID!\n) {\n  unFollow(userId: $userId) {\n    ...UserFollow_feedbackFollow\n    id\n  }\n}\n\nfragment UserFollow_feedbackFollow on FeedbackFollow {\n  viewerDoesFollow\n}\n"
  }
};
})();

(node as any).hash = "b5e1a411b20f7948c8984201a3cab61f";

export default node;
