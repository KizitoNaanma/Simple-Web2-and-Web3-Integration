"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnvironment = void 0;
const dotenv_1 = require("dotenv");
const loadEnvironment = () => {
    (0, dotenv_1.config)();
};
exports.loadEnvironment = loadEnvironment;
//# sourceMappingURL=environment.js.map