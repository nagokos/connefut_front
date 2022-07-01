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
  message: Scalars['String'];
  recruitment: Recruitment;
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

export type Entrie = {
  __typename?: 'Entrie';
  user: User;
};

export type Error = {
  message: Scalars['String'];
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
  UserLogout: Scalars['Boolean'];
  addRecruitmentTag: Scalars['Boolean'];
  applyForRecruitment: Scalars['Boolean'];
  createMessage: Message;
  createRecruitment: Recruitment;
  createStock: Scalars['Boolean'];
  createTag: Tag;
  deleteRecruitment: Recruitment;
  deleteStock: Scalars['Boolean'];
  updateRecruitment: Recruitment;
  userLogin: UserLoginPayload;
  userRegister: UserRegisterPayload;
};


export type MutationAddRecruitmentTagArgs = {
  recruitmentId: Scalars['String'];
  tagId: Scalars['String'];
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


export type MutationCreateStockArgs = {
  recruitmentId: Scalars['String'];
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationDeleteRecruitmentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteStockArgs = {
  recruitmentId: Scalars['String'];
};


export type MutationUpdateRecruitmentArgs = {
  id: Scalars['String'];
  input: RecruitmentInput;
};


export type MutationUserLoginArgs = {
  input: UserLoginInput;
};


export type MutationUserRegisterArgs = {
  input: UserRegisterInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Prefecture = {
  __typename?: 'Prefecture';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkAppliedForRecruitment: Scalars['Boolean'];
  checkStocked: Scalars['Boolean'];
  getAppliedCounts: Scalars['Int'];
  getAppliedRecruitments: Array<Recruitment>;
  getCompetitions: Array<Competition>;
  getCurrentUser?: Maybe<User>;
  getCurrentUserRecruitments: Array<Recruitment>;
  getCurrentUserRooms: Array<Room>;
  getEntrieUser: User;
  getPrefectures: Array<Prefecture>;
  getRecruitment: Recruitment;
  getRecruitments: RecruitmentConnection;
  getRoomMessages: Array<Message>;
  getStockedCount: Scalars['Int'];
  getStockedRecruitments: Array<Recruitment>;
  getTags: Array<Tag>;
  node?: Maybe<Node>;
};


export type QueryCheckAppliedForRecruitmentArgs = {
  recruitmentId: Scalars['String'];
};


export type QueryCheckStockedArgs = {
  recruitmentId: Scalars['String'];
};


export type QueryGetAppliedCountsArgs = {
  recruitmentId: Scalars['String'];
};


export type QueryGetEntrieUserArgs = {
  roomId: Scalars['String'];
};


export type QueryGetRecruitmentArgs = {
  id: Scalars['String'];
};


export type QueryGetRecruitmentsArgs = {
  input: PaginationInput;
};


export type QueryGetRoomMessagesArgs = {
  roomId: Scalars['String'];
};


export type QueryGetStockedCountArgs = {
  recruitmentId: Scalars['String'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type Recruitment = {
  __typename?: 'Recruitment';
  applicant?: Maybe<Applicant>;
  closingAt?: Maybe<Scalars['DateTime']>;
  competition?: Maybe<Competition>;
  createdAt: Scalars['DateTime'];
  detail?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  locationLat?: Maybe<Scalars['Float']>;
  locationLng?: Maybe<Scalars['Float']>;
  place?: Maybe<Scalars['String']>;
  prefecture?: Maybe<Prefecture>;
  publishedAt?: Maybe<Scalars['DateTime']>;
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
  Others = 'OTHERS'
}

export type User = Node & {
  __typename?: 'User';
  avatar: Scalars['String'];
  databaseId?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  emailVerificationStatus: EmailVerificationStatus;
  id: Scalars['ID'];
  introduction?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  role: Role;
};

export type UserLoginAuthenticationError = Error & {
  __typename?: 'UserLoginAuthenticationError';
  message: Scalars['String'];
};

export type UserLoginError = UserLoginAuthenticationError | UserLoginInvalidInputError;

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserLoginInvalidInputError = Error & {
  __typename?: 'UserLoginInvalidInputError';
  field: UserLoginInvalidInputField;
  message: Scalars['String'];
};

export enum UserLoginInvalidInputField {
  Email = 'EMAIL',
  Password = 'PASSWORD'
}

export type UserLoginPayload = {
  __typename?: 'UserLoginPayload';
  user?: Maybe<User>;
  userErrors: Array<UserLoginError>;
};

export type UserRegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserRegisterInvalidInputError = Error & {
  __typename?: 'UserRegisterInvalidInputError';
  field: UserRegisterInvalidInputField;
  message: Scalars['String'];
};

export enum UserRegisterInvalidInputField {
  Email = 'EMAIL',
  Name = 'NAME',
  Password = 'PASSWORD'
}

export type UserRegisterPayload = {
  __typename?: 'UserRegisterPayload';
  user?: Maybe<User>;
  userErrors: Array<UserRegisterInvalidInputError>;
};

export type ApplicantInput = {
  message: Scalars['String'];
};

export type CreateMessageInput = {
  content: Scalars['String'];
};

export type CreateTagInput = {
  name: Scalars['String'];
};

export type PaginationInput = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<SearchRecruitmentInput>;
};

export type RecruitmentInput = {
  closingAt?: InputMaybe<Scalars['DateTime']>;
  competitionId: Scalars['String'];
  detail?: InputMaybe<Scalars['String']>;
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
  isNew: Scalars['Boolean'];
  name: Scalars['String'];
};

export type SearchRecruitmentInput = {
  competitionId?: InputMaybe<Scalars['String']>;
  prefectureId?: InputMaybe<Scalars['String']>;
  startAt?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CheckAppliedForRecruitmentQueryVariables = Exact<{
  recruitmentId: Scalars['String'];
}>;


export type CheckAppliedForRecruitmentQuery = { __typename?: 'Query', checkAppliedForRecruitment: boolean };

export type ApplyForRecruitmentMutationVariables = Exact<{
  recruitmentId: Scalars['String'];
  applicantInput?: InputMaybe<ApplicantInput>;
}>;


export type ApplyForRecruitmentMutation = { __typename?: 'Mutation', applyForRecruitment: boolean };

export type GetCompetitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompetitionsQuery = { __typename?: 'Query', getCompetitions: Array<{ __typename?: 'Competition', id: string, name: string }> };

export type GetEntrieUserQueryVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type GetEntrieUserQuery = { __typename?: 'Query', getEntrieUser: { __typename?: 'User', id: string, name: string, avatar: string } };

export type GetRoomMessagesQueryVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type GetRoomMessagesQuery = { __typename?: 'Query', getRoomMessages: Array<{ __typename?: 'Message', content?: string | null, user: { __typename?: 'User', name: string, avatar: string }, applicant?: { __typename?: 'Applicant', message: string, recruitment: { __typename?: 'Recruitment', title: string, startAt?: any | null, type: Type, prefecture?: { __typename?: 'Prefecture', name: string } | null, competition?: { __typename?: 'Competition', name: string } | null } } | null }> };

export type CreateMessageMutationVariables = Exact<{
  roomId: Scalars['String'];
  createMessageInput: CreateMessageInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', content?: string | null } };

export type GetPrefecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPrefecturesQuery = { __typename?: 'Query', getPrefectures: Array<{ __typename?: 'Prefecture', id: string, name: string }> };

export type GetRecruitmentsQueryVariables = Exact<{
  paginationInput: PaginationInput;
}>;


export type GetRecruitmentsQuery = { __typename?: 'Query', getRecruitments: { __typename?: 'RecruitmentConnection', pageInfo: { __typename?: 'PageInfo', startCursor: string, endCursor: string, hasNextPage: boolean, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'RecruitmentEdge', cursor: string, node: { __typename?: 'Recruitment', id: string, title: string, type: Type, status: Status, publishedAt?: any | null, closingAt?: any | null, user: { __typename?: 'User', name: string, avatar: string }, prefecture?: { __typename?: 'Prefecture', name: string } | null, competition?: { __typename?: 'Competition', name: string } | null } }> } };

export type GetRecruitmentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetRecruitmentQuery = { __typename?: 'Query', getRecruitment: { __typename?: 'Recruitment', id: string, title: string, type: Type, status: Status, place?: string | null, startAt?: any | null, detail?: string | null, closingAt?: any | null, locationLat?: number | null, locationLng?: number | null, competition?: { __typename?: 'Competition', id: string, name: string } | null, prefecture?: { __typename?: 'Prefecture', id: string, name: string } | null, user: { __typename?: 'User', id: string, name: string, avatar: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string } | null> } };

export type GetEditRecruitmentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetEditRecruitmentQuery = { __typename?: 'Query', getRecruitment: { __typename?: 'Recruitment', id: string, title: string, type: Type, place?: string | null, startAt?: any | null, detail?: string | null, closingAt?: any | null, locationLat?: number | null, locationLng?: number | null, status: Status, competition?: { __typename?: 'Competition', id: string, name: string } | null, prefecture?: { __typename?: 'Prefecture', id: string, name: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string } | null> } };

export type GetCurrentUserRecruitmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserRecruitmentsQuery = { __typename?: 'Query', getCurrentUserRecruitments: Array<{ __typename?: 'Recruitment', id: string, title: string, status: Status, type: Type, closingAt?: any | null, createdAt: any, publishedAt?: any | null, competition?: { __typename?: 'Competition', id: string, name: string } | null }> };

export type GetAppliedRecruitmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAppliedRecruitmentsQuery = { __typename?: 'Query', getAppliedRecruitments: Array<{ __typename?: 'Recruitment', id: string, title: string, applicant?: { __typename?: 'Applicant', createdAt: any } | null, user: { __typename?: 'User', id: string, name: string, avatar: string } }> };

export type GetStockedRecruitmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStockedRecruitmentsQuery = { __typename?: 'Query', getStockedRecruitments: Array<{ __typename?: 'Recruitment', id: string, title: string, closingAt?: any | null, user: { __typename?: 'User', id: string, name: string, avatar: string } }> };

export type CreateRecruitmentMutationVariables = Exact<{
  recruitmentInput: RecruitmentInput;
}>;


export type CreateRecruitmentMutation = { __typename?: 'Mutation', createRecruitment: { __typename?: 'Recruitment', id: string, title: string } };

export type UpdateRecruitmentMutationVariables = Exact<{
  id: Scalars['String'];
  recruitmentInput: RecruitmentInput;
}>;


export type UpdateRecruitmentMutation = { __typename?: 'Mutation', updateRecruitment: { __typename?: 'Recruitment', id: string, title: string } };

export type DeleteRecruitmentMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteRecruitmentMutation = { __typename?: 'Mutation', deleteRecruitment: { __typename?: 'Recruitment', id: string, title: string } };

export type GetCurrentUserRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserRoomsQuery = { __typename?: 'Query', getCurrentUserRooms: Array<{ __typename?: 'Room', id: string, entrie: { __typename?: 'Entrie', user: { __typename?: 'User', name: string, avatar: string } } }> };

export type CheckStockedQueryVariables = Exact<{
  recruitmentId: Scalars['String'];
}>;


export type CheckStockedQuery = { __typename?: 'Query', checkStocked: boolean };

export type CreateStockMutationVariables = Exact<{
  recruitmentId: Scalars['String'];
}>;


export type CreateStockMutation = { __typename?: 'Mutation', createStock: boolean };

export type DeleteStockMutationVariables = Exact<{
  recruitmentId: Scalars['String'];
}>;


export type DeleteStockMutation = { __typename?: 'Mutation', deleteStock: boolean };

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = { __typename?: 'Query', getTags: Array<{ __typename?: 'Tag', id: string, name: string }> };

export type CreateTagMutationVariables = Exact<{
  createTagInput: CreateTagInput;
}>;


export type CreateTagMutation = { __typename?: 'Mutation', createTag: { __typename?: 'Tag', id: string, name: string } };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser?: { __typename?: 'User', id: string, name: string, email: string, role: Role, avatar: string, introduction?: string | null, emailVerificationStatus: EmailVerificationStatus } | null };


export const CheckAppliedForRecruitmentDocument = gql`
    query CheckAppliedForRecruitment($recruitmentId: String!) {
  checkAppliedForRecruitment(recruitmentId: $recruitmentId)
}
    `;

export function useCheckAppliedForRecruitmentQuery(options: Omit<Urql.UseQueryArgs<CheckAppliedForRecruitmentQueryVariables>, 'query'>) {
  return Urql.useQuery<CheckAppliedForRecruitmentQuery>({ query: CheckAppliedForRecruitmentDocument, ...options });
};
export const ApplyForRecruitmentDocument = gql`
    mutation ApplyForRecruitment($recruitmentId: String!, $applicantInput: applicantInput) {
  applyForRecruitment(recruitmentId: $recruitmentId, input: $applicantInput)
}
    `;

export function useApplyForRecruitmentMutation() {
  return Urql.useMutation<ApplyForRecruitmentMutation, ApplyForRecruitmentMutationVariables>(ApplyForRecruitmentDocument);
};
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
    query GetRecruitments($paginationInput: paginationInput!) {
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
        publishedAt
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

export function useGetRecruitmentsQuery(options: Omit<Urql.UseQueryArgs<GetRecruitmentsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRecruitmentsQuery>({ query: GetRecruitmentsDocument, ...options });
};
export const GetRecruitmentDocument = gql`
    query GetRecruitment($id: String!) {
  getRecruitment(id: $id) {
    id
    title
    type
    status
    place
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
export const GetEditRecruitmentDocument = gql`
    query GetEditRecruitment($id: String!) {
  getRecruitment(id: $id) {
    id
    title
    type
    place
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
    locationLat
    locationLng
    status
    tags {
      id
      name
    }
  }
}
    `;

export function useGetEditRecruitmentQuery(options: Omit<Urql.UseQueryArgs<GetEditRecruitmentQueryVariables>, 'query'>) {
  return Urql.useQuery<GetEditRecruitmentQuery>({ query: GetEditRecruitmentDocument, ...options });
};
export const GetCurrentUserRecruitmentsDocument = gql`
    query GetCurrentUserRecruitments {
  getCurrentUserRecruitments {
    id
    title
    status
    type
    closingAt
    createdAt
    publishedAt
    competition {
      id
      name
    }
  }
}
    `;

export function useGetCurrentUserRecruitmentsQuery(options?: Omit<Urql.UseQueryArgs<GetCurrentUserRecruitmentsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCurrentUserRecruitmentsQuery>({ query: GetCurrentUserRecruitmentsDocument, ...options });
};
export const GetAppliedRecruitmentsDocument = gql`
    query GetAppliedRecruitments {
  getAppliedRecruitments {
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
export const GetStockedRecruitmentsDocument = gql`
    query GetStockedRecruitments {
  getStockedRecruitments {
    id
    title
    closingAt
    user {
      id
      name
      avatar
    }
  }
}
    `;

export function useGetStockedRecruitmentsQuery(options?: Omit<Urql.UseQueryArgs<GetStockedRecruitmentsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetStockedRecruitmentsQuery>({ query: GetStockedRecruitmentsDocument, ...options });
};
export const CreateRecruitmentDocument = gql`
    mutation CreateRecruitment($recruitmentInput: recruitmentInput!) {
  createRecruitment(input: $recruitmentInput) {
    id
    title
  }
}
    `;

export function useCreateRecruitmentMutation() {
  return Urql.useMutation<CreateRecruitmentMutation, CreateRecruitmentMutationVariables>(CreateRecruitmentDocument);
};
export const UpdateRecruitmentDocument = gql`
    mutation UpdateRecruitment($id: String!, $recruitmentInput: recruitmentInput!) {
  updateRecruitment(id: $id, input: $recruitmentInput) {
    id
    title
  }
}
    `;

export function useUpdateRecruitmentMutation() {
  return Urql.useMutation<UpdateRecruitmentMutation, UpdateRecruitmentMutationVariables>(UpdateRecruitmentDocument);
};
export const DeleteRecruitmentDocument = gql`
    mutation DeleteRecruitment($id: String!) {
  deleteRecruitment(id: $id) {
    id
    title
  }
}
    `;

export function useDeleteRecruitmentMutation() {
  return Urql.useMutation<DeleteRecruitmentMutation, DeleteRecruitmentMutationVariables>(DeleteRecruitmentDocument);
};
export const GetCurrentUserRoomsDocument = gql`
    query GetCurrentUserRooms {
  getCurrentUserRooms {
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

export function useGetCurrentUserRoomsQuery(options?: Omit<Urql.UseQueryArgs<GetCurrentUserRoomsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCurrentUserRoomsQuery>({ query: GetCurrentUserRoomsDocument, ...options });
};
export const CheckStockedDocument = gql`
    query CheckStocked($recruitmentId: String!) {
  checkStocked(recruitmentId: $recruitmentId)
}
    `;

export function useCheckStockedQuery(options: Omit<Urql.UseQueryArgs<CheckStockedQueryVariables>, 'query'>) {
  return Urql.useQuery<CheckStockedQuery>({ query: CheckStockedDocument, ...options });
};
export const CreateStockDocument = gql`
    mutation CreateStock($recruitmentId: String!) {
  createStock(recruitmentId: $recruitmentId)
}
    `;

export function useCreateStockMutation() {
  return Urql.useMutation<CreateStockMutation, CreateStockMutationVariables>(CreateStockDocument);
};
export const DeleteStockDocument = gql`
    mutation DeleteStock($recruitmentId: String!) {
  deleteStock(recruitmentId: $recruitmentId)
}
    `;

export function useDeleteStockMutation() {
  return Urql.useMutation<DeleteStockMutation, DeleteStockMutationVariables>(DeleteStockDocument);
};
export const GetTagsDocument = gql`
    query GetTags {
  getTags {
    id
    name
  }
}
    `;

export function useGetTagsQuery(options?: Omit<Urql.UseQueryArgs<GetTagsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetTagsQuery>({ query: GetTagsDocument, ...options });
};
export const CreateTagDocument = gql`
    mutation CreateTag($createTagInput: createTagInput!) {
  createTag(input: $createTagInput) {
    id
    name
  }
}
    `;

export function useCreateTagMutation() {
  return Urql.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument);
};
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  getCurrentUser {
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

export function useGetCurrentUserQuery(options?: Omit<Urql.UseQueryArgs<GetCurrentUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCurrentUserQuery>({ query: GetCurrentUserDocument, ...options });
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
            "name": "UserLoginAuthenticationError"
          },
          {
            "kind": "OBJECT",
            "name": "UserLoginInvalidInputError"
          },
          {
            "kind": "OBJECT",
            "name": "UserRegisterInvalidInputError"
          }
        ]
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
            "name": "UserLogout",
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
            "name": "deleteRecruitment",
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
          },
          {
            "name": "userLogin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserLoginPayload",
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
            "name": "userRegister",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserRegisterPayload",
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
            "name": "checkAppliedForRecruitment",
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
            "name": "getCurrentUserRooms",
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
              "kind": "OBJECT",
              "name": "Competition",
              "ofType": null
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
            "name": "databaseId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
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
        "kind": "OBJECT",
        "name": "UserLoginAuthenticationError",
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
        "name": "UserLoginError",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UserLoginAuthenticationError"
          },
          {
            "kind": "OBJECT",
            "name": "UserLoginInvalidInputError"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UserLoginInvalidInputError",
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
        "name": "UserLoginPayload",
        "fields": [
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
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
                    "name": "UserLoginError",
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
        "name": "UserRegisterInvalidInputError",
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
        "name": "UserRegisterPayload",
        "fields": [
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
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
                    "name": "UserRegisterInvalidInputError",
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
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;