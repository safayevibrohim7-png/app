const TelegramBot = require('node-telegram-bot-api');
const token = '7841059570:AAFEPUTgf1MGoFZDOBKZNK5X8xvg7hTZJHA';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Iltimos tugmani bosing:', {
    reply_markup: {
      keyboard: [
        [
          {
            text: '📋 Dasturimni ochish',
            web_app: { url: 'https://app-2-lk2d.onrender.com/' } // sening veb-ilovang
          }
        ]
      ],
      resize_keyboard: true
    }
  });
});
