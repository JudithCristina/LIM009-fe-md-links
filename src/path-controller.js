const path = require('path')
const fs = require('fs')
const absolutePath = '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/'


export const validatePathAbsolute = ( absolutePath) => {
    if(path.isAbsolute( absolutePath)===true){
      return  absolutePath
    }else{
      return  absolutePath.resolve( absolutePath)
    }
}

export const isFile = (absolutePath) => {
  const stats = fs.statSync( absolutePath);
  return stats.isFile()
}

export const isDirectory = ( absolutePath) => {
  const stats = fs.statSync( absolutePath);
  return stats.isDirectory()
}

export const readFile = ( absolutePath) => {
  const fileContent = fs.readFileSync( absolutePath, 'utf8')
  return fileContent;
};
//console.log(readFile('../archivos/lucero.md'));

export const readDirectory = ( absolutePath) => {
  const arrayOfFile= fs.readdirSync( absolutePath, 'utf8');
  return arrayOfFile;
};

export const searchFileMd = ( absolutePath) => {
  let fileMd= path.extname( absolutePath) === '.md'
  return fileMd;
}

console.log(searchFileMd(absolutePath))
console.log(validatePathAbsolute(absolutePath))
console.log(isFile(absolutePath))
console.log(isDirectory(absolutePath))
console.log(readDirectory(absolutePath))
console.log(readFile(absolutePath))

//readDir('../archivos');
//console.log(readDir('../archivos'));
// Ruta relativa de una carpeta '../archivos';
// Ruta relativa de un archivo '../archivos/lucero.md';


/*export const filePathExists = (filePath) =>{ 
  return new Promise((resolve, reject) => { 
  fs.stat(filePath, (err, stats) => { 
   if (err && err.code === 'ENOENT') { 
   return resolve(false); 
   } else if (err) { 
   return reject(err); 
   } 
   if (stats.isFile() || stats.isDirectory()) { 
   return resolve(true); 
   } 
  }); 
  }); 
} 

/*export const filePathExists1 = (filePath) => {
  fs.stat(filePath, (err, stats)) => {
    if (stats.isFile() || stats.isDirectory()) { 
      return true; 
  }
  else { return false}
}
}*/


/*const readDirectory = (route) => {
  return fs.readdir(route, (err, files) => {
    if (err) throw err;
    files.forEach((f) => {
      isRouteFile(f)
    })
  })
}

export const gettingFsStatObject = (path) => {
  const stat = fs.statSync(path);
  return stat;
};
// gettingFsStatObject('../archivos/lucero.md');
/*console.log(isFile('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/'))
console.log(isDirectory('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/'))
console.log(filePathExists(filePath))
console.log(stats)



console.log(validatePathAbsolute('index.js'))*/
