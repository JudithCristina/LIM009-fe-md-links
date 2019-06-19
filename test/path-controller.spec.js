import { validatePathAbsolute, isFile, isDirectory, readFile, readDirectory, searchFileMd, arrayFileOfDirectory} from '../src/path-controller.js';
import  path from 'path';
import  fs  from 'fs';

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
  it("deberia retornar un error si no existe",() =>{
    try {
      isFile("JUDITHCRISTINA")
    } catch(err){
      expect(err.code).toBe('ENOENT')
    }
  })
});

describe('funcion  que permite saber si la ruta es un directorio', () => {
  it('deberia retornar true si  es un directorio', () => {
	  expect(isDirectory('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/')).toBe(true);
  });
  it('deberia retornar false si no es un directorio', () => {
	  expect(isDirectory('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/index.js')).toBe(false);
  });
  it("deberia retornar un error si no existe",() =>{
    try {
      isFile("JUDITHCRISTINA")
    } catch(err){
      expect(err.code).toBe('ENOENT')
    }
  })
});

describe('funcion  que permite leer un archivo', () => {
  it('deberia retornar el contenido del archivo', () => {
    expect(readFile('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/test/practica.js')).toBe('const hola = "hola"');
  })
});

describe('funcion  que retornar una array de rutas dentro del directorio', () => {
  it('deberia retornar un array de rutas de un directorio', () => {
    expect(readDirectory('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/')).toEqual([  "/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/.babelrc",
     "/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/.git",
    "/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/README.md",
    "/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/coverage",
    "/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/lib",
    "/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/node_modules",
    "/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/package.json",
    "/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica",
    "/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src",
    "/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/test" ]);
  })
});

describe('funcion  que permite buscar un archivo md', () => {
  it('deberia retornar true si  es un archivo md', () => {
	  expect(searchFileMd('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/test/practica2.md')).toBe(true);
  });
  it('deberia retornar false si no es un archivo', () => {
	  expect(searchFileMd('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/test/practica.js')).toBe(false);
  });
});


const arrayOfFile=[ '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1.md' ]
const arrayOfFileOfDirectory= [ 
'/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica2.md',
'/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica3.md',
'/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1.md',
'/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica2.md' ]

describe('funcion  que retorna un array de rutas absoluta de directorios y archivos', () => {
  it('deberia retornar un array de la ruta md,  si el argumento es una ruta de  archivo' , () => {
	  expect(arrayFileOfDirectory('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1.md')).toEqual(arrayOfFile);
  });
  it('deberia retornar un array de todas las rutas en archivos si el argumento es una ruta de archivo', () => {
	  expect(arrayFileOfDirectory('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica')).toEqual(arrayOfFileOfDirectory);
  });
});


