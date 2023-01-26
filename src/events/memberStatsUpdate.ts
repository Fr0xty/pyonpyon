import type { GuildMember, PartialGuildMember } from 'discord.js';
import PyonPyon from '../res/client.js';
import { updateServerStats } from '../utils/serverStatsHelper.js';

const memberStatsUpdateFunction = async (member: GuildMember | PartialGuildMember) => {
    /**
     * only target Pyon Pyon server
     */
    if (member.guild.id !== PyonPyon.guild.id) return;

    await updateServerStats({
        member: member.guild.memberCount,
    });
};

PyonPyon.on('guildMemberAdd', memberStatsUpdateFunction);
PyonPyon.on('guildMemberRemove', memberStatsUpdateFunction);
