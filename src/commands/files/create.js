import {writeFile} from "fs/promises";
import { existsSync } from 'fs';
import {wayToFile} from '../../wayToFile.js';
export const create = async (data) => {
    let fileWay = wayToFile;
    let fileName = await data.trim().replace('cr ', '');
    if( !existsSync(`${fileWay}/${fileName}`))
    {
   await writeFile(`${fileWay}/${fileName}`,import.meta.url);
    }
    else
    {
        console.log("FS operation failed");
    }
};

await create();