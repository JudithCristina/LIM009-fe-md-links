import { validatePathAbsolute, isFile, isDirectory, readFile, readDirectory, searchFileMd} from '../src/path-controller.js';

describe('Función que retorna una ruta absoluta', () => {
  it('validatePathAbsolute debería ser una función', () => {
    expect(typeof validatePathAbsolute).toBe('function');
  });
  it('Es una ruta absoluta', () => {
    expect(validatePathAbsolute('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/lib/index.js')).toBe('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/lib/index.js');        
  });
  it('convertir a una ruta absoluta', () => {
    expect(validatePathAbsolute('lib/index.js')).toBe('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/lib/index.js');        
  });
});

describe('funcion  que permite saber si la ruta es de un archivo', () => {
  it('deberia retornar true si  es un archivo', () => {
	  expect(isFile('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/index.js')).toBe(true);
  });
  it('deberia retornar false si no es un archivo', () => {
	  expect(isFile('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/')).toBe(false);
  });
});

describe('funcion  que permite saber si la ruta es un directorio', () => {
  it('deberia retornar true si  es un directorio', () => {
	  expect(isDirectory('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/')).toBe(true);
  });
  it('deberia retornar false si no es un directorio', () => {
	  expect(isDirectory('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/index.js')).toBe(false);
  });
});

describe('funcion  que permite leer un archivo', () => {
  it('deberia retornar el contenido del archivo', () => {
    expect(readFile('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/test/practica.js')).toBe('const hola = "hola"');
  })
});

describe('funcion  que retornar una array de rutas dentro del directorio', () => {
  it('deberia retornar un array de rutas de un directorio', () => {
    expect(readDirectory('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/')).toEqual([ '.babelrc',
    '.git',
    'README.md',
    'coverage',
    'lib',
    'node_modules',
    'package.json',
    'src',
    'test' ]);
  })
});

describe('funcion  que permite buscar un archivo md', () => {
  it('deberia retornar true si  es un archivo md', () => {
	  expect(searchFileMd('home/judith-c-q-i/Escritorio/LIM009-fe-md-links/test/practica2.md')).toBe(true);
  });
  it('deberia retornar false si no es un archivo', () => {
	  expect(searchFileMd('home/judith-c-q-i/Escritorio/LIM009-fe-md-links/test/practica.js')).toBe(false);
  });
});