import 'dotenv/config';
import PyonPyon from '../res/client.js';
import type { TextChannel } from 'discord.js';
import { updateServerStats } from '../utils/serverStatsHelper.js';

PyonPyon.on('ready', async () => {
    /**
     * pyon pyon server
     */
    PyonPyon.guild = await PyonPyon.guilds.fetch(process.env.PYONPYON_GUILD_ID!);

    /**
     * store pyon pyon server info
     */
    const statsChannel = (await PyonPyon.guild.channels.fetch(process.env.SERVER_ANALYTICS_CHANNEL_ID!)) as TextChannel;

    PyonPyon.serverStatistics = {
        channel: statsChannel,

        message: await statsChannel.messages.fetch(process.env.SERVER_ANALYTICS_MESSAGE_ID!),

        data: {
            member: PyonPyon.guild.memberCount,
            emoji: (await PyonPyon.guild.emojis.fetch()).size,
            role: (await PyonPyon.guild.roles.fetch()).size,
            boost: PyonPyon.guild.premiumSubscriptionCount ?? 0,
        },
    };

    /**
     * initial stats update
     */
    await updateServerStats();
});
