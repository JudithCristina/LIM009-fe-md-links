
import {validatePathAbsolute} from './path-controller.js';
import {arrayFileOfDirectory} from './path-controller.js';

const path1= '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/';


export let pathMd = (path1)=>{
    return arrayFileOfDirectory(validatePathAbsolute(path1));
}


console.log(pathMd(path1))