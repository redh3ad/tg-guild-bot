import { Bot, Context, InlineKeyboard } from 'grammy';
import { botContextType } from '../types';

const menuKeyboard = new InlineKeyboard().text('Гайды', 'guides');
const backKeyboard = new InlineKeyboard().text('Назад', 'back');
const guidesKeyboard = new InlineKeyboard()
  .url('Бот активации кодов возмещения', 'https://t.me/AFKArenaHelper_bot')
  .row()
  .url('Канал с нашими гайдами', 'https://t.me/no9bD')
  .row()
  .url(
    'Гайды в гугл таблице',
    'https://docs.google.com/spreadsheets/d/1vQAVmmKoshyyrR68OGFBqE1ddoy2emqeSZmNr-Md0dA/edit?usp=sharing',
  )
  .row()
  .url('Навигация по Охоте', 'https://t.me/c/1543899602/158568/249646')
  .row()
  .url('Пачки КК, ПМ, ИМ и Разлома', 'https://t.me/c/1543899602/149922/204495')
  .row()
  .text('Назад', 'back');

export const menuCommand = async (ctx: Context, bot: Bot<botContextType>) => {
  await ctx.reply('Выберите пункт из меню:', {
    reply_markup: menuKeyboard,
  });
};

export const guidesCommand = async (ctx: Context) => {
  await ctx.editMessageText('Полезные ссылки:', {
    reply_markup: guidesKeyboard,
  });
  await ctx.answerCallbackQuery();
};

export const backCommand = async (ctx: Context) => {
  await ctx.editMessageText('Выберите пункт из меню:', {
    reply_markup: menuKeyboard,
  });
  await ctx.answerCallbackQuery();
};
