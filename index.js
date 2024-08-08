import readline from 'readline';
import { remove } from './src/commands/files/delete.js';
import { list } from './src/commands/files/list.js';
const control = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
control.on('line', async (line) => {
    const command = line.trim().split(' ')[0];
    switch (command) {
        case 'ls':
            await list();
            break;
        case 'rm':
            await remove(line);
            break;
        default:
            console.log('Invalid input');
            break;
    }
});