"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hydrate_1 = require("@grammyjs/hydrate");
const dotenv_1 = __importDefault(require("dotenv"));
const grammy_1 = require("grammy");
const chatMembersEvents_1 = __importDefault(require("./utils/chatMembersEvents"));
const errorHandler_1 = __importDefault(require("./utils/errorHandler"));
const greetingsWithBot_1 = __importDefault(require("./utils/greetingsWithBot"));
const menuCommand_1 = require("./utils/menuCommand");
const startCommand_1 = __importDefault(require("./utils/startCommand"));
dotenv_1.default.config();
// connect api key
const bot = new grammy_1.Bot(process.env.BOT_API_KEY);
bot.use((0, hydrate_1.hydrate)());
// bot commands
const botCommands = [
    { command: 'start', description: 'Запуск бота' },
    { command: 'menu', description: 'Меню' },
];
bot.api.setMyCommands(botCommands);
// command "start"
bot.command('start', ctx => (0, startCommand_1.default)(ctx, bot));
// command "menu"
bot.command('menu', ctx => (0, menuCommand_1.menuCommand)(ctx, bot));
bot.callbackQuery('back', ctx => (0, menuCommand_1.backCommand)(ctx));
bot.callbackQuery('guides', ctx => (0, menuCommand_1.guidesCommand)(ctx));
bot.callbackQuery('navigation', ctx => (0, menuCommand_1.navigationCommand)(ctx));
// greetings with bot
bot.hears('привет бот', ctx => (0, greetingsWithBot_1.default)(ctx));
// chat members events
bot.on('message', ctx => (0, chatMembersEvents_1.default)(ctx));
// error handler
bot.catch(err => (0, errorHandler_1.default)(err));
// // start bot
// bot.start();
exports.default = bot;
