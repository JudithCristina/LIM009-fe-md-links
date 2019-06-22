import { pathMdLinks } from './validate.js';
const path1 = '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica'

const arrayOfObj = [{
  href: 'https://github.com/user/repo/blob/branch/other_file.md',
  text: 'a link',
  file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica2.md',
  code: 404,
  status: 'Fail'
}, {
  href: 'https://youtuber.com',
  text: 'a link',
  file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica3.md',
  code: 'ECONNRESET',
  status: 'Fail'
}, {
  href: 'https://github.com/JudithCristina',
  text: 'mi github',
  file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1.md',
  code: 200,
  status: 'OK'
}, {
  href: 'https://github.com/Judith//-',
  text: 'mi github',
  file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica2.md',
  code: 404,
  status: 'Fail'
}, {
  href: 'https://github.com/JudithCristina',
  text: 'mi github',
  file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica2.md',
  code: 200,
  status: 'OK'
}];


export const getStatLinks = (arrayOfObj) => {
  let arrayOfUrls = arrayOfObj.map(element => {
    return element.href;
  })
  let linksUnike = Array.from(new Set(arrayOfUrls))
  return {
    total: arrayOfUrls.length,
    unique: linksUnike.length
  }
}



export const getValidateStatLinks = (arrayOfObj) => {
  let arrayOfUrls = arrayOfObj.map(function (element) {
    return element.href;
  });
  let linksUnike = Array.from(new Set(arrayOfUrls));
  let arrayOfUrlsBrocken = arrayOfObj.filter(function (element) {
    return element.status == 'Fail';
  });
  return {
    total: arrayOfUrls.length,
    unique: linksUnike.length,
    broken: arrayOfUrlsBrocken.length
  };
};

/*console.log(getStatLinks(arrayOfObj));
console.log(getValidateStatLinks(arrayOfObj));*/