/**
 * @generated SignedSource<<19d697f04320b05c8071ee4ac2592065>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type Status = "CLOSED" | "DRAFT" | "PUBLISHED" | "%future added value";
export type Type = "JOIN" | "MEMBER" | "OPPONENT" | "OTHER" | "PERSONAL" | "%future added value";
export type RecruitmentInput = {
  closingAt?: string | null;
  competitionId: string;
  detail?: string | null;
  locationLat?: number | null;
  locationLng?: number | null;
  prefectureId?: string | null;
  startAt?: string | null;
  status: Status;
  tags: ReadonlyArray<recruitmentTagInput | null>;
  title: string;
  type: Type;
  venue?: string | null;
};
export type recruitmentTagInput = {
  id: string;
  isNew: boolean;
  name: string;
};
export type RecruitmentNewView_CreateRecruitmentMutation$variables = {
  connections: ReadonlyArray<string>;
  input: RecruitmentInput;
};
export type RecruitmentNewView_CreateRecruitmentMutation$data = {
  readonly createRecruitment: {
    readonly cursor: string;
    readonly node: {
      readonly id: string;
    };
  };
};
export type RecruitmentNewView_CreateRecruitmentMutation = {
  response: RecruitmentNewView_CreateRecruitmentMutation$data;
  variables: RecruitmentNewView_CreateRecruitmentMutation$variables;
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
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": (v1/*: any*/),
  "concreteType": "RecruitmentEdge",
  "kind": "LinkedField",
  "name": "createRecruitment",
  "plural": false,
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecruitmentNewView_CreateRecruitmentMutation",
    "selections": [
      (v2/*: any*/)
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RecruitmentNewView_CreateRecruitmentMutation",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "appendEdge",
        "key": "",
        "kind": "LinkedHandle",
        "name": "createRecruitment",
        "handleArgs": [
          {
            "kind": "Variable",
            "name": "connections",
            "variableName": "connections"
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "06f412240d17591194c76fe0b247cbef",
    "id": null,
    "metadata": {},
    "name": "RecruitmentNewView_CreateRecruitmentMutation",
    "operationKind": "mutation",
    "text": "mutation RecruitmentNewView_CreateRecruitmentMutation(\n  $input: RecruitmentInput!\n) {\n  createRecruitment(input: $input) {\n    cursor\n    node {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9890d9db07f325110fe5981e296a550a";

export default node;
