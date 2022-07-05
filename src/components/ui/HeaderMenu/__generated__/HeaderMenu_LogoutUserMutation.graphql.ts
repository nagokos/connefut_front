/**
 * @generated SignedSource<<147f34c1d1e6cb8f5a01c693b4a64999>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type HeaderMenu_LogoutUserMutation$variables = {};
export type HeaderMenu_LogoutUserMutation$data = {
  readonly logoutUser: boolean;
};
export type HeaderMenu_LogoutUserMutation = {
  response: HeaderMenu_LogoutUserMutation$data;
  variables: HeaderMenu_LogoutUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "logoutUser",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HeaderMenu_LogoutUserMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HeaderMenu_LogoutUserMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1057c62baf403b5b95cf47b4a81d903c",
    "id": null,
    "metadata": {},
    "name": "HeaderMenu_LogoutUserMutation",
    "operationKind": "mutation",
    "text": "mutation HeaderMenu_LogoutUserMutation {\n  logoutUser\n}\n"
  }
};
})();

(node as any).hash = "14140107832231bb5154e450caaee8a6";

export default node;
