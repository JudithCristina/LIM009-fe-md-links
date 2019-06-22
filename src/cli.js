const chalk = require('chalk');
import { mdLinks} from './md-links.js'
import {getStatLinks} from './stats.js'
import {getValidateStatLinks} from './stats.js'
 let route = process.argv[2]
 let validate=process.argv[3]
 let stat=process.argv[4]






export const mdLinksCli = ( route, validate, stat)=>{
    if (route!==undefined && validate == undefined &&  stat == undefined) {
      return mdLinks(route, {validate: false})
      .then(result => {
        const newArray = result.map(element => { 
        return  `href:${element.href}\ntext:[${element.text}]\nfile:${element.file}\n`
        })
        const routeCli = newArray.toString().replace(/,/g, '\n');
    return routeCli
  
}).catch(console.error);
    } else if (route!==undefined && validate == '--validate' &&  stat == undefined){
        return mdLinks(route, {validate: true})
      .then(result => {
        const newArray = result.map(element => { 
        return  `href:${element.href}\ntext:[${element.text}]\nfile:${element.file}\ncode:${element.code}\nstatus:${element.status}\n`
        })
        const routeCli = newArray.toString().replace(/,/g, '\n');
    return routeCli
  
}).catch(console.error);
    } else if (route!==undefined && validate =='--stats' &&  stat == undefined){
    return mdLinks(route, {validate: true})
    .then(result1 => {
        let stats = getStatLinks(result1)
        return `Total: ${stats.total} \nUnique: ${stats.unique} \n`
    })
      .catch(console.error)
} else{
    return mdLinks(route, {validate: true})
    .then(result1 => {
        let stat = getValidateStatLinks(result1)
        return `Total: ${stat.total} \nUnique: ${stat.unique} \nBroken:${stat.broken}`
})
}
}



/*console.log(mdLinks(route,options2))*/

mdLinksCli(route,validate,stat)
   .then((result)=>{
    console.log(result)
   })
    .catch((e)=>{
     console.log(e)
   })


   /*mdLinks(route, {validate: true})
   .then(result => console.log(getStatLinks(result)))*/