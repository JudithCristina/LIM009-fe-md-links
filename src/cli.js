const chalk = require('chalk');
import { mdLinks } from './md-links.js'
import { getStatLinks } from './stats.js'
import { getValidateStatLinks } from './stats.js'
let route = process.argv[2]
let parameter2 = process.argv[3]
let parameter3 = process.argv[4]






export const mdLinksCli = (route, parameter2, parameter3) => {
    if (route !== undefined && parameter2 == undefined && parameter3 == undefined) {
        return mdLinks(route, { validate: false })
            .then(result => {
                if (typeof result === 'string') {
                    return chalk.red(result)
                }
                else {
                    const newArray = result.map(element => {
                        return `href:${element.href}\ntext:[${element.text}]\nfile:${element.file}\n`
                    })
                    const routeCli = newArray.toString().replace(/,/g, '\n');
                    return routeCli
                }

            }).catch(e => {
                return chalk.red(e)
            })
    } else if (route !== undefined && parameter2 == '--validate' && parameter3 == undefined) {
        return mdLinks(route, { validate: true })
            .then(result => {
                if (typeof result === 'string') {
                    return chalk.red(result)
                } else {
                    const newArray = result.map(element => {
                        return `href:${element.href}\ntext:[${element.text}]\nfile:${element.file}\ncode:${element.code}\nstatus:${element.status}\n`
                    })
                    const routeCli = newArray.toString().replace(/,/g, '\n');
                    return routeCli
                }
            }).catch(e => {
                return chalk.red(e)
            })
    } else if (route !== undefined && parameter2 == '--stats' && parameter3 == undefined) {
        return mdLinks(route, { validate: true })
            .then(result1 => {
                if (typeof result1 === 'string') {
                    return chalk.red(result1)
                } else {
                    let stats = getStatLinks(result1)
                    return `Total: ${stats.total} \nUnique: ${stats.unique} \n`
                }
            })
            .catch(e => {
                return chalk.red(e)
            })
    } else if (route !== undefined && parameter2 == '--validate' && parameter3 == '--stats') {
        return mdLinks(route, { validate: true })
            .then(result1 => {
                if (typeof result1 === 'string') {
                    return chalk.red(result1)
                } else {
                    let stat = getValidateStatLinks(result1)
                    return `Total: ${stat.total} \nUnique: ${stat.unique} \nBroken:${stat.broken}`
                }
            }).catch(e => {
                return chalk.red(e)
            })
    } else {
        return chalk.red(`Corregir argumentos (path, --validate, --stats)\n`)
    }
}


/*onsole.log(mdLinksCli(route,parameter2,parameter3))

mdLinksCli(route,parameter2,parameter3)
   .then((result)=>{
    console.log(result)
   })
    .catch((e)=>{
     console.log(e)
   })*/


/*mdLinks(route, {validate: true})
.then(result => console.log(getStatLinks(result)))*/