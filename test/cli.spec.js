const chalk = require('chalk');
import mock from 'mock-fs';
import process from 'process';
import path from 'path';
import fetchMock from '../__mocks__/node-fetch.js';
import {mdLinksCli  } from '../src/cli.js';
fetchMock.config.sendAsJson = false;
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


describe('funcion  que permite obtener --validate, --stads', () => {
    it('Debería  retornar  un  link con propiedad href,text,file', (done) => {
      return mdLinksCli(path.join(process.cwd(), 'prueba')).then((response) => {
        expect(response).toEqual(`href:https://youtube.com\ntext:[a link]\nfile:${path.join(process.cwd(), 'prueba', 'prueba1.md')}\n\nhref:https://github.com/user/repo/blob/branch/other_file.md\ntext:[a link]\nfile:${path.join(process.cwd(), 'prueba', 'prueba2','judith.md')}\n\nhref:https://github.com/Judith//-\ntext:[mi github]\nfile:${path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md')}\n\nhref:https://github.com/Judith\ntext:[github Judith]\nfile:${path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md')}\n`)
      done()
    })
    });
    it("Debería  retornar  un  string 'No se encontraron archivos.md'", () => {
        return mdLinksCli(path.join(process.cwd(), 'demo')).then((response) => {
          expect(response).toBe(chalk.red.bold('No se encontraron archivos.md'))
        })
      });
   it('Debería  retornar  un link con propiedad href,text,file,code y status', () => {
      return mdLinksCli(path.join(process.cwd(), 'prueba'), '--validate').then((response) => {
        expect(response).toEqual(`href:https://youtube.com\ntext:[a link]\nfile:${path.join(process.cwd(), 'prueba', 'prueba1.md')}\ncode:200\nstatus:OK\n\nhref:https://github.com/user/repo/blob/branch/other_file.md\ntext:[a link]\nfile:${path.join(process.cwd(), 'prueba', 'prueba2','judith.md')}\ncode:404\nstatus:Fail\n\nhref:https://github.com/Judith//-\ntext:[mi github]\nfile:${path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md')}\ncode:404\nstatus:Fail\n\nhref:https://github.com/Judith\ntext:[github Judith]\nfile:${path.join(process.cwd(), 'prueba', 'prueba2', 'judith.md')}\ncode:200\nstatus:OK\n`)
      })
    });
    it("Debería  retornar  un  string 'No se encontraron archivos.md'", () => {
        return mdLinksCli(path.join(process.cwd(), 'demo'),'--validate').then((response) => {
          expect(response).toBe(chalk.red.bold('No se encontraron archivos.md'))
        })
      });
    it('Debería  retornar  Total y Unique de links', () => {
      return mdLinksCli(path.join(process.cwd(), 'prueba'), '--stats').then((response) => {
        expect(response).toEqual(`Total: 4\nUnique: 4`)
      })
    })
    it("Debería  retornar  un  string 'No se encontraron archivos.md'", () => {
        return mdLinksCli(path.join(process.cwd(), 'demo'),'--stats').then((response) => {
          expect(response).toBe(chalk.red.bold('No se encontraron archivos.md'))
        })
      });
    it('Debería  retornar  Total, Unique, Brocken de links', () => {
      return mdLinksCli(path.join(process.cwd(), 'prueba'), '--validate','--stats').then((response) => {
        expect(response).toEqual(`Total: 4\nUnique: 4\nBroken: 2`)
      })
    })
    it("Debería  retornar  un  string 'No se encontraron archivos.md'", () => {
        return mdLinksCli(path.join(process.cwd(), 'demo'),'--validate','--stats').then((response) => {
          expect(response).toBe(chalk.red.bold('No se encontraron archivos.md'))
        })
      });
    it("Debería  retornar  un string `Corregir argumentos (path, --validate, --stats)\n`", () => {
        return mdLinksCli(path.join(process.cwd(), 'prueba'), '--validates','--statts').then((response) => {
          expect(response).toEqual(chalk.red.bold(`Corregir argumentos (path, --validate, --stats)\n`))
        })
      })
  })
  
  