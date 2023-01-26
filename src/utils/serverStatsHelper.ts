import { EmbedBuilder, codeBlock } from 'discord.js';
import PyonPyon from '../res/client.js';

interface updateServerStatsParams {
    member?: number;
    emoji?: number;
    role?: number;
    boost?: number;
}

export const updateServerStats = async (updatedData?: updateServerStatsParams) => {
    /**
     * update new value
     */
    if (updatedData?.member !== undefined) PyonPyon.serverStatistics.data.member = updatedData?.member;
    if (updatedData?.emoji !== undefined) PyonPyon.serverStatistics.data.emoji = updatedData?.emoji;
    if (updatedData?.role !== undefined) PyonPyon.serverStatistics.data.role = updatedData?.role;
    if (updatedData?.boost !== undefined) PyonPyon.serverStatistics.data.boost = updatedData?.boost;

    /**
     * build new embed
     */
    const embed = new EmbedBuilder()
        .setColor(PyonPyon.color)
        .setTitle('Server Analytics')
        .setFields(
            {
                name: 'Members:',
                value: codeBlock('ansi', `\u001b[2;34m${PyonPyon.serverStatistics.data.member}\u001b[0m`),
            },
            {
                name: 'Emojis:',
                value: codeBlock('ansi', `\u001b[2;31m${PyonPyon.serverStatistics.data.emoji}\u001b[0m`),
            },
            {
                name: 'Roles:',
                value: codeBlock('ansi', `\u001b[2;33m${PyonPyon.serverStatistics.data.role}\u001b[0m`),
            },
            {
                name: 'Boosts:',
                value: codeBlock('ansi', `\u001b[2;35m${PyonPyon.serverStatistics.data.boost}\u001b[0m`),
            }
        )
        .setTimestamp();

    /**
     * update the message
     */
    await PyonPyon.serverStatistics.message.edit({ embeds: [embed] });
};
