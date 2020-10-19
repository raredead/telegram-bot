const TelegramBot = require('node-telegram-bot-api');
const token = '1348860870:AAGBAx3mCNgUbhMEMHnKQCa72OoUVgflAuA';


const bot = new TelegramBot(token, { polling: true });

const keyboard = [
    [{
        text: 'Понедельник',
        callback_data: 'monday'
    }],
    [{
        text: 'Вторник',
        callback_data: 'tuesday'
    }],
    [{
        text: 'Среда',
        callback_data: 'wensday'
    }],
    [{
        text: 'Четверг',
        callback_data: 'thursday'
    }],
    [{
        text: 'Пятница',
        callback_data: 'friday'
    }],
    [{
        text: 'Суббота',
        callback_data: 'saturday'
    }]
];

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendPhoto(chatId, 'media/main.png', {
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    let img = '';

    if (query.data === 'monday') {
        img = 'media/monday.png';
    }
    if (query.data === 'tuesday') {
        img = 'media/tuesday.png';
    }
    if (query.data === 'wensday') {
        img = 'media/wensday.png';
    }
    if (query.data === 'thursday') {
        img = 'media/thursday.png';
    }
    if (query.data === 'friday') {
        img = 'media/friday.png';
    }
    if (query.data === 'saturday') {
        img = 'media/saturday.png';
    }
    if (img) {
        bot.sendPhoto(chatId, img, {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } else {
        bot.sendMessage(chatId, 'Давайте попробуем еще раз?', {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }
});