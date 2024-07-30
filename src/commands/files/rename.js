import {rename as renameFile} from 'fs/promises';
import { existsSync } from 'fs';
import {wayToFile} from '../../wayToFile.js';
export const rename = async (data) => {
    const fileWay = wayToFile;
    const wrongName = data.trim().replace('rm ', '');  
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