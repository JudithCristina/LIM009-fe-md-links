import mock from 'mock-fs';
import process from 'process';
import path from 'path';
import fetchMock from '../__mocks__/node-fetch.js';
import { mdLinks } from '../src/md-links.js';
const chalk = require('chalk');
fetchMock
  .mock('https://youtube.com', 200)
  .mock('https://github.com/user/repo/blob/branch/other_file.md', 404)
  .mock('https://github.com/Judith//-', 404)
  .mock('https://github.com/Judith', 200)
  .mock('https://youtuber.com', 'ECONNRESET')

  beforeEach(() => {
    mock({
      'prueba': {
        'prueba1.md': `Hola Marco
         [a link](https://youtube.com)
          `,
        'prueba2': {
          'judith.md': `hola judith
            [a link](https://github.com/user/repo/blob/branch/other_file.md),
            [mi github](https://github.com/Judith//-),
            [github Judith](https://github.com/Judith)`
        },
      },
      'lib': {
        'archivo.txt': 'hola Judith',
        'index.html': 'Javascript  es un lenguaje de programación',
        'videos.md': `[my video](https://youtuber.com)`
      },
      'demo':{
        'style.css':''
      },
      'src': {
        'README.md': `[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
          ligero muy popular entre developers. Es usado en muchísimas plataformas que
          manejan texto plano.
          ![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)
          
          ## Introducción
          
          [Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
          construido con el ...`
      }
    });
  });
  afterEach(mock.restore);

describe('funcion  que permite obtener  la información de validacion si lo solicitamos', () => {
  it('Debería  retornar  un array de objetos(c/object representa un link con propiedad href,text,file, code y status; si mi validación es true)', () => {
    return mdLinks(path.join(process.cwd(), 'prueba'), { validate: true }).then((response) => {
      expect(response).toEqual([{
        href: 'https://youtube.com',
        text: 'a link',
        file: path.join(process.cwd(), 'prueba', 'prueba1.md'),
        code: 200,
        status: 'OK'
      },
      {
        href: 'https://github.com/user/repo/blob/branch/other_file.md',
        text: 'a link',
        file: path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md'),
        code: 404,
        status: 'Fail'
      },
      {
        href: 'https://github.com/Judith//-',
        text: 'mi github',
        file: path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md'),
        code: 404,
        status: 'Fail'
      },
      {
        href: 'https://github.com/Judith',
        text: 'github Judith',
        file: path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md'),
        code: 200,
        status: 'OK'
      }])
    })
  });
  it('Debería  retornar  un array de objetos(c/object representa un link con propiedad href,text,file, code y status; si mi validación es true)', () => {
    return mdLinks(path.join(process.cwd(), 'prueba'), { validate: false }).then((response) => {
      expect(response).toEqual([
        {
          href: 'https://youtube.com',
          text: 'a link',
          file: path.join(process.cwd(), 'prueba', 'prueba1.md')
        },
        {
          href: 'https://github.com/user/repo/blob/branch/other_file.md',
          text: 'a link',
          file: path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md')
        },
        {
          href: 'https://github.com/Judith//-',
          text: 'mi github',
          file: path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md')
        },
        {
          href: 'https://github.com/Judith',
          text: 'github Judith',
          file: path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md')
        }])
    })
  });
  it('Debería  retornar  un string, cuando no enctro ningun archiv .md', () => {
    return mdLinks(path.join(process.cwd(), 'demo'), { validate: false }).then((response) => {
      expect(response).toEqual('No se encontraron archivos.md')
    })
  })
  it('Debería  retornar  un string, cuando no enctro ningun archiv .md', () => {
    return mdLinks(path.join(process.cwd(), 'demo'), { validate: true}).then((response) => {
      expect(response).toEqual('No se encontraron archivos.md')
    })
  })
  it('Debería  retornar  un string ""ruta incorrecta"" si la ruta es incorrecta', (done) => {
    return mdLinks(path.join(process.cwd(),'examen'), { validate: true}).catch ((err) =>{
      expect(err).toBe(chalk.red.bold('Ruta incorrecta'))
      done()
  })
  })
  it('Debería  retornar  un string ""ruta incorrecta"" si la ruta es incorrecta', (done) => {
    return mdLinks(path.join(process.cwd(),'examen'), { validate: false }).catch ((err) =>{
      expect(err).toBe(chalk.red.bold('Ruta incorrecta'))
      done()
  })
  })
})