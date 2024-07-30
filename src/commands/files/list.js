import {readdir} from 'fs/promises';
import { existsSync } from 'fs';
import {wayToFile} from '../../wayToFile.js';
export const list = async () => {
    const fileWay =wayToFile;
    if( existsSync(fileWay))
    {
        console.log(await readdir(fileWay));
    }
    else
    {
        console.log("FS operation failed");
    }
};

await list();