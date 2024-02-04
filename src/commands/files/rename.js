import {rename as renameFile} from 'fs/promises';
import { existsSync } from 'fs';
const rename = async () => {
    const fileWay ='src/fs/files';
    const wrongName = 'wrongFilename.txt'; 
    const rightName = 'properFilename.md';
    if(!existsSync(`${fileWay}/${rightName}`))
    { 
        renameFile(`${fileWay}/${wrongName}`,`${fileWay}/${rightName}`);
    }
    else
    {
        console.log('FS operation failed');
    }
};

await rename();