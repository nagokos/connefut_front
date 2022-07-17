/**
 * @generated SignedSource<<01827721bf18273122b576c8430647f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation$variables = {
  connections: ReadonlyArray<string>;
  id: string;
};
export type RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation$data = {
  readonly deleteRecruitment: {
    readonly deletedRecruitmentId: string;
  };
};
export type RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation = {
  response: RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation$data;
  variables: RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedRecruitmentId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteRecruitmentPayload",
        "kind": "LinkedField",
        "name": "deleteRecruitment",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "name": "RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteRecruitmentPayload",
        "kind": "LinkedField",
        "name": "deleteRecruitment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedRecruitmentId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6583c19ce3dfd602a9129871c6907eca",
    "id": null,
    "metadata": {},
    "name": "RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation",
    "operationKind": "mutation",
    "text": "mutation RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation(\n  $id: String!\n) {\n  deleteRecruitment(id: $id) {\n    deletedRecruitmentId\n  }\n}\n"
  }
};
})();

(node as any).hash = "7ded9bee1744221c9a40cb01676f9686";

export default node;
