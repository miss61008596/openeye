'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getToken = getToken;

var _objects = require('../objects');

function getToken() {
    var token = require('crypto').randomBytes(10).toString('hex');
    var message = new _objects.Message();
    message.type = "info";
    message.code = "00001";
    message.content = "this is a message test xiaoxiao";
    console.log("token_test");
    console.log(token);
    // return new Token(token);
    return message;
} /**
   * Created by zhubg on 2017/5/14.
   */