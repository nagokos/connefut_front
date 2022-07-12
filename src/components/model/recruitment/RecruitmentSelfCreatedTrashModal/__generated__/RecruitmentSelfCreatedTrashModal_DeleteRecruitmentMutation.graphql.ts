/**
 * @generated SignedSource<<018d7372f94b3ee39a8b16f4e4d15f56>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation$variables = {
  id: string;
};
export type RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation$data = {
  readonly deleteRecruitment: {
    readonly id: string;
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
  "name": "id",
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
        "concreteType": "Recruitment",
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
        "concreteType": "Recruitment",
        "kind": "LinkedField",
        "name": "deleteRecruitment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteRecord",
            "key": "",
            "kind": "ScalarHandle",
            "name": "id"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5ed2974abd2c4332a05628d537fb324e",
    "id": null,
    "metadata": {},
    "name": "RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation",
    "operationKind": "mutation",
    "text": "mutation RecruitmentSelfCreatedTrashModal_DeleteRecruitmentMutation(\n  $id: String!\n) {\n  deleteRecruitment(id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "fa8f08cb56e1d8c0fe467bf44fb650a7";

export default node;
