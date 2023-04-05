import type { BaseInteraction, GuildMember } from 'discord.js';
import PyonPyon from '../res/client.js';

const userRoleRequestsFunction = async (interaction: BaseInteraction) => {
    if (!interaction.isStringSelectMenu()) return;

    const rolesSelected = interaction.values;
    if (interaction.customId === 'get-role-event') {
        await (interaction.member as GuildMember).roles.add(rolesSelected, 'requested in #get-roles');
        await interaction.reply({
            content: `Successfully added these role(s):\n${rolesSelected.map((roleId) => `<@&${roleId}>`).join(', ')}`,
            ephemeral: true,
        });
    }

    if (interaction.customId === 'remove-role-event') {
        await (interaction.member as GuildMember).roles.remove(rolesSelected, 'requested in #get-roles');
        await interaction.reply({
            content: `Successfully removed these role(s):\n${rolesSelected
                .map((roleId) => `<@&${roleId}>`)
                .join(', ')}`,
            ephemeral: true,
        });
    }
};

PyonPyon.on('interactionCreate', userRoleRequestsFunction);
