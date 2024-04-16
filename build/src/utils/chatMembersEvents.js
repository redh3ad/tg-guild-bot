"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chatMembersEvents = async (ctx) => {
    var _a, _b;
    if ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.new_chat_members) {
        await ctx.reply(`<b>Добро пожаловать в гильдию "Вальхалла"</b>\n${ctx.message.new_chat_members[0].first_name} (@${ctx.message.new_chat_members[0].username})\nНе забудь написать свой игровой ник в чате!\nЕсли тебе нужна помощь по игре, то в разделе "Важное" есть ссылки на гайды, а также можешь попросить совета в чате.`, { parse_mode: 'HTML' });
    }
    if ((_b = ctx.message) === null || _b === void 0 ? void 0 : _b.left_chat_member) {
        await ctx.reply(`Всего хо-ро-ше-го, ${ctx.message.left_chat_member.first_name} (@${ctx.message.left_chat_member.username})!`);
    }
};
exports.default = chatMembersEvents;
