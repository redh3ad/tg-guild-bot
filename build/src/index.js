"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("./bot"));
const production = async (bot) => {
    try {
        await bot.api.setWebhook(`${process.env.VERCEL_URL}/api/index`);
        console.log(`[SERVER] Bot starting webhook`);
    }
    catch (e) {
        console.error(e);
    }
};
production(bot_1.default);
