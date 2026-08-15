import {getCompiler,main} from './lib/index.js'
import { compilers } from './custom-compilers.js';
import prebuild from './lib/prebuild.js';
const config={
    // input:['ui-dev/**/*.html','experiments/**/*.html'],
    input:['ui-dev/**/css-nono-test.html'],
    output:{
        location:'demo/css/css/style/acss.css',
        "--file":true
    },
    '--module':true,
    prefix:'',
    importModuleAs:'x',
    // minify:true,
    extractorFunction:"String",
    //reg:new RegExp('x' + "(`|\\(["+`"'])`+ "(.+)" + "(`|" + `["']` + "\\))") ,
    media:{
        prefix:{
            xs:'@media (max-width : 24px)'
        }
    },
     prebuild:{
        'colorize-dark':'background:#0f0f0f;color:#e3e3e3',
        //'x-clip-menu':'clip-path: polygon(0% 10%,100% 10%,100% 20%,0% 20%,0% 45%,100% 45%,100% 55%,0% 55%,0% 80%,100% 80%,100% 90%,0% 90%);',
        
    },
    group:{
        //...prebuild,
        //'x-card':"w-256px h-120px [class~=shadow]-bxs-0px-12px-24px-rgba-43-43-67-0d16 bgc-fff b-1px-s-gray-lightest br-16px --hover-bgc-primary-lightest --hover-b-1px-s-primary-hover --active[b-1px-s-primary,bgc-primary-light]",
        'x-responsive':'xs-w-100p sm-w-540px md-w-720px lg-w-960px xl-w-1140px 2xl-w-1320px',
        'x-responsive-sm':'xs-w-100p sm-w-540px md-w-720px lg-w-960px xl-w-1140px 2xl-w-1320px',
        'x-responsive-md':'xs-w-100p sm-w-100p md-w-720px lg-w-960px xl-w-1140px 2xl-w-1320px',
        'x-responsive-lg':'xs-w-100p sm-w-100p md-w-100p lg-w-960px xl-w-1140px 2xl-w-1320px',
        'x-responsive-xl':'xs-w-100p sm-w-100p md-w-100p lg-w-100p xl-w-1140px 2xl-w-1320px',
        'x-responsive-2xl':'xs-w-100p sm-w-100p md-w-100p lg-w-100p xl-w-100p 2xl-w-1320px',
        'x-responsive-fluid':'xs-w-100p sm-w-100p md-w-100p lg-w-100p xl-100p 2xl-100p',
        'btn':`\
        [bgc-red,c-yellow] 
        --hover[c-blue,bgc-yellow]
        `,
        
    },
    statement:`.color{color:red}`,

   
   
   ignore:['bgc-red'] 
}
export  default config;

