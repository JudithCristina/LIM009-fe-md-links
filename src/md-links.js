
import {validatePathAbsolute} from './path-controller.js';
import {pathMdLinks} from './path-controller2.js';
import {validateLinks} from './path-controller2.js';
import {arrayFileOfDirectory} from './path-controller.js';
import {searchFileMd} from './path-controller2.js';
import { rejects } from 'assert';
import { ENOENT } from 'constants';
const fs = require('fs');
const path = require('path');

export const mdLinks =(path, options)=>{
    return new Promise((resolve,rejects) =>{
  if(fs.statSync(path)){
      let arrayFile=arrayFileOfDirectory(path)
      if(validatePathAbsolute(path) && options.validate ===false ){
        if(arrayFile.length!==0){
          resolve( pathMdLinks(path));
        } else {
          rejects(('No se encontraron archivos.md'))
        }
      } else if (validatePathAbsolute(path) && options.validate===true ){
        if(arrayFile.length!==0){
          resolve(validateLinks(path))
        } else {
          rejects(('No se encontraron archivos.md'))
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


    mdLinks ('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/narda', {validate: true})
    .then((result)=>{
     console.log(result)
    })
     .catch((e)=>{
      console.log(e)
    })
  