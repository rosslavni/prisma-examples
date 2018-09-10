"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-lib");
var typeDefs = require("./graphql").typeDefs

exports.Prisma = prisma_lib_1.makePrismaBindingClass({typeDefs, endpoint: 'http://localhost:4466'});
exports.prisma = new exports.Prisma();
