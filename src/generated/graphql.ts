import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Applicant = {
  __typename?: 'Applicant';
  createdAt: Scalars['DateTime'];
  managementStatus: ManagementStatus;
};

export type Competition = {
  __typename?: 'Competition';
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum EmailVerificationStatus {
  Pending = 'PENDING',
  Verified = 'VERIFIED'
}

export enum ManagementStatus {
  Accepted = 'ACCEPTED',
  Backlog = 'BACKLOG',
  Rejected = 'REJECTED',
  Unnecessary = 'UNNECESSARY'
}

export type Mutation = {
  __typename?: 'Mutation';
  addRecruitmentTag: Scalars['Boolean'];
  applyForRecruitment: Scalars['Boolean'];
  createRecruitment: Recruitment;
  createStock: Scalars['Boolean'];
  createTag: Tag;
  createUser: Scalars['Boolean'];
  deleteRecruitment: Scalars['Boolean'];
  deleteStock: Scalars['Boolean'];
  loginUser: Scalars['Boolean'];
  logoutUser: Scalars['Boolean'];
  updateRecruitment: Recruitment;
};


export type MutationAddRecruitmentTagArgs = {
  recruitmentId: Scalars['String'];
  tagId: Scalars['String'];
};


export type MutationApplyForRecruitmentArgs = {
  input?: InputMaybe<ApplicantInput>;
  recruitmentId: Scalars['String'];
};


export type MutationCreateRecruitmentArgs = {
  input: RecruitmentInput;
};


export type MutationCreateStockArgs = {
  recruitmentId: Scalars['String'];
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteRecruitmentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteStockArgs = {
  recruitmentId: Scalars['String'];
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationUpdateRecruitmentArgs = {
  id: Scalars['String'];
  input: RecruitmentInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type PaginationInput = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<SearchRecruitmentInput>;
};

export type Prefecture = {
  __typename?: 'Prefecture';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkApplied: Scalars['Boolean'];
  checkStocked: Scalars['Boolean'];
  getAppliedCounts: Scalars['Int'];
  getAppliedRecruitments: Array<Recruitment>;
  getCompetitions: Array<Competition>;
  getCurrentUser?: Maybe<User>;
  getCurrentUserRecruitments: Array<Recruitment>;
  getPrefectures: Array<Prefecture>;
  getRecruitment: Recruitment;
  getRecruitmentTags: Array<Maybe<Tag>>;
  getRecruitments: RecruitmentConnection;
  getStockedCount: Scalars['Int'];
  getStockedRecruitments: Array<Recruitment>;
  getTags: Array<Tag>;
};


export type QueryCheckAppliedArgs = {
  recruitmentId: Scalars['String'];
};


export type QueryCheckStockedArgs = {
  recruitmentId: Scalars['String'];
};


export type QueryGetAppliedCountsArgs = {
  recruitmentId: Scalars['String'];
};


export type QueryGetRecruitmentArgs = {
  id: Scalars['String'];
};


export type QueryGetRecruitmentTagsArgs = {
  recruitmentId: Scalars['String'];
};


export type QueryGetRecruitmentsArgs = {
  input?: InputMaybe<PaginationInput>;
};


export type QueryGetStockedCountArgs = {
  recruitmentId: Scalars['String'];
};

export type Recruitment = {
  __typename?: 'Recruitment';
  applicant?: Maybe<Applicant>;
  capacity?: Maybe<Scalars['Int']>;
  closingAt?: Maybe<Scalars['DateTime']>;
  competition?: Maybe<Competition>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  locationLat?: Maybe<Scalars['Float']>;
  locationLng?: Maybe<Scalars['Float']>;
  place?: Maybe<Scalars['String']>;
  prefecture?: Maybe<Prefecture>;
  startAt?: Maybe<Scalars['DateTime']>;
  status: Status;
  tags: Array<Maybe<Tag>>;
  title: Scalars['String'];
  type: Type;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type RecruitmentConnection = {
  __typename?: 'RecruitmentConnection';
  edges: Array<RecruitmentEdge>;
  pageInfo: PageInfo;
};

export type RecruitmentEdge = {
  __typename?: 'RecruitmentEdge';
  cursor: Scalars['String'];
  node: Recruitment;
};

export enum Role {
  Admin = 'ADMIN',
  General = 'GENERAL'
}

export type SearchRecruitmentInput = {
  competitionId?: InputMaybe<Scalars['String']>;
  prefectureId?: InputMaybe<Scalars['String']>;
  startAt?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
};

export enum Status {
  Closed = 'CLOSED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum Type {
  Individual = 'INDIVIDUAL',
  Joining = 'JOINING',
  Member = 'MEMBER',
  Opponent = 'OPPONENT',
  Others = 'OTHERS',
  Unnecessary = 'UNNECESSARY'
}

export type User = {
  __typename?: 'User';
  avatar: Scalars['String'];
  email: Scalars['String'];
  emailVerificationStatus: EmailVerificationStatus;
  id: Scalars['String'];
  introduction?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  role: Role;
};

export type ApplicantInput = {
  content: Scalars['String'];
  managementStatus: ManagementStatus;
};

export type CreateTagInput = {
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RecruitmentInput = {
  capacity?: InputMaybe<Scalars['Int']>;
  closingAt?: InputMaybe<Scalars['DateTime']>;
  competitionId?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  locationLat?: InputMaybe<Scalars['Float']>;
  locationLng?: InputMaybe<Scalars['Float']>;
  place?: InputMaybe<Scalars['String']>;
  prefectureId?: InputMaybe<Scalars['String']>;
  startAt?: InputMaybe<Scalars['DateTime']>;
  status: Status;
  tags: Array<InputMaybe<RecruitmentTagInput>>;
  title: Scalars['String'];
  type: Type;
};

export type RecruitmentTagInput = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type GetCompetitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompetitionsQuery = { __typename?: 'Query', getCompetitions: Array<{ __typename?: 'Competition', id: string, name: string }> };

export type GetPrefecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPrefecturesQuery = { __typename?: 'Query', getPrefectures: Array<{ __typename?: 'Prefecture', id: string, name: string }> };

export type GetRecruitmentsQueryVariables = Exact<{
  paginationInput?: InputMaybe<PaginationInput>;
}>;


export type GetRecruitmentsQuery = { __typename?: 'Query', getRecruitments: { __typename?: 'RecruitmentConnection', pageInfo: { __typename?: 'PageInfo', startCursor: string, endCursor: string, hasNextPage: boolean, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'RecruitmentEdge', cursor: string, node: { __typename?: 'Recruitment', id: string, title: string, type: Type, status: Status, updatedAt: any, closingAt?: any | null, user: { __typename?: 'User', name: string, avatar: string }, prefecture?: { __typename?: 'Prefecture', name: string } | null, competition?: { __typename?: 'Competition', name: string } | null } }> } };


export const GetCompetitionsDocument = gql`
    query GetCompetitions {
  getCompetitions {
    id
    name
  }
}
    `;

export function useGetCompetitionsQuery(options?: Omit<Urql.UseQueryArgs<GetCompetitionsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCompetitionsQuery>({ query: GetCompetitionsDocument, ...options });
};
export const GetPrefecturesDocument = gql`
    query GetPrefectures {
  getPrefectures {
    id
    name
  }
}
    `;

export function useGetPrefecturesQuery(options?: Omit<Urql.UseQueryArgs<GetPrefecturesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPrefecturesQuery>({ query: GetPrefecturesDocument, ...options });
};
export const GetRecruitmentsDocument = gql`
    query GetRecruitments($paginationInput: PaginationInput) {
  getRecruitments(input: $paginationInput) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        type
        status
        updatedAt
        closingAt
        user {
          name
          avatar
        }
        prefecture {
          name
        }
        competition {
          name
        }
      }
    }
  }
}
    `;

export function useGetRecruitmentsQuery(options?: Omit<Urql.UseQueryArgs<GetRecruitmentsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRecruitmentsQuery>({ query: GetRecruitmentsDocument, ...options });
};
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Applicant",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "managementStatus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Competition",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "addRecruitmentTag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "recruitmentId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "tagId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "applyForRecruitment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "recruitmentId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createRecruitment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Recruitment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createStock",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "recruitmentId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createTag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Tag",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteRecruitment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteStock",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "recruitmentId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "loginUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "logoutUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updateRecruitment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Recruitment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "fields": [
          {
            "name": "endCursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "hasNextPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "hasPreviousPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "startCursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Prefecture",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "checkApplied",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "recruitmentId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "checkStocked",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "recruitmentId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "getAppliedCounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "recruitmentId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "getAppliedRecruitments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Recruitment",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "getCompetitions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Competition",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "getCurrentUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "getCurrentUserRecruitments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Recruitment",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "getPrefectures",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Prefecture",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "getRecruitment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Recruitment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "getRecruitmentTags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Tag",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "recruitmentId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "getRecruitments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RecruitmentConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "getStockedCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "recruitmentId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "getStockedRecruitments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Recruitment",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "getTags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Tag",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Recruitment",
        "fields": [
          {
            "name": "applicant",
            "type": {
              "kind": "OBJECT",
              "name": "Applicant",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "capacity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "closingAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "competition",
            "type": {
              "kind": "OBJECT",
              "name": "Competition",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "locationLat",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "locationLng",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "place",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "prefecture",
            "type": {
              "kind": "OBJECT",
              "name": "Prefecture",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "startAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Tag",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RecruitmentConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RecruitmentEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RecruitmentEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Recruitment",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Tag",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "avatar",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "emailVerificationStatus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "introduction",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;