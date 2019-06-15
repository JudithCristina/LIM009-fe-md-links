
import {validatePathAbsolute} from './path-controller.js';
import {arrayFileOfDirectory} from './path-controller.js';
import {readFile} from './path-controller.js';
import marked from 'marked';

const path1= '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica'


export let pathMdLinks = (path1)=>{
    let  arrayOfFile =  arrayFileOfDirectory(validatePathAbsolute(path1));
    let arrObj = [];
    arrayOfFile.forEach((filePath) => {
            const mdContent = readFile(filePath);
            let renderer = new marked.Renderer(mdContent);
            renderer.link = (href, _, text) => {
                arrObj.push({ href, text, file: filePath })

            };
            marked(mdContent, { renderer : renderer })
        })
    return arrObj;
}


console.log(pathMdLinks(path1))

