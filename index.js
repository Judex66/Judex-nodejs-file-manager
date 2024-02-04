import { ReadLine } from 'readline';
import { remove } from './src/commands/files/delete.js';
const control = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});
control.on('line', async (line) => {
    const command = line.trim().split(' ')[0];
    switch (command) {
        case 'rm':
            await remove(line);
            break;
        default:
            console.log('\nInvalid input\n');
            break;
    }
});