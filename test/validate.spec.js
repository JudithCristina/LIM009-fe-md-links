import { pathMdLinks, validateLinks} from '../src/validate.js';

describe('funcion  que permite obtener  los links, texto y ruta de ubicación de un archivo.md', () => {
    it('Debería  retornar  un array de objetos(c/object representa un link con propiedad href,text y file)', () => {
        expect(pathMdLinks('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica')).toEqual([ { href: 'https://github.com/user/repo/blob/branch/other_file.md',
        text: 'a link',
        file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica2.md' },
      { href: 'https://youtuber.com',
        text: 'a link',
        file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica3.md' },
      { href: 'https://github.com/JudithCristina',
        text: 'mi github',
        file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1.md' },
      { href: 'https://github.com/Judith//-',
        text: 'mi github',
        file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica2.md' } ]);
    });
  });



  describe('funcion  que permite obtener  los links, texto, ruta, status y código de un archivo.md', () => {
    it('Debería  retornar  un array de objetos(c/object representa un link con propiedad href,text,file, code y status)', () => {
       return  validateLinks('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica').then((response)=>{
         expect(response).toEqual( [ { href: 'https://github.com/user/repo/blob/branch/other_file.md',
         text: 'a link',
         file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica2.md',
         code: 404,
         status: 'Not Found' },
       { href: 'https://youtuber.com',
         text: 'a link',
         file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica3.md',
         code: 'ECONNRESET',
         status: 'Fail' },
       { href: 'https://github.com/JudithCristina',
         text: 'mi github',
         file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1.md',
         code: 200,
         status: 'OK' },
       { href: 'https://github.com/Judith//-',
         text: 'mi github',
         file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica2.md',
         code: 404,
         status: 'Not Found' } ])
       })
    });
    it('Debería  retornar  un array de objetos(c/object representa un link con propiedad href,text,file, code y status)', () => {
      return  validateLinks('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica').catch((e)=>{
        expect(e).toEqual( [ { href: 'https://github.com/user/repo/blob/branch/other_file.md',
        text: 'a link',
        file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica2.md',
        code: 404,
        status: 'Not Found' },
      { href: 'https://youtuber.com',
        text: 'a link',
        file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica3.md',
        code: 'ECONNRESET',
        status: 'Fail' },
      { href: 'https://github.com/JudithCristina',
        text: 'mi github',
        file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1.md',
        code: 200,
        status: 'OK' },
      { href: 'https://github.com/Judith//-',
        text: 'mi github',
        file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica2.md',
        code: 404,
        status: 'Not Found' } ])
      })
   });

  });