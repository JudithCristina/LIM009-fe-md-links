import mock from 'mock-fs';
import process from 'process';
import path from 'path';
import { validatePathAbsolute, isFile, isDirectory, readFile, readDirectory, searchFileMd, arrayFileOfDirectory} from '../src/path-controller.js';

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

describe('Función que retorna una ruta absoluta', () => {
  it('validatePathAbsolute debería ser una función', () => {
    expect(typeof validatePathAbsolute).toBe('function');
  });
  it('Debería recibir una ruta absoluta y retornar un string de ruta absoluta', () => {
    expect(validatePathAbsolute(path.join(process.cwd(),'src','README.md'))).toBe(path.join(process.cwd(),'src','README.md'));        
  });
  it('Debería recibir una ruta relativa y retornar un string de ruta absoluta', () => {
    expect(validatePathAbsolute('./src/README.md')).toBe(path.join(process.cwd(),'src','README.md'));        
  });
});




describe('funcion  que permite saber si la ruta es de un archivo', () => {
  it('debería ser una función',()=>{
    expect(typeof isFile).toEqual('function');
  }),
  it('deberia retornar true si  es un archivo', () => {
	  expect(isFile(path.join(process.cwd(),'src','README.md'))).toBe(true);
  });
  it('deberia retornar false si no es un archivo', () => {
	  expect(isFile(path.join(process.cwd(),'src'))).toBe(false);
  });
  it("deberia retornar un error si no existe",() =>{
    try {
      isFile(path.join(process.cwd(),'src','practica.md'))
    } catch(err){
      expect(err.code).toBe('ENOENT')
    }
  })
});



describe('funcion  que permite saber si la ruta es un directorio', () => {
  it('deberia retornar true si  es un directorio', () => {
	  expect(isDirectory(path.join(process.cwd(),'src'))).toBe(true);
  });
  it('deberia retornar false si no es un directorio', () => {
	  expect(isDirectory(path.join(process.cwd(),'src','README.md'))).toBe(false);
  });
  it("deberia retornar un error si no existe",() =>{
    try {
      isFile(path.join(process.cwd(),'practica'))
    } catch(err){
      expect(err.code).toBe('ENOENT')
    }
  })
});


describe('funcion  que permite leer un archivo', () => {
  it('deberia retornar el contenido del archivo', () => {
    expect(readFile(path.join(process.cwd(),'lib','index.html'))).toBe('Javascript  es un lenguaje de programación');
  })
});


describe('funcion  que retornar una array de rutas dentro del directorio', () => {
  it('deberia retornar un array de rutas de un directorio', () => {
    expect(readDirectory(path.join(process.cwd(),'prueba'))).toEqual(
      [path.join(process.cwd(),'prueba','prueba1.md'),
      path.join(process.cwd(),'prueba','prueba2')]);
  })
});


describe('funcion  que permite buscar un archivo md', () => {
  it('deberia retornar true si  es un archivo md', () => {
	  expect(searchFileMd(path.join(process.cwd(),'src','README.md'))).toBe(true);
  });
  it('deberia retornar false si no es un archivo', () => {
	  expect(searchFileMd(path.join(process.cwd(),'lib','index.html'))).toBe(false);
  });
});


describe('funcion  que retorna un array de rutas absoluta de directorios y archivos', () => {
  it('deberia retornar un array de la ruta md,  si el argumento es una ruta de  archivo' , () => {
	  expect(arrayFileOfDirectory(path.join(process.cwd(),'prueba','prueba1.md'))).toEqual([path.join(process.cwd(),'prueba','prueba1.md')]);
  });
  it('deberia retornar un array de todas las rutas en archivos si el argumento es una ruta de archivo', () => {
	  expect(arrayFileOfDirectory(path.join(process.cwd(),'prueba'))).toEqual(
      [path.join(process.cwd(),'prueba','prueba1.md'),
      path.join(process.cwd(),'prueba','prueba2','judith.md')
      ]);
  });
});

