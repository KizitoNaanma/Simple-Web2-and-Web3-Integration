import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User]
    getCount: Int!
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    incrementCounter: Int!
  }
`;
