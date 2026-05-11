import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
//db
import connectDB from './models/connectdb.js';
connectDB();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]     
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith('create')) {
        const url = message.content.split('create')[1];
        return message.reply({
            content: "Generating short ID for " + url
        });
    }
    message.reply({
        content: 'hello from bot!!'
    });
});

client.on('interactionCreate', interaction => { 
    interaction.reply('Pong!');
})

client.login("MTUwMjIzMzIxNDc3MTY2Mjk4OA.G0RvRF.xi6miMIKx0o1M6S5KN4vl-Qw329HbxIKTn7PE0");