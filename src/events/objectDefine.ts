import 'dotenv/config';
import PyonPyon from '../res/client.js';
import type { ClientStatsChannels } from 'discord.js';

PyonPyon.on('ready', async () => {
    PyonPyon.guild = await PyonPyon.guilds.fetch(process.env.PYONPYON_GUILD_ID!);

    PyonPyon.statsChannels = {
        members: await PyonPyon.guild.channels.fetch(process.env.MEMBER_STAT_CHANNEL_ID!),
        emojis: await PyonPyon.guild.channels.fetch(process.env.EMOJI_STAT_CHANNEL_ID!),
        roles: await PyonPyon.guild.channels.fetch(process.env.ROLE_STAT_CHANNEL_ID!),
    } as ClientStatsChannels;

    /**
     * initial stats update
     */
    await PyonPyon.statsChannels.members.setName(`members: ${PyonPyon.guild.memberCount}`);
    await PyonPyon.statsChannels.emojis.setName(`emojis: ${(await PyonPyon.guild.emojis.fetch()).size}`);
    await PyonPyon.statsChannels.roles.setName(`roles: ${(await PyonPyon.guild.roles.fetch()).size}`);
});
