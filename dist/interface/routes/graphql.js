"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupGraphQLServer = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const user_resolver_1 = require("../controllers/user.resolver");
const schema_1 = require("../controllers/schema");
const setupGraphQLServer = (app) => __awaiter(void 0, void 0, void 0, function* () {
    const server = new apollo_server_express_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: user_resolver_1.resolvers });
    yield server.start();
    server.applyMiddleware({ app });
});
exports.setupGraphQLServer = setupGraphQLServer;
//# sourceMappingURL=graphql.js.map