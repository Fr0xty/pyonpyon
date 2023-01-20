import { Client, IntentsBitField } from 'discord.js';

/**
 * build client instance
 */
const PyonPyon = new Client({ intents: IntentsBitField.Flags.AutoModerationConfiguration });

/**
 * export the client
 */
export default PyonPyon;
