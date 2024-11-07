"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
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
//# sourceMappingURL=schema.js.map