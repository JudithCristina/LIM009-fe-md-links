
import {validatePathAbsolute} from './path-controller.js';
import {pathMdLinks} from './path-controller2.js';
import {validateLinks} from './path-controller2.js';
import {arrayFileOfDirectory} from './path-controller.js';
import {searchFileMd} from './path-controller2.js';
import { rejects } from 'assert';
const fs = require('fs');
const path = require('path');

export const mdLinks =(path, options)=>{
    return new Promise((resolve,rejects) =>{
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
      }else{
        console.log('error')
      }
      })
    }
  
    
    mdLinks ('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src', {validate: true})
    .then((result)=>{
     console.log(result)
    })
  
    