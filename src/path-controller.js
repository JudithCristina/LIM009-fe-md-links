import  path from 'path';
import  fs  from 'fs';


export const validatePathAbsolute = ( absolutePath) => {
    if(path.isAbsolute( absolutePath)===true){
      return  absolutePath
    }else{
      return  path.resolve( absolutePath)
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

export const readDirectory = ( absolutePath) => {
  const arrayOfFile= fs.readdirSync( absolutePath, 'utf8');
  let array1=arrayOfFile.map(file => path.join(absolutePath,file))
 /*let array2= array1.map(file => {if(isDirectory(file)===true) {
   console.log(file)*/
   return array1;
}


export const arrayFileOfDirectory = (absolutePath) => {
  let array = [];
  if(isFile(absolutePath)){
    if(searchFileMd(absolutePath)){
      array.push(absolutePath)
    }
  }
  else{
  let dir  = fs.readdirSync(absolutePath)
  dir.forEach((file) => {
  let arrayTotal=arrayFileOfDirectory(path.join(absolutePath,file))
  array= array.concat(arrayTotal)
  })
  }
  return array;
}
 
export const searchFileMd = ( absolutePath) => {
  let fileMd= path.extname( absolutePath) === '.md'
  return fileMd;
}





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
};*/

/*console.log(validatePathAbsolute(absolutePath))
console.log(readFile(absolutePath))*/