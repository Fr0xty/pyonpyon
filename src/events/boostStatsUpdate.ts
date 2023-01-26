import type { GuildMember, PartialGuildMember } from 'discord.js';
import PyonPyon from '../res/client.js';
import { updateServerStats } from '../utils/serverStatsHelper.js';

const boostStatsUpdate = async (
    oldMember: GuildMember | PartialGuildMember,
    newMember: GuildMember | PartialGuildMember
) => {
    /**
     * only target Pyon Pyon server
     */
    if (newMember.guild.id !== PyonPyon.guild.id) return;

    /**
     * find out if boosting timestamp changed (server boosting count changed)
     */
    const oldBoostTimestamp = oldMember.premiumSinceTimestamp;
    const newBoostTimestamp = newMember.premiumSinceTimestamp;

    if (oldBoostTimestamp !== newBoostTimestamp) {
        await updateServerStats({
            boost: newMember.guild.premiumSubscriptionCount ?? 0,
        });
    }
};

PyonPyon.on('guildMemberUpdate', boostStatsUpdate);
