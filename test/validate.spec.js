import mock from 'mock-fs';
import process from 'process';
import path from 'path';
import fetchMock from '../__mocks__/node-fetch.js';
import { pathMdLinks, validateLinks } from '../src/validate.js';
fetchMock.config.sendAsJson = false;
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

describe('funcion  que permite obtener  los links, texto y ruta de ubicación de un archivo.md', () => {
  it('Debería  retornar  un array de objetos con propiedad href,text y file)', () => {
    expect(pathMdLinks(path.join(process.cwd(), 'prueba'))).toEqual([
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
      }]);
  });
});



describe('funcion  que permite obtener  los links, texto, ruta, status y código de un archivo.md', () => {
  it('Debería  retornar  un array de objetos(c/object representa un link con propiedad href,text,file, code y status)', (done) => {
    validateLinks(path.join(process.cwd(), 'prueba')).then((response) => {
      const resultVAlidateLinks = [{
        href: 'https://youtube.com',
        text: 'a link',
        file: path.join(process.cwd(), 'prueba', 'prueba1.md'),
        code: chalk.green.bold(200),
        status: chalk.green.bold('OK')
      },
      {
        href: 'https://github.com/user/repo/blob/branch/other_file.md',
        text: 'a link',
        file: path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md'),
        code: chalk.red.bold(404),
        status:chalk.red.bold('Fail')
      },
      {
        href: 'https://github.com/Judith//-',
        text: 'mi github',
        file: path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md'),
        code: chalk.red.bold(404),
        status: chalk.red.bold('Fail')
      },
      {
        href: 'https://github.com/Judith',
        text: 'github Judith',
        file: path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md'),
        code: chalk.green.bold(200),
        status: chalk.green.bold('OK')
      }]
      expect(response).toEqual(resultVAlidateLinks)
      done()
    })
  });
  /*it('Deería retornatar un error', (done) => {
    validateLinks(path.join(process.cwd(), 'lib')).catch((e) => {
      const resultVAlidateLinks = [{
        href: 'https://youtuber.com',
        text: 'my video',
        file: path.join(process.cwd(), 'lib', 'videos.md'),
        code: 'ECONNRESET',
        status: 'Fail'
      }]
      expect(e).toEqual(resultVAlidateLinks)
      done()
    })
  })
})*/
})
