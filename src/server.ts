import express from 'express';
import { connectDatabase } from './infrastructure/database/mongoose';
import { setupGraphQLServer } from './interface/routes/graphql';
import { config } from 'dotenv';

config();

const app = express();
const port = process.env.PORT || 5000;
const host = '0.0.0.0';

const startServer = async () => {
  await connectDatabase();
  await setupGraphQLServer(app);

  app.listen({ port, host }, () => {
    console.log(`Server ready at http://localhost:${port}/graphql`);
  });
};

startServer().catch(err => {
  console.error(err);
  process.exit(1);
});
