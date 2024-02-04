import {writeFile} from "fs/promises";
import { existsSync } from 'fs';
const create = async () => {
    const fileWay ='src/fs/files';
    const fileName ='flesh.txt';
    const fileContent = 'I am fresh and young';
    if( !existsSync(`${fileWay}/${fileName}`))
    {
   await writeFile(`${fileWay}/${fileName}`,fileContent,'utf-8',import.meta.url);
    }
    else
    {
        console.log("FS operation failed");
    }
};

await create();