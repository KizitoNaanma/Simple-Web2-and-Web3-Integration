import { UserService } from '../../infrastructure/repositories/user.service';
import { contract } from '../../utils/contract';
import { loadEnvironment } from '../../utils/environment';

loadEnvironment();

export const resolvers = {
  Query: {
    users: async () => {
      return await UserService.findAll();
    },
    getCount: async () => {
      const count = await contract.getCount();
      return count.toNumber();
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email }: { name: string; email: string }) => {
      return await UserService.create({ name, email });
    },
    incrementCounter: async () => {
      const tx = await contract.increment();
      await tx.wait();
      const count = await contract.getCount();
      return count.toNumber();
    },
  },
};
