const TelegramBot = require('node-telegram-bot-api');
const token = '';


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

bot.onText(/\/расписание/, (msg, match) => {
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

    switch (query.data) {
        case 'monday':
            bot.sendPhoto(chatId, 'media/monday.png')
            break;
        case 'tuesday':
            bot.sendPhoto(chatId, 'media/tuesday.png')
            break;

        case 'wensday':
            bot.sendPhoto(chatId, 'media/wensday.png')
            break;

        case 'thursday':
            bot.sendPhoto(chatId, 'media/thursday.png')
            break;

        case 'friday':
            bot.sendPhoto(chatId, 'media/friday.png')
            break;

        case 'saturday':
            bot.sendPhoto(chatId, 'media/saturday.png')
            break;
        default:
            alert: 'ldlld'
    }
});