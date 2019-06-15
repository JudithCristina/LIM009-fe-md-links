
import {validatePathAbsolute} from './path-controller.js';
import {arrayFileOfDirectory} from './path-controller.js';
import {readFile} from './path-controller.js';

const path1= '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica'


export let pathMdLinks = (path1)=>{
    let  arrayOfFile =  arrayFileOfDirectory(validatePathAbsolute(path1));
    let arrObj = [];
    // console.log(arrPaths);
    arrayOfFile.forEach((filePath) => {
            const mdContent = readFile(filePath).toString();
             return arrObj.push(mdContent)
        })
        //console.log(arrObj);
    return arrObj;
}


console.log(pathMd(path1))

