import { ApolloServer } from 'apollo-server-express';
import { resolvers } from '../controllers/user.resolver';
import { typeDefs } from '../controllers/schema';

export const setupGraphQLServer = async (app: any) => {
  const server = new ApolloServer({ typeDefs, resolvers, playground: true, introspection: true });

  await server.start();
  server.applyMiddleware({ app });
};
