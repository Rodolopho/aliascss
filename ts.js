import main ,{ watch} from './lib/node/compileFile.js'
import path from 'path'
let config=await import(path.resolve('aliascss.config.js'))
console.log(config.default.input);
// watch({input:['./demo/**/*.html'],output:{location:'./demo/acss.css','--file':true}});