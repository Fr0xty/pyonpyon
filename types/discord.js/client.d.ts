import { Guild } from 'discord.js';

declare module 'discord.js' {
    export interface Client {
        /**
         * Pyon Pyon server object
         */
        guild: Guild;

        color: ColorResolvable;

        serverStatistics: {
            channel: TextChannel;
            message: Message;

            data: {
                member: number;
                emoji: number;
                role: number;
                boost: number;
            };
        };
    }
}
