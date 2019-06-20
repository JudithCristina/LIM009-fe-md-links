import {validateLinks} from './validate.js';
const path1= '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica'


export const getStatLinks = (arrayOfObj) => {
    console.log(arrayOfObj)
    const arrayOfUrls = arrayOfObj.map(element =>{
      return element.href;
      })

    return arrayOfUrls
}



console.log(getStatLinks(validateLinks(path1)))


