import {rm} from 'fs/promises';
import { existsSync } from 'fs';
import {wayToFile} from '../../../wayToFile';
const remove = async () => {
    const fileWay =wayToFile;
    const removeFile=data.trim().replace('rm ', ''); 
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