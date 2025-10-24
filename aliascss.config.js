import {getCompiler,main} from './lib/index.js'
import { compilers } from './custom-compilers.js';
import prebuild from './lib/prebuild.js';
const config={
    input:['ui-dev/**/*.html','experiments/**/*.html'],
    output:{
        location:'demo/css/css/style/acss.css',
        "--file":true
    },
    '--module':true,
    prefix:'',
    importModuleAs:'x',
    minify:true,
    extractorFunction:"x|@",
    //reg:new RegExp('x' + "(`|\\(["+`"'])`+ "(.+)" + "(`|" + `["']` + "\\))") ,
    media:{
        prefix:{
            xs:'@media (max-width : 24px)'
        }
    },
    extend:{
        // Note property cannot include uppercase/number character but first character uppercase allowed
        ...compilers,
        'txt-shadow':{
            property:'--webkit-text-shadow',
            compiler:(value)=>{
                console.log(value);
                return value
            },
        },
        'solor':{
            property:'color',
            extend:'color',
            // compiler:(value)=>this.compiler(value)
        },
        $color:{extend:'color'},
        test:{
            property:'color',
            compiler:(value,custom)=>{
                return config.extend.$color.compiler(value,custom);
            },
            values:['red:sex']
        },
        'font-size':{
            alias:'fs',
            values:["2rem:xl"],
            compiler:(value)=>{
                return value;
            }
        },
        $padding:{extend:'padding'},
        'padding':{
           alias:'p',
            compiler:getCompiler('padding').compiler,
            values:[...getCompiler('padding').values,'var(--padding-xs,4px):xs','8px:sm','12px:md','14px:lg','16px:xl','20px:xxl']
        },
        'px':{
            type:'group',
            compiler:(value)=>{
                // const value=

            }
        },
        'py':{},
        'shadows':{
            property:'box-shadow',
            //alias:'sdo',
            compiler:(value)=>{
                value=value.slice(1);
                const values={
                    '3xl': ' 0px 32px 64px -12px var(--shadow-color)',
                    'xxxl': ' 0px 32px 64px -12px var(--shadow-color)',
                    '2xl': ' 0px 24px 48px -12px var(--shadow-color)',
                    'xxl': ' 0px 24px 48px -12px var(--shadow-color)',
                    'xl': ' 0px 20px 24px -4px var(--shadow-color)',
                    'lg': ' 0px 12px 16px -4px var(--shadow-color)',
                    'md': ' 0px 4px 8px -2px var(--shadow-color)',
                    'sm': ' 0px 1px 3px var(--shadow-color)',
                    'xs': ' 0px 1px 2px var(--shadow-color)',
                };
                if(values.hasOwnProperty(value)) return values[value];
            }
         
        }
    },
    //statement:``,
    custom:{
        colors:{
            white:'#e3e3e3',
            'whiter':'#f3f3f3',
            whitest:'#ffffff',
            "primary":"#4E60FF",
        "primary-lightest":"#F8F9FF",
        "primary-light":"#F3F4FF",
        "primary-30":"#CACFFF",
        "primary-hover":"#697BFF",
        "primary-dark":"#3A4CEB",

        "black":"#2B2B43",
        "gray-dark":"#545563",
        "gray":"#83859C",
        "gray-light":"#C7C8D2",
        "gray-lightest":"#EDEEF2",
        "main-bg-color":"#F7F7F9",

        "error":"#FF5C60",
        "error-lightest":"#FFF6F6",
        "error-light":"#FFEAEA",
        "error-hover":"#FF6B6F",
        "error-dark":"#E13E42",
        "success":'#1ABF70',
        "success-light":'#E8F9F1',
        "secondary":"#FD6D22",
        "secondary-light":"#FFF3ED",
        "tertiary":"#8C3EEE",
        "tertiary-light":"#F6F0FE",
        }
    },
    prebuild:{
        //'colorize-dark':'background:#0f0f0f;color:#e3e3e3',
        //'x-clip-menu':'clip-path: polygon(0% 10%,100% 10%,100% 20%,0% 20%,0% 45%,100% 45%,100% 55%,0% 55%,0% 80%,100% 80%,100% 90%,0% 90%);',
        
    },
    group:{
        //...prebuild,
        //'x-card':"w-256px h-120px [class~=shadow]-bxs-0px-12px-24px-rgba-43-43-67-0d16 bgc-fff b-1px-s-gray-lightest br-16px --hover-bgc-primary-lightest --hover-b-1px-s-primary-hover --active[b-1px-s-primary,bgc-primary-light]",
        'x-responsive':'xs-w-100p sm-w-540px md-w-720px lg-w-960px xl-w-1140px xxl-w-1320px',
        'x-responsive-sm':'xs-w-100p sm-w-540px md-w-720px lg-w-960px xl-w-1140px xxl-w-1320px',
        'x-responsive-md':'xs-w-100p sm-w-100p md-w-720px lg-w-960px xl-w-1140px xxl-w-1320px',
        'x-responsive-lg':'xs-w-100p sm-w-100p md-w-100p lg-w-960px xl-w-1140px xxl-w-1320px',
        'x-responsive-xl':'xs-w-100p sm-w-100p md-w-100p lg-w-100p xl-w-1140px xxl-w-1320px',
        'x-responsive-xll':'xs-w-100p sm-w-100p md-w-100p lg-w-100p xl-w-100p xxl-w-1320px',
        'x-responsive-fluid':'xs-w-100p sm-w-100p md-w-100p lg-w-100p xl-100p xxl-100p',
    },
    statement:`.color{color:red}`,
   ignore:['bgc-red'] 
}
export  default config;

