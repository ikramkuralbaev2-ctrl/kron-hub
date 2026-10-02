const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Xush kelibsiz! KRON Ekotizim portaliga xush kelibsiz.'));
bot.help((ctx) => ctx.reply('Sizga qanday yordam berishim mumkin?'));
bot.on('text', (ctx) => ctx.reply(`Siz yubordingiz: ${ctx.message.text}`));

module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await bot.handleUpdate(req.body);
            res.status(200).send('OK');
        } else {
            res.status(200).send('KRON Bot 24/7 rejimda ishlamoqda!');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
};
