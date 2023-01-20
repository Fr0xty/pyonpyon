import fs from 'fs';

export default () => {
    const events = fs.readdirSync('./dist/events');

    events.forEach(async (eventFile) => {
        await import(`../events/${eventFile}`);
    });
};
