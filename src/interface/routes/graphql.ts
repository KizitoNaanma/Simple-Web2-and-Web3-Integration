import { ApolloServer } from 'apollo-server-express';
import { resolvers } from '../controllers/user.resolver';
import { typeDefs } from '../controllers/schema';

export const setupGraphQLServer = async (app: any) => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });
};
