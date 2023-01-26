import type { GuildEmoji } from 'discord.js';
import PyonPyon from '../res/client.js';
import { updateServerStats } from '../utils/serverStatsHelper.js';

const emojiStatsUpdateFunction = async (emoji: GuildEmoji) => {
    /**
     * only target Pyon Pyon server
     */
    if (emoji.guild.id !== PyonPyon.guild.id) return;

    await updateServerStats({
        emoji: emoji.guild.emojis.cache.size,
    });
};

PyonPyon.on('emojiCreate', emojiStatsUpdateFunction);
PyonPyon.on('emojiDelete', emojiStatsUpdateFunction);
