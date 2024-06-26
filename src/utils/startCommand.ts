import { Bot, Context } from 'grammy';
import schedule from 'node-schedule';
import { botContextType } from '../types';

const startCommand = async (ctx: Context, bot: Bot<botContextType>) => {
  await ctx.reply('Бот гильдии "Вальхалла" приветствует тебя!');
  schedule.scheduleJob(
    { hour: 12, minute: 0, dayOfWeek: 1 },
    async function () {
      if (ctx.chat) {
        await bot.api.sendMessage(
          ctx.chat.id,
          '☠️ Не забудьте нанести урон боссам Проклятого мира и Коридора кошмаров. У вас осталось всего три часа на это.',
        );
      }
    },
  );
};

export default startCommand;
