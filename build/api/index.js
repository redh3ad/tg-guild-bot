"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot_1 = __importDefault(require("../src/bot"));
exports.default = (0, grammy_1.webhookCallback)(bot_1.default, 'http');
