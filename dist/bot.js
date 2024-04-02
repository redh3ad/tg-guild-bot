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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const grammy_1 = require("grammy");
const node_schedule_1 = __importDefault(require("node-schedule"));
dotenv_1.default.config();
const bot = new grammy_1.Bot(process.env.BOT_API_KEY);
bot.api.setMyCommands([{ command: 'start', description: 'Запуск бота' }]);
bot.command('start', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply('Бот гильдии "Вальхалла" приветствует тебя!');
    node_schedule_1.default.scheduleJob({ hour: 12, minute: 0, dayOfWeek: 1 }, function () {
        bot.api.sendMessage(ctx.chat.id, '☠️ Не забудь нанести урон боссам Проклятого мира и Коридора кошмаров. У тебя осталось всего три часа на это.');
    });
}));
bot.hears('привет бот', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id) === 442877184) {
        yield ctx.reply('Приветствую Вас, Создатель!', {
            reply_parameters: { message_id: ctx.msg.message_id },
        });
    }
    else {
        yield ctx.reply('Здравствуй раб', {
            reply_parameters: { message_id: ctx.msg.message_id },
        });
    }
}));
bot.on('message', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    if ((_b = ctx.message) === null || _b === void 0 ? void 0 : _b.new_chat_members) {
        yield ctx.reply(`<b>Добро пожаловать в гильдию "Вальхалла"</b>\n${ctx.message.new_chat_members[0].first_name} (@${ctx.message.new_chat_members[0].username})\nНе забудь написать свой игровой ник в чате!\nЕсли тебе нужна помощь по игре, то в разделе "Важное" есть ссылки на гайды, а также можешь попросить совета в чате.`, { parse_mode: 'HTML' });
    }
    if (ctx.message.left_chat_member) {
        yield ctx.reply(`Всего хо-ро-ше-го, ${ctx.message.left_chat_member.first_name} (@${ctx.message.left_chat_member.username})!`);
    }
}));
bot.start();
// 442877184
