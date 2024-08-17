import {unlink} from 'fs/promises';
import * as path from 'path';
import {wayToFile} from '../fileWay/waytoFile';
export const remove = async (data) => {
    let removeFile = await data.trim().replace('rm ', '');
    let fileWay = path.isAbsolute(removeFile) ? removeFile : path.join(wayToFile, `${removeFile}`); 
    try{
        await unlink(fileWay);

        console.log(`You are currently in ${wayToFile}`);
    }
    catch (err) {
        console.log('Operation failed');
    }
}

