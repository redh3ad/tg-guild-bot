import { Context } from 'grammy';

const chatMembersEvents = async (ctx: Context) => {
  if (ctx.message?.new_chat_members) {
    await ctx.reply(
      `<b>Добро пожаловать в гильдию "Вальхалла"</b>\n${ctx.message.new_chat_members[0].first_name} (@${ctx.message.new_chat_members[0].username})\nНе забудь написать свой игровой ник в чате!\nЕсли тебе нужна помощь по игре, то в разделе "Важное" есть ссылки на гайды, а также можешь попросить совета в чате.`,
      { parse_mode: 'HTML' },
    );
  }
  if (ctx.message?.left_chat_member) {
    await ctx.reply(
      `Всего хо-ро-ше-го, ${ctx.message.left_chat_member.first_name} (@${ctx.message.left_chat_member.username})!`,
    );
  }
};

export default chatMembersEvents;
