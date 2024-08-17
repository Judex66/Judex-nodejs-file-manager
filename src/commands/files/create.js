import {writeFile} from "fs/promises";
import {wayToFile} from '../fileWay/waytoFile.js';
export const create = async (data) => {
    let createFile = await data.trim().replace('add ', '');
    try{
        await writeFile(`${wayToFile}/${createFile}`,import.meta.url);
        console.log(`You are currently in ${wayToFile}`);
    }
    catch(err){
console.log(err)
console.log('Operation failed');
    }
};