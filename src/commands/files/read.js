import {readFile} from "fs/promises";
import { existsSync } from 'fs';
import {wayToFile} from '../../wayToFile.js';
export const read = async () => {
    const fileWay = wayToFile;
    if(existsSync(fileWay))
    {
        const readingContent = await readFile(fileWay, 'utf-8',import.meta.url);
        console.log(readingContent);
    } 
    else
    {
        console.log("FS operation failed");
    }  
};

await read();