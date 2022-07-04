/**
 * @generated SignedSource<<b1c931ff3bca94fb133bcaa3b62858cc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type Menu_LogoutUserMutation$variables = {};
export type Menu_LogoutUserMutation$data = {
  readonly logoutUser: boolean;
};
export type Menu_LogoutUserMutation = {
  response: Menu_LogoutUserMutation$data;
  variables: Menu_LogoutUserMutation$variables;
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
    "name": "Menu_LogoutUserMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Menu_LogoutUserMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "cb7b82cc5c3e90a921ac4c2d77f9e215",
    "id": null,
    "metadata": {},
    "name": "Menu_LogoutUserMutation",
    "operationKind": "mutation",
    "text": "mutation Menu_LogoutUserMutation {\n  logoutUser\n}\n"
  }
};
})();

(node as any).hash = "f09ce2aeb0810d099cf5ba9c038bef6c";

export default node;
