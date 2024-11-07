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
exports.resolvers = void 0;
const user_service_1 = require("../../infrastructure/repositories/user.service");
const contract_1 = require("../../utils/contract");
const environment_1 = require("../../utils/environment");
(0, environment_1.loadEnvironment)();
exports.resolvers = {
    Query: {
        users: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield user_service_1.UserService.findAll();
        }),
        getCount: () => __awaiter(void 0, void 0, void 0, function* () {
            const count = yield contract_1.contract.getCount();
            return count.toNumber();
        }),
    },
    Mutation: {
        createUser: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { name, email }) {
            return yield user_service_1.UserService.create({ name, email });
        }),
        incrementCounter: () => __awaiter(void 0, void 0, void 0, function* () {
            const tx = yield contract_1.contract.increment();
            yield tx.wait();
            const count = yield contract_1.contract.getCount();
            return count.toNumber();
        }),
    },
};
//# sourceMappingURL=user.resolver.js.map