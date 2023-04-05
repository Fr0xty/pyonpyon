import { ActionRowBuilder, EmbedBuilder, StringSelectMenuBuilder, TextChannel } from 'discord.js';
import PyonPyon from '../res/client.js';
import RoleId from '../res/enums/role_id.json' assert { type: 'json' };

export const updateRoleSelectMessage = async () => {
    const roleSelectChannel = (await PyonPyon.guild.channels.fetch('824232221384507413')) as TextChannel;
    const message1 = await roleSelectChannel.messages.fetch('1068522710180823060');
    const message2 = await roleSelectChannel.messages.fetch('1068525308367601735');
    const message3 = await roleSelectChannel.messages.fetch('1068525470192254986');

    const embeds = [
        new EmbedBuilder().setColor(PyonPyon.color).setTitle('Role Counter').setDescription('To be implemented.'),
        new EmbedBuilder()
            .setColor('#54ff7c')
            .setTitle('Get Roles')
            .setDescription('To be automatically assigned a role, choose one from the drop-down menu.'),
        new EmbedBuilder()
            .setColor('#ff5b45')
            .setTitle('Remove Roles')
            .setDescription('Select a role from the drop-down menu to have it removed automatically.'),
    ];

    const roleOptions = [
        {
            label: 'Valorant',
            description: 'plays Valorant.',
            value: RoleId.valorant,
            emoji: '1093107816417480744',
        },
        {
            label: 'Genshin Gang',
            description: 'plays Genshin Impact.',
            value: RoleId.genshin,
            emoji: '1068529775091667044',
        },
        {
            label: 'Minecrafter',
            description: 'plays Minecraft.',
            value: RoleId.minecraft,
            emoji: '1093100714483519538',
        },
        {
            label: 'Japanese',
            description: 'interested in / knows Japanese language and culture.',
            value: RoleId.japan,
            emoji: String.fromCodePoint(0x1f1ef, 0x1f1f5),
        },
        {
            label: 'Developer',
            description: 'programs software, interested in computer science, etc.',
            value: RoleId.developer,
            emoji: String.fromCodePoint(0x1f4bb),
        },
        {
            label: 'Free Stuff',
            description: 'get pinged when there are free games available to grab.',
            value: RoleId.free,
            emoji: '853809142493610055',
        },
        {
            label: 'Cultured',
            description: 'get pinged occasionally in #twitter-pics #cosplays #art-gallery.',
            value: RoleId.cultured,
            emoji: '853809130208231445',
        },
    ];

    const components = [
        new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('get-role-event')
                .setPlaceholder('Select a role')
                .setOptions(roleOptions)
                .setMinValues(1)
                .setMaxValues(roleOptions.length)
        ),
        new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('remove-role-event')
                .setPlaceholder('Select a role')
                .setOptions(roleOptions)
                .setMinValues(1)
                .setMaxValues(roleOptions.length)
        ),
    ];

    await message1.edit({ embeds: [embeds[0]] });
    await message2.edit({ embeds: [embeds[1]], components: [components[0]] });
    await message3.edit({ embeds: [embeds[2]], components: [components[1]] });
};
