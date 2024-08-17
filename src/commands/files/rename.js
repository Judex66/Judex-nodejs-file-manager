import {rename} from 'fs/promises';
import * as path from 'path';
import {wayToFile} from '../fileWay/waytoFile.js';
export const renameFile = async (data) => {
    let renameTheFile = await data.trim().replace('rm ', '');
    const oldName = renameTheFile.split(' ')[1];
    const newName= renameTheFile.split(' ')[2];
    console.log(oldName)
    console.log(newName)
   try{
    let oldWay = path.isAbsolute(oldName) ? oldName : path.join(wayToFile, `${oldName}`);
    let newWay = path.isAbsolute(newName) ? newName : path.join(wayToFile, `${newName}`);

        await rename(oldWay, newWay);

        console.log(`You are currently in ${wayToFile}`);
   }
   catch(err){
    console.log(err)
    console.log('Operation failed');
   }
};