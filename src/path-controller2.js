
import {validatePathAbsolute} from './path-controller.js';
import {arrayFileOfDirectory} from './path-controller.js';

const path1= process.argv[2];


export let pathMd = (path1)=>{
    return arrayFileOfDirectory(validatePathAbsolute(path1));
}


console.log(pathMd(path1))