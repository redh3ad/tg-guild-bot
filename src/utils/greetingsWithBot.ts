import { Context } from 'grammy';

const greetingsWithBot = async (ctx: Context) => {
  if (ctx.msg?.message_id) {
    if (ctx.from?.id === Number(process.env.TG_ADMIN_ID)) {
      await ctx.reply('Приветствую Вас, Создатель!', {
        reply_parameters: { message_id: ctx.msg.message_id },
      });
    } else {
      await ctx.reply('Здравствуй раб', {
        reply_parameters: { message_id: ctx.msg.message_id },
      });
    }
  }
};

export default greetingsWithBot;
