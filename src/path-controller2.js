
import {validatePathAbsolute} from './path-controller.js';
import {arrayFileOfDirectory} from './path-controller.js';
import {readFile} from './path-controller.js';
import marked from 'marked';
import fetch from 'node-fetch'
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

export const validateLinks = (path1) => {
  let arrayLinks = pathMdLinks(path1).map(link=> {
    return fetch(link.href).then(res=>{
    if(res.status === 200){
      link.code= res.status;
      link.status = res.statusText;
    } else {
    link.code= res.status;
    link.status = res.statusText;
    }
    return link
    })
  })
  return Promise.all(arrayLinks)
}
  

/*console.log(validateLinks(path1))

validateLinks(path1)
  .then(result=>{
console.log(result);
  })*/

  



