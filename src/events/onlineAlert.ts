import { ActivityType } from 'discord.js';
import PyonPyon from '../res/client.js';

PyonPyon.on('ready', (client) => {
    console.log(`${client.user.tag} is online.`);

    client.user.setActivity({
        type: ActivityType.Watching,
        name: 'over Pyon Pyon',
    });
});
