import {rm} from 'fs/promises';
import { existsSync } from 'fs';
import {wayToFile} from '../../wayToFile.js';
export const remove = async (data) => {
    let fileWay = wayToFile;
    let removeFile = await data.trim().replace('rm ', ''); 
    if( existsSync(`${fileWay}/${removeFile}`))
    {
       await rm(`${fileWay}/${removeFile}`);
    }
    else
    {
        console.log("FS operation failed");
    }
}

await remove();