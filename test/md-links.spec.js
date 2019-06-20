
import { mdLinks} from '../src/md-links';

describe('funcion  que permite obtener  la información de validacion si lo solicitamos', () => {
    it('Debería  retornar  un array de objetos(c/object representa un link con propiedad href,text,file, code y status; si mi validación es true)', () => {
       return  mdLinks('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica',{ validate: true }).then((response)=>{
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
      return  mdLinks('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica',{ validate: false }).then((response)=>{
        expect(response).toEqual( [ { href: 'https://github.com/user/repo/blob/branch/other_file.md',
        text: 'a link',
        file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica2.md' },
      { href: 'https://youtuber.com',
        text: 'a link',
        file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica3.md' },
      { href: 'https://github.com/JudithCristina',
        text: 'mi github',
        file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1.md'},
        { href: 'https://github.com/Judith//-',
        text: 'mi github',
        file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica2.md' }
       ])
      })
   });

 it('Debería  retornar  un string "no se encontraron archivos md." si la ruta es correcta pero no se encuentran ningun archivo md.)', () => {
    return  mdLinks('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src',{ validate: true }).then((response)=>{
      expect(response).toEqual( 'No se encontraron archivos.md')
    })
 });
 it('Debería  retornar  un string "no se encontraron archivos md." si la ruta es correcta pero no se encuentran ningun archivo md.)', () => {
  return  mdLinks('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src',{ validate: false}).then((response)=>{
    expect(response).toEqual( 'No se encontraron archivos.md')
  })
});
it('Debería  retornar  un string ""ruta incorrecta"" si la ruta es incorrecta',() =>{
    try {
        mdLinks('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/fenicito',{ validate: true})
    } catch(err){
      expect(err.code).toBe('ENOENT')
    }
  })
  it('Debería  retornar  un string ""ruta incorrecta"" si la ruta es incorrecta',() =>{
    return  mdLinks('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/fenicito',{ validate: true}).catch(err=>{
      expect(err).toBe( true)
  })
})
})
