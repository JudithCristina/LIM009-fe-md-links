import { isAbsolutePath, convertToAbsolute, isfilePath, mdExtension } from '../src/index.js';

describe('Función que permite conocer si la ruta es absoluta o no', () => {
  it('rootAbsolute debería ser una función', () => {
    expect(typeof isAbsolutePath).toBe('function');
  });
  it('Es una ruta absoluta', () => {
    expect(isAbsolute('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/index.js')).toBe(true);        
  });
  it('No es ruta absoluta', () => {
    expect(isAbsolute('../src/index.js')).toBe(false);        
  });
});

describe('Función que permite convertir una ruta relativa a  absoluta', () => {
  it('convertToAbsolute  debería ser una función', () => {
    expect(typeof convertToAbsolute).toBe('function');
  });
  it('Convierte una ruta relativa en ruta absoluta', () => {
    expect(convertToAbsolute('../src/index.js')).toEqual('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/index.js')      
  });     
});


describe('funcion  que permite saber si la ruta es de un archivo', () => {
  it('deberia retornar que es un archivo', () => {
	  expect(isfilePath('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/index.js')).toBe(true);
  });
  it('deberia retornar que no es un archivo', () => {
	  expect(isfilePath('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src')).toBe(false);
  });
});

describe('función para conocer si es una extensión md', () => {
  it('deberia ser una función', () => {
    expect(typeof mdExtension).toEqual('function');
  });
  it('debería recibir un path absoluto de un archivo y retornar la extensión .md', () => {
    expect(mdExtension('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/README.md')).toBe('.md');
  });
  it('Debería recibir un path absoluto de un archivo que no es md y retornar error', () => {
    expect(isMd('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/README.html')).toBe('no se encontro archivo md')
  });
});