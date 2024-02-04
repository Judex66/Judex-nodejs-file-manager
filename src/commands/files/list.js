import {readdir} from 'fs/promises';
import { existsSync } from 'fs';
const list = async () => {
    const fileWay ='src/fs/files';
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