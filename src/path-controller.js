import  path from 'path';
import  fs  from 'fs';

export const itExists = inputPath => fs.existsSync(inputPath);

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
