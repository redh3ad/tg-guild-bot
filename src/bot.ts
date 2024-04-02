import dotenv from 'dotenv';
import { Bot } from 'grammy';
import schedule from 'node-schedule';

dotenv.config();
const bot = new Bot(process.env.BOT_API_KEY!);

bot.api.setMyCommands([{ command: 'start', description: 'Запуск бота' }]);

bot.command('start', async ctx => {
  await ctx.reply('Бот гильдии "Вальхалла" приветствует тебя!');
  schedule.scheduleJob({ hour: 12, minute: 0, dayOfWeek: 1 }, function () {
    bot.api.sendMessage(
      ctx.chat.id,
      '☠️ Не забудь нанести урон боссам Проклятого мира и Коридора кошмаров. У тебя осталось всего три часа на это.',
    );
  });
});

bot.hears('привет бот', async ctx => {
  if (ctx.from?.id === 442877184) {
    await ctx.reply('Приветствую Вас, Создатель!', {
      reply_parameters: { message_id: ctx.msg.message_id },
    });
  } else {
    await ctx.reply('Здравствуй раб', {
      reply_parameters: { message_id: ctx.msg.message_id },
    });
  }
});

bot.on('message', async ctx => {
  if (ctx.message?.new_chat_members) {
    await ctx.reply(
      `<b>Добро пожаловать в гильдию "Вальхалла"</b>\n${ctx.message.new_chat_members[0].first_name} (@${ctx.message.new_chat_members[0].username})\nНе забудь написать свой игровой ник в чате!\nЕсли тебе нужна помощь по игре, то в разделе "Важное" есть ссылки на гайды, а также можешь попросить совета в чате.`,
      { parse_mode: 'HTML' },
    );
  }
  if (ctx.message.left_chat_member) {
    await ctx.reply(
      `Всего хо-ро-ше-го, ${ctx.message.left_chat_member.first_name} (@${ctx.message.left_chat_member.username})!`,
    );
  }
});

bot.start();
// 442877184
