import 'dotenv/config';
import eventLoader from './utils/eventLoader.js';
import PyonPyon from './res/client.js';

eventLoader();

PyonPyon.login(process.env.DISCORD_CLIENT_TOKEN);
