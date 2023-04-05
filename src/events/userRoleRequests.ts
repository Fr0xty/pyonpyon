import type { BaseInteraction } from 'discord.js';
import PyonPyon from '../res/client.js';

const userRoleRequestsFunction = async (interaction: BaseInteraction) => {
    if (!interaction.isStringSelectMenu()) return;

    // TODO: implement assign role logic here
};

PyonPyon.on('interactionCreate', userRoleRequestsFunction);
