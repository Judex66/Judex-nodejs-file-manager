import * as path from 'path';
import {access} from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import {wayToFile} from '../fileWay/waytoFile.js';
export const copy = async (data) => {
    const commandCopy =  data.trim().replace('cp ', '');
    const [ fileCopy, newDir ] = commandCopy.split(' ');

    try {
        let wayofFile = path.isAbsolute(fileCopy) ? fileCopy : path.join(wayToFile, `${fileCopy}`);
       //console.log(wayofFile)
        let fileName = path.basename(wayofFile);
        //console.log(fileName)
        let wayToCopy = path.isAbsolute(newDir) ? path.join(`${newDir}`, `${fileName}`) : path.join(wayToFile, `${newDir}`, `${fileName}`);
        console.log(wayToCopy)
        await access(wayofFile);

        let readStream = createReadStream(wayofFile);
        let writeStream = createWriteStream(wayToCopy);

        readStream.pipe(writeStream);
        console.log(`You are in ${wayToFile}`);
   }
   catch(err){
    //console.log(err)
    console.log('Operation failed');
   }
};