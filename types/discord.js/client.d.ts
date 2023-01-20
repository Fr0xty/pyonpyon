import { Guild } from 'discord.js';

declare module 'discord.js' {
    export interface Client {
        /**
         * Pyon Pyon server object
         */
        guild: Guild;

        statsChannels: {
            members: VoiceChannel;
            emojis: VoiceChannel;
            roles: VoiceChannel;
        };
    }

    export interface ClientStatsChannels {
        members: VoiceChannel;
        emojis: VoiceChannel;
        roles: VoiceChannel;
    }
}
