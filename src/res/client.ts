import { Client, IntentsBitField } from 'discord.js';

/**
 * build client instance
 */
const PyonPyon = new Client({
    intents: [
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildEmojisAndStickers,
        IntentsBitField.Flags.Guilds,
    ],
});

PyonPyon.color = '#5e94f7';

/**
 * export the client
 */
export default PyonPyon;
