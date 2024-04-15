import { hydrate } from '@grammyjs/hydrate';
import dotenv from 'dotenv';
import { Bot } from 'grammy';
import { botContextType } from './types';
import chatMembersEvents from './utils/chatMembersEvents';
import errorHandler from './utils/errorHandler';
import greetingsWithBot from './utils/greetingsWithBot';
import {
  backCommand,
  guidesCommand,
  menuCommand,
  navigationCommand,
} from './utils/menuCommand';
import startCommand from './utils/startCommand';

dotenv.config();

// connect api key
const bot = new Bot<botContextType>(process.env.BOT_API_KEY!);
bot.use(hydrate());
// bot commands
const botCommands = [
  { command: 'start', description: 'Запуск бота' },
  { command: 'menu', description: 'Меню' },
];
bot.api.setMyCommands(botCommands);
// command "start"
bot.command('start', ctx => startCommand(ctx, bot));
// command "menu"
bot.command('menu', ctx => menuCommand(ctx, bot));
bot.callbackQuery('back', ctx => backCommand(ctx));
bot.callbackQuery('guides', ctx => guidesCommand(ctx));
bot.callbackQuery('navigation', ctx => navigationCommand(ctx));
// greetings with bot
bot.hears('привет бот', ctx => greetingsWithBot(ctx));
// chat members events
bot.on('message', ctx => chatMembersEvents(ctx));
// error handler
bot.catch(err => errorHandler(err));
// start bot
bot.start();

export default bot;
