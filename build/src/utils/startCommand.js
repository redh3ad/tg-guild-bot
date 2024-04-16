"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_schedule_1 = __importDefault(require("node-schedule"));
const startCommand = async (ctx, bot) => {
    await ctx.reply('Бот гильдии "Вальхалла" приветствует тебя!');
    node_schedule_1.default.scheduleJob({ hour: 13, minute: 50, dayOfWeek: 2 }, async function () {
        if (ctx.chat) {
            await bot.api.sendMessage(ctx.chat.id, '☠️ Не забудьте нанести урон боссам Проклятого мира и Коридора кошмаров. У вас осталось всего три часа на это.');
        }
    });
};
exports.default = startCommand;
