
import { validatePathAbsolute } from './path-controller.js';
import { pathMdLinks } from './validate.js';
import { validateLinks } from './validate.js';
import { arrayFileOfDirectory } from './path-controller.js';
import chalk from 'chalk';


export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    try {
      let arrayFile = arrayFileOfDirectory(path)
      if (validatePathAbsolute(path) && (!options || options.validate === false)) {
        if (arrayFile.length !== 0) {
          resolve(pathMdLinks(path));
        } else {
          resolve('No se encontraron archivos.md')
        }
      } else if (validatePathAbsolute(path) && options.validate === true) {
        if (arrayFile.length !== 0) {
          resolve(validateLinks(path))
        } else {
          resolve('No se encontraron archivos.md')
        }
      }
    }
    catch (e) {
      if (e.code === "ENOENT") {
        let error=chalk.red.bold(`Ruta incorrecta`)
        reject (error);
      }
    }
  })
}



/*mdLinks ('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/README.md')
 .then((result)=>{
  console.log(result)
 })
  .catch((e)=>{
   console.log(e)
 })*/