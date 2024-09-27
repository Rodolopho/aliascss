import main ,{ watch} from './lib/node/compileFile.js'
import postcss from 'postcss';

import path from 'path'
import safeParse from 'postcss-safe-parser';
let config=await import(path.resolve('aliascss.config.js'))
console.log(config.default.input);
// watch({input:['./demo/**/*.html'],output:{location:'./demo/acss.css','--file':true}});
//const safe = require('postcss-safe-parser')

const badCss = 'a {'

// postcss().process('.border{color:::red', { parser: safeParse }).then(result => {
// postcss().process('.border::hover{##transform:srrrr}', { }).then(result => {
//   //result.css //= 'a {}'
//   console.log(result.css);
// }).catch((e)=>{
//     console.log('Error')
// })

console.log(postcss.parse(`@media (max-width : 576px){
    .xs-bgc-red{background-color:red}
}`));
console.log(postcss.parse('.button{color:red}'));
console.log(postcss([]).process('.button{color:::red').css);