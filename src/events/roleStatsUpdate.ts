import type { Role } from 'discord.js';
import PyonPyon from '../res/client.js';
import { updateServerStats } from '../utils/serverStatsHelper.js';

const roleStatsUpdateFunction = async (role: Role) => {
    /**
     * only target Pyon Pyon server
     */
    if (role.guild.id !== PyonPyon.guild.id) return;

    await updateServerStats({
        role: role.guild.roles.cache.size,
    });
};

PyonPyon.on('roleCreate', roleStatsUpdateFunction);
PyonPyon.on('roleDelete', roleStatsUpdateFunction);
