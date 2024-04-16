"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greetingsWithBot = async (ctx) => {
    var _a, _b;
    if ((_a = ctx.msg) === null || _a === void 0 ? void 0 : _a.message_id) {
        if (((_b = ctx.from) === null || _b === void 0 ? void 0 : _b.id) === Number(process.env.TG_ADMIN_ID)) {
            await ctx.reply('Приветствую Вас, Создатель!', {
                reply_parameters: { message_id: ctx.msg.message_id },
            });
        }
        else {
            await ctx.reply('Здравствуй раб', {
                reply_parameters: { message_id: ctx.msg.message_id },
            });
        }
    }
};
exports.default = greetingsWithBot;
