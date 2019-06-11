import { validatePathAbsolute, isFile} from '../lib/path-controller.js';

describe('Función que retorna una ruta absoluta', () => {
  it('validatePathAbsolute debería ser una función', () => {
    expect(typeof validatePathAbsolute).toBe('function');
  });
  it('Es una ruta absoluta', () => {
    expect(validatePathAbsolute('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/index.js')).toBe('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/index.js');        
  });
  it('convertir a una ruta absoluta', () => {
    expect(validatePathAbsolute('lib/index.js')).toBe('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/lib/index.js');        
  });
});

describe('funcion  que permite saber si la ruta es de un archivo', () => {
  it('deberia retornar que es un archivo', () => {
	  expect(isFile('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/index.js')).toBe(true);
  });
  it('deberia retornar que no es un archivo', () => {
	  expect(isFile('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/')).toBe(false);
  });
});


