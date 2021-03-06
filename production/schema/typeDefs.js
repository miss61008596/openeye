/**
 * Created by zhubg on 2017/4/17.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var typeDefs = exports.typeDefs = '\n\n#\u5206\u9875\u6D88\u606F\ntype PageInfo {\n    endCursor: Int!\n    hasNextPage: Boolean!\n}\n\n#Message\ntype Message {\n    type: String!\n    code: String!\n    content: String!\n}\n\n#\u8F93\u5165\u7C7B\u578B\u5173\u952E\u5B57input\n\ntype Query {\n    getToken(id:ID!): Message!\n    getVedioList(offset: Int!,count: Int!, token: String!): Message!\n}\n\nschema {\n  query: Query\n}\n\n';