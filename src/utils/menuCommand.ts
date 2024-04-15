import { Bot, Context, InlineKeyboard } from 'grammy';
import { botContextType } from '../types';

const menuKeyboard = new InlineKeyboard()
  .text('Гайды', 'guides')
  .row()
  .text('Навигация', 'navigation')
  .row()
  .url('Симулятор астрозала🎰', 'https://t.me/c/1543899602/330969');

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
  .url(
    'Тир-лист героев',
    'https://docs.google.com/spreadsheets/d/14JyRBKyw6tKKtb_fYpxVJWOpaN6g28TilJXLTpQQY50/edit#gid=0',
  )
  .row()
  .text('Назад', 'back');

const navigationKeyboard = new InlineKeyboard()
  .url('Навигация по Охоте', 'https://t.me/c/1543899602/158568/249646')
  .row()
  .url('Пачки КК, ПМ, ИМ и Разлома', 'https://t.me/c/1543899602/149922/204495')
  .row()
  .url('Вопросы по игре', 'https://t.me/c/1543899602/170976')
  .row()
  .text('Назад', 'back');

export const menuCommand = async (ctx: Context, bot: Bot<botContextType>) => {
  await ctx.reply('Выберите пункт из меню:', {
    reply_markup: menuKeyboard,
  });
};

export const guidesCommand = async (ctx: Context) => {
  await ctx.editMessageText('Гайды и коды:', {
    reply_markup: guidesKeyboard,
  });
  await ctx.answerCallbackQuery();
};

export const navigationCommand = async (ctx: Context) => {
  await ctx.editMessageText('Навигация по группе:', {
    reply_markup: navigationKeyboard,
  });
  await ctx.answerCallbackQuery();
};

export const backCommand = async (ctx: Context) => {
  await ctx.editMessageText('Выберите пункт из меню:', {
    reply_markup: menuKeyboard,
  });
  await ctx.answerCallbackQuery();
};
