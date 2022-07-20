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

export type Applicant = Node & {
  __typename?: 'Applicant';
  createdAt: Scalars['DateTime'];
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  message: Scalars['String'];
  recruitment: Recruitment;
};

export type ApplyForRecruitmentAuthorizationError = Error & {
  __typename?: 'ApplyForRecruitmentAuthorizationError';
  message: Scalars['String'];
};

export type ApplyForRecruitmentError = ApplyForRecruitmentAuthorizationError | ApplyForRecruitmentInvalidInputError | ApplyForRecruitmentSelfGeneratedError;

export type ApplyForRecruitmentInput = {
  message: Scalars['String'];
};

export type ApplyForRecruitmentInvalidInputError = Error & {
  __typename?: 'ApplyForRecruitmentInvalidInputError';
  field: ApplyForRecruitmentInvalidInputField;
  message: Scalars['String'];
};

export enum ApplyForRecruitmentInvalidInputField {
  Message = 'MESSAGE'
}

export type ApplyForRecruitmentPayload = {
  __typename?: 'ApplyForRecruitmentPayload';
  errors: Array<ApplyForRecruitmentError>;
  feedback?: Maybe<FeedbackApplicant>;
};

export type ApplyForRecruitmentSelfGeneratedError = Error & {
  __typename?: 'ApplyForRecruitmentSelfGeneratedError';
  message: Scalars['String'];
};

export type Competition = Node & {
  __typename?: 'Competition';
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Connection = {
  edges: Array<Edge>;
  pageInfo: PageInfo;
};

export type CreateRecruitmentPayload = {
  __typename?: 'CreateRecruitmentPayload';
  feedbackRecruitmentEdge: RecruitmentEdge;
};

export type CreateTagInput = {
  name: Scalars['String'];
};

export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  feedbackTagEdge: TagEdge;
};

export type DeleteRecruitmentPayload = {
  __typename?: 'DeleteRecruitmentPayload';
  deletedRecruitmentId: Scalars['ID'];
};

export type Edge = {
  cursor: Scalars['String'];
  node: Node;
};

export enum EmailVerificationStatus {
  Pending = 'PENDING',
  Verified = 'VERIFIED'
}

export type Entrie = {
  __typename?: 'Entrie';
  user: User;
};

export type Error = {
  message: Scalars['String'];
};

export type FeedbackApplicant = Node & {
  __typename?: 'FeedbackApplicant';
  id: Scalars['ID'];
  isAppliedFor: Scalars['Boolean'];
};

export type FeedbackStock = Node & {
  __typename?: 'FeedbackStock';
  feedbackRecruitmentEdge?: Maybe<RecruitmentEdge>;
  id: Scalars['ID'];
  removedRecruitmentId?: Maybe<Scalars['ID']>;
  viewerDoesStock: Scalars['Boolean'];
};

export type LoginUserAuthenticationError = Error & {
  __typename?: 'LoginUserAuthenticationError';
  message: Scalars['String'];
};

export type LoginUserError = LoginUserAuthenticationError | LoginUserInvalidInputError;

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserInvalidInputError = Error & {
  __typename?: 'LoginUserInvalidInputError';
  field: LoginUserInvalidInputField;
  message: Scalars['String'];
};

export enum LoginUserInvalidInputField {
  Email = 'EMAIL',
  Password = 'PASSWORD'
}

export type LoginUserPayload = {
  __typename?: 'LoginUserPayload';
  userErrors: Array<LoginUserError>;
  viewer?: Maybe<User>;
};

export type Message = {
  __typename?: 'Message';
  applicant?: Maybe<Applicant>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addRecruitmentTag: Scalars['Boolean'];
  addStock: FeedbackStock;
  applyForRecruitment: ApplyForRecruitmentPayload;
  createMessage: Message;
  createRecruitment: CreateRecruitmentPayload;
  createTag: CreateTagPayload;
  deleteRecruitment: DeleteRecruitmentPayload;
  loginUser: LoginUserPayload;
  logoutUser: Scalars['Boolean'];
  registerUser: RegisterUserPayload;
  removeStock: FeedbackStock;
  updateRecruitment: UpdateRecruitmentPayload;
};


export type MutationAddRecruitmentTagArgs = {
  recruitmentId: Scalars['String'];
  tagId: Scalars['String'];
};


export type MutationAddStockArgs = {
  recruitmentId: Scalars['ID'];
};


export type MutationApplyForRecruitmentArgs = {
  input?: InputMaybe<ApplicantInput>;
  recruitmentId: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
  roomId: Scalars['String'];
};


export type MutationCreateRecruitmentArgs = {
  input: RecruitmentInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationDeleteRecruitmentArgs = {
  id: Scalars['ID'];
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};


export type MutationRemoveStockArgs = {
  recruitmentId: Scalars['ID'];
};


export type MutationUpdateRecruitmentArgs = {
  id: Scalars['ID'];
  input: RecruitmentInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Prefecture = Node & {
  __typename?: 'Prefecture';
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  appliedRecruitments: Array<Recruitment>;
  checkAppliedForRecruitment: FeedbackApplicant;
  checkStocked: FeedbackStock;
  competitions: Array<Competition>;
  getEntrieUser: User;
  getRoomMessages: Array<Message>;
  getStockedCount: FeedbackStock;
  getViewerRooms: Array<Room>;
  node?: Maybe<Node>;
  prefectures: Array<Prefecture>;
  recruitment: Recruitment;
  recruitments: RecruitmentConnection;
  stockedRecruitments: RecruitmentConnection;
  tags?: Maybe<TagConnection>;
  viewer?: Maybe<User>;
  viewerRecruitments: RecruitmentConnection;
};


export type QueryCheckAppliedForRecruitmentArgs = {
  recruitmentId: Scalars['String'];
};


export type QueryCheckStockedArgs = {
  recruitmentId: Scalars['ID'];
};


export type QueryGetEntrieUserArgs = {
  roomId: Scalars['String'];
};


export type QueryGetRoomMessagesArgs = {
  roomId: Scalars['String'];
};


export type QueryGetStockedCountArgs = {
  recruitmentId: Scalars['ID'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryRecruitmentArgs = {
  id: Scalars['ID'];
};


export type QueryRecruitmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryStockedRecruitmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryTagsArgs = {
  first: Scalars['Int'];
};


export type QueryViewerRecruitmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type Recruitment = Node & {
  __typename?: 'Recruitment';
  applicant?: Maybe<Applicant>;
  closingAt?: Maybe<Scalars['DateTime']>;
  competition: Competition;
  createdAt: Scalars['DateTime'];
  databaseId: Scalars['Int'];
  detail?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locationLat?: Maybe<Scalars['Float']>;
  locationLng?: Maybe<Scalars['Float']>;
  prefecture: Prefecture;
  publishedAt?: Maybe<Scalars['DateTime']>;
  startAt?: Maybe<Scalars['DateTime']>;
  status: Status;
  tags: Array<Maybe<Tag>>;
  title: Scalars['String'];
  type: Type;
  user: User;
  venue?: Maybe<Scalars['String']>;
};

export type RecruitmentConnection = Connection & {
  __typename?: 'RecruitmentConnection';
  edges: Array<RecruitmentEdge>;
  pageInfo: PageInfo;
};

export type RecruitmentEdge = Edge & {
  __typename?: 'RecruitmentEdge';
  cursor: Scalars['String'];
  node: Recruitment;
};

export type RecruitmentInput = {
  closingAt?: InputMaybe<Scalars['DateTime']>;
  competitionId: Scalars['ID'];
  detail?: InputMaybe<Scalars['String']>;
  locationLat?: InputMaybe<Scalars['Float']>;
  locationLng?: InputMaybe<Scalars['Float']>;
  prefectureId: Scalars['ID'];
  startAt?: InputMaybe<Scalars['DateTime']>;
  status: Status;
  tagIds: Array<Scalars['ID']>;
  title: Scalars['String'];
  type: Type;
  venue?: InputMaybe<Scalars['String']>;
};

export type RegisterUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterUserInvalidInputError = Error & {
  __typename?: 'RegisterUserInvalidInputError';
  field: RegisterUserInvalidInputField;
  message: Scalars['String'];
};

export enum RegisterUserInvalidInputField {
  Email = 'EMAIL',
  Name = 'NAME',
  Password = 'PASSWORD'
}

export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  userErrors: Array<RegisterUserInvalidInputError>;
  viewer?: Maybe<User>;
};

export enum Role {
  Admin = 'ADMIN',
  General = 'GENERAL'
}

export type Room = {
  __typename?: 'Room';
  entrie: Entrie;
  id: Scalars['String'];
};

export enum Status {
  Closed = 'CLOSED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Tag = Node & {
  __typename?: 'Tag';
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TagConnection = Connection & {
  __typename?: 'TagConnection';
  edges: Array<TagEdge>;
  pageInfo: PageInfo;
};

export type TagEdge = Edge & {
  __typename?: 'TagEdge';
  cursor: Scalars['String'];
  node: Tag;
};

export enum Type {
  Join = 'JOIN',
  Member = 'MEMBER',
  Opponent = 'OPPONENT',
  Other = 'OTHER',
  Personal = 'PERSONAL'
}

export type UpdateRecruitmentPayload = {
  __typename?: 'UpdateRecruitmentPayload';
  deletedRecruitmentId?: Maybe<Scalars['ID']>;
  feedbackRecruitmentEdge: RecruitmentEdge;
};

export type User = Node & {
  __typename?: 'User';
  avatar: Scalars['String'];
  databaseId: Scalars['Int'];
  email: Scalars['String'];
  emailVerificationStatus: EmailVerificationStatus;
  id: Scalars['ID'];
  introduction?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  role: Role;
};

export type ApplicantInput = {
  message: Scalars['String'];
};

export type CreateMessageInput = {
  content: Scalars['String'];
};

export type GetCompetitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompetitionsQuery = { __typename?: 'Query', competitions: Array<{ __typename?: 'Competition', id: string, name: string }> };

export type GetEntrieUserQueryVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type GetEntrieUserQuery = { __typename?: 'Query', getEntrieUser: { __typename?: 'User', id: string, name: string, avatar: string } };

export type GetRoomMessagesQueryVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type GetRoomMessagesQuery = { __typename?: 'Query', getRoomMessages: Array<{ __typename?: 'Message', content?: string | null, user: { __typename?: 'User', name: string, avatar: string }, applicant?: { __typename?: 'Applicant', message: string, recruitment: { __typename?: 'Recruitment', title: string, startAt?: any | null, type: Type, prefecture: { __typename?: 'Prefecture', name: string }, competition: { __typename?: 'Competition', name: string } } } | null }> };

export type CreateMessageMutationVariables = Exact<{
  roomId: Scalars['String'];
  createMessageInput: CreateMessageInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', content?: string | null } };

export type GetPrefecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPrefecturesQuery = { __typename?: 'Query', prefectures: Array<{ __typename?: 'Prefecture', id: string, name: string }> };

export type GetRecruitmentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRecruitmentQuery = { __typename?: 'Query', recruitment: { __typename?: 'Recruitment', id: string, title: string, type: Type, status: Status, venue?: string | null, startAt?: any | null, detail?: string | null, closingAt?: any | null, locationLat?: number | null, locationLng?: number | null, competition: { __typename?: 'Competition', id: string, name: string }, prefecture: { __typename?: 'Prefecture', id: string, name: string }, user: { __typename?: 'User', id: string, name: string, avatar: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string } | null> } };

export type GetAppliedRecruitmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAppliedRecruitmentsQuery = { __typename?: 'Query', appliedRecruitments: Array<{ __typename?: 'Recruitment', id: string, title: string, applicant?: { __typename?: 'Applicant', createdAt: any } | null, user: { __typename?: 'User', id: string, name: string, avatar: string } }> };

export type GetViewerRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetViewerRoomsQuery = { __typename?: 'Query', getViewerRooms: Array<{ __typename?: 'Room', id: string, entrie: { __typename?: 'Entrie', user: { __typename?: 'User', name: string, avatar: string } } }> };

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { __typename?: 'Query', viewer?: { __typename?: 'User', id: string, name: string, email: string, role: Role, avatar: string, introduction?: string | null, emailVerificationStatus: EmailVerificationStatus } | null };


export const GetCompetitionsDocument = gql`
    query GetCompetitions {
  competitions {
    id
    name
  }
}
    `;

export function useGetCompetitionsQuery(options?: Omit<Urql.UseQueryArgs<GetCompetitionsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCompetitionsQuery>({ query: GetCompetitionsDocument, ...options });
};
export const GetEntrieUserDocument = gql`
    query GetEntrieUser($roomId: String!) {
  getEntrieUser(roomId: $roomId) {
    id
    name
    avatar
  }
}
    `;

export function useGetEntrieUserQuery(options: Omit<Urql.UseQueryArgs<GetEntrieUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetEntrieUserQuery>({ query: GetEntrieUserDocument, ...options });
};
export const GetRoomMessagesDocument = gql`
    query GetRoomMessages($roomId: String!) {
  getRoomMessages(roomId: $roomId) {
    content
    user {
      name
      avatar
    }
    applicant {
      message
      recruitment {
        title
        startAt
        type
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

export function useGetRoomMessagesQuery(options: Omit<Urql.UseQueryArgs<GetRoomMessagesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRoomMessagesQuery>({ query: GetRoomMessagesDocument, ...options });
};
export const CreateMessageDocument = gql`
    mutation CreateMessage($roomId: String!, $createMessageInput: createMessageInput!) {
  createMessage(roomId: $roomId, input: $createMessageInput) {
    content
  }
}
    `;

export function useCreateMessageMutation() {
  return Urql.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument);
};
export const GetPrefecturesDocument = gql`
    query GetPrefectures {
  prefectures {
    id
    name
  }
}
    `;

export function useGetPrefecturesQuery(options?: Omit<Urql.UseQueryArgs<GetPrefecturesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPrefecturesQuery>({ query: GetPrefecturesDocument, ...options });
};
export const GetRecruitmentDocument = gql`
    query GetRecruitment($id: ID!) {
  recruitment(id: $id) {
    id
    title
    type
    status
    venue
    startAt
    detail
    closingAt
    competition {
      id
      name
    }
    prefecture {
      id
      name
    }
    user {
      id
      name
      avatar
    }
    tags {
      id
      name
    }
    locationLat
    locationLng
  }
}
    `;

export function useGetRecruitmentQuery(options: Omit<Urql.UseQueryArgs<GetRecruitmentQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRecruitmentQuery>({ query: GetRecruitmentDocument, ...options });
};
export const GetAppliedRecruitmentsDocument = gql`
    query GetAppliedRecruitments {
  appliedRecruitments {
    id
    title
    applicant {
      createdAt
    }
    user {
      id
      name
      avatar
    }
  }
}
    `;

export function useGetAppliedRecruitmentsQuery(options?: Omit<Urql.UseQueryArgs<GetAppliedRecruitmentsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAppliedRecruitmentsQuery>({ query: GetAppliedRecruitmentsDocument, ...options });
};
export const GetViewerRoomsDocument = gql`
    query GetViewerRooms {
  getViewerRooms {
    id
    entrie {
      user {
        name
        avatar
      }
    }
  }
}
    `;

export function useGetViewerRoomsQuery(options?: Omit<Urql.UseQueryArgs<GetViewerRoomsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetViewerRoomsQuery>({ query: GetViewerRoomsDocument, ...options });
};
export const ViewerDocument = gql`
    query Viewer {
  viewer {
    id
    name
    email
    role
    avatar
    introduction
    emailVerificationStatus
  }
}
    `;

export function useViewerQuery(options?: Omit<Urql.UseQueryArgs<ViewerQueryVariables>, 'query'>) {
  return Urql.useQuery<ViewerQuery>({ query: ViewerDocument, ...options });
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
            "name": "databaseId",
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
            "name": "message",
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
            "name": "recruitment",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ApplyForRecruitmentAuthorizationError",
        "fields": [
          {
            "name": "message",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Error"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ApplyForRecruitmentError",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ApplyForRecruitmentAuthorizationError"
          },
          {
            "kind": "OBJECT",
            "name": "ApplyForRecruitmentInvalidInputError"
          },
          {
            "kind": "OBJECT",
            "name": "ApplyForRecruitmentSelfGeneratedError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ApplyForRecruitmentInvalidInputError",
        "fields": [
          {
            "name": "field",
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
            "name": "message",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Error"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ApplyForRecruitmentPayload",
        "fields": [
          {
            "name": "errors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "ApplyForRecruitmentError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "feedback",
            "type": {
              "kind": "OBJECT",
              "name": "FeedbackApplicant",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ApplyForRecruitmentSelfGeneratedError",
        "fields": [
          {
            "name": "message",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Error"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Competition",
        "fields": [
          {
            "name": "databaseId",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Connection",
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
                    "kind": "INTERFACE",
                    "name": "Edge",
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
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "RecruitmentConnection"
          },
          {
            "kind": "OBJECT",
            "name": "TagConnection"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateRecruitmentPayload",
        "fields": [
          {
            "name": "feedbackRecruitmentEdge",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RecruitmentEdge",
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
        "name": "CreateTagPayload",
        "fields": [
          {
            "name": "feedbackTagEdge",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TagEdge",
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
        "name": "DeleteRecruitmentPayload",
        "fields": [
          {
            "name": "deletedRecruitmentId",
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
        "kind": "INTERFACE",
        "name": "Edge",
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
                "kind": "INTERFACE",
                "name": "Node",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "RecruitmentEdge"
          },
          {
            "kind": "OBJECT",
            "name": "TagEdge"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Entrie",
        "fields": [
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
        "kind": "INTERFACE",
        "name": "Error",
        "fields": [
          {
            "name": "message",
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
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ApplyForRecruitmentAuthorizationError"
          },
          {
            "kind": "OBJECT",
            "name": "ApplyForRecruitmentInvalidInputError"
          },
          {
            "kind": "OBJECT",
            "name": "ApplyForRecruitmentSelfGeneratedError"
          },
          {
            "kind": "OBJECT",
            "name": "LoginUserAuthenticationError"
          },
          {
            "kind": "OBJECT",
            "name": "LoginUserInvalidInputError"
          },
          {
            "kind": "OBJECT",
            "name": "RegisterUserInvalidInputError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "FeedbackApplicant",
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
            "name": "isAppliedFor",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "FeedbackStock",
        "fields": [
          {
            "name": "feedbackRecruitmentEdge",
            "type": {
              "kind": "OBJECT",
              "name": "RecruitmentEdge",
              "ofType": null
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
            "name": "removedRecruitmentId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "viewerDoesStock",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LoginUserAuthenticationError",
        "fields": [
          {
            "name": "message",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Error"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "LoginUserError",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "LoginUserAuthenticationError"
          },
          {
            "kind": "OBJECT",
            "name": "LoginUserInvalidInputError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LoginUserInvalidInputError",
        "fields": [
          {
            "name": "field",
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
            "name": "message",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Error"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LoginUserPayload",
        "fields": [
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "UNION",
                    "name": "LoginUserError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "viewer",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Message",
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
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
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
            "name": "addStock",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FeedbackStock",
                "ofType": null
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
            "name": "applyForRecruitment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ApplyForRecruitmentPayload",
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
            "name": "createMessage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Message",
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
              },
              {
                "name": "roomId",
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
                "name": "CreateRecruitmentPayload",
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
            "name": "createTag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CreateTagPayload",
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
            "name": "deleteRecruitment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeleteRecruitmentPayload",
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
            "name": "loginUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LoginUserPayload",
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
            "name": "registerUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RegisterUserPayload",
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
            "name": "removeStock",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FeedbackStock",
                "ofType": null
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
            "name": "updateRecruitment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UpdateRecruitmentPayload",
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
        "kind": "INTERFACE",
        "name": "Node",
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
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Applicant"
          },
          {
            "kind": "OBJECT",
            "name": "Competition"
          },
          {
            "kind": "OBJECT",
            "name": "FeedbackApplicant"
          },
          {
            "kind": "OBJECT",
            "name": "FeedbackStock"
          },
          {
            "kind": "OBJECT",
            "name": "Prefecture"
          },
          {
            "kind": "OBJECT",
            "name": "Recruitment"
          },
          {
            "kind": "OBJECT",
            "name": "Tag"
          },
          {
            "kind": "OBJECT",
            "name": "User"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "fields": [
          {
            "name": "endCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
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
              "kind": "SCALAR",
              "name": "Any"
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
            "name": "databaseId",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "appliedRecruitments",
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
            "name": "checkAppliedForRecruitment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FeedbackApplicant",
                "ofType": null
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
                "kind": "OBJECT",
                "name": "FeedbackStock",
                "ofType": null
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
            "name": "competitions",
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
            "name": "getEntrieUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "roomId",
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
            "name": "getRoomMessages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Message",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "roomId",
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
            "name": "getStockedCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FeedbackStock",
                "ofType": null
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
            "name": "getViewerRooms",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Room",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
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
            "name": "prefectures",
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
            "name": "recruitment",
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
            "name": "recruitments",
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
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "stockedRecruitments",
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
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "tags",
            "type": {
              "kind": "OBJECT",
              "name": "TagConnection",
              "ofType": null
            },
            "args": [
              {
                "name": "first",
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
            "name": "viewer",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "viewerRecruitments",
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
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
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
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Competition",
                "ofType": null
              }
            },
            "args": []
          },
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
            "name": "databaseId",
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
            "name": "detail",
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
            "name": "prefecture",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Prefecture",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
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
          },
          {
            "name": "venue",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Connection"
          }
        ]
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Edge"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RegisterUserInvalidInputError",
        "fields": [
          {
            "name": "field",
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
            "name": "message",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Error"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RegisterUserPayload",
        "fields": [
          {
            "name": "userErrors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RegisterUserInvalidInputError",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "viewer",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Room",
        "fields": [
          {
            "name": "entrie",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Entrie",
                "ofType": null
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
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Tag",
        "fields": [
          {
            "name": "databaseId",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TagConnection",
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
                    "name": "TagEdge",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Connection"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TagEdge",
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
                "name": "Tag",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Edge"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateRecruitmentPayload",
        "fields": [
          {
            "name": "deletedRecruitmentId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "feedbackRecruitmentEdge",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RecruitmentEdge",
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
            "name": "databaseId",
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
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;