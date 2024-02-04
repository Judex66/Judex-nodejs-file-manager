import {readFile} from "fs/promises";
import { existsSync } from 'fs';
const read = async () => {
    const fileWay ='src/fs/files/fileToRead.txt';
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