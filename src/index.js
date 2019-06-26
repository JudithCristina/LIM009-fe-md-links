#!/usr/bin/env node

import {mdLinksCli} from './cli.js'


mdLinksCli(process.argv[2],process.argv[3] ,process.argv[4])
.then(result =>{
  console.log (result);
})
.catch(e => {
    console.log (e)
});