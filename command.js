import { REST, Routes } from 'discord.js';

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!'
    }
];

const rest = new REST({ version: '10' }).setToken('MTUwMjIzMzIxNDc3MTY2Mjk4OA.G0RvRF.xi6miMIKx0o1M6S5KN4vl-Qw329HbxIKTn7PE0');

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands('1502233214771662988'),
            { body: commands }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();