
import {validatePathAbsolute} from './path-controller.js';
import {pathMdLinks} from './validate.js';
import {validateLinks} from './validate.js';
import {arrayFileOfDirectory} from './path-controller.js';

const fs = require('fs');
const path = require('path');

export const mdLinks =(path, options)=>{
    return new Promise((resolve,rejects) =>{
  if(fs.statSync(path)){
      let arrayFile=arrayFileOfDirectory(path)
      if(validatePathAbsolute(path) && options.validate ===false ){
        if(arrayFile.length!==0){
          resolve(pathMdLinks(path));
        } else {
          resolve('No se encontraron archivos.md')
        }
      } else if (validatePathAbsolute(path) && options.validate===true ){
        if(arrayFile.length!==0){
          resolve(validateLinks(path))
        } else {
          resolve('No se encontraron archivos.md')
      }  
    }
  }
    })
    .catch(e=> 
     { if(e.code === "ENOENT"){
      return("ruta incorrecta")
      }}
    )
  }  


    mdLinks ('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/hk', {validate: false})
    .then((result)=>{
     console.log(result)
    })
     .catch((e)=>{
      console.log(e)
    })
  