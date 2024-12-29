import {getCompiler,main} from './lib/index.js'
import { compilers } from './custom-compilers.js';
const config={
    input:['experiments/**/*.html'],
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
            compiler:(value)=>value
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
        }
    },
    prebuild:{
        'colorize-dark':'background:#0f0f0f;color:#e3e3e3',
        'colorize-light':'background:#e3e3e3;color:rgba(0,0,0,0.8)',
        'flex-center':'display:flex;align-items:center;justify-content:center',
        'absolute-center':'position:absolute;top:0;right:0;left:0;bottom:0:margin:auto',
        'sr-only':'position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0',
    },
    group:{
        'responsive':'xs-w-100p sm-w-540px md-w-720px lg-w-960px xl-w-1140px xxl-w-1320px',
        'responsive-sm':'xs-w-100p sm-w-540px md-w-720px lg-w-960px xl-w-1140px xxl-w-1320px',
        'responsive-md':'xs-w-100p sm-w-100p md-w-720px lg-w-960px xl-w-1140px xxl-w-1320px',
        'responsive-lg':'xs-w-100p sm-w-100p md-w-100p lg-w-960px xl-w-1140px xxl-w-1320px',
        'responsive-xl':'xs-w-100p sm-w-100p md-w-100p lg-w-100p xl-w-1140px xxl-w-1320px',
        'responsive-xll':'xs-w-100p sm-w-100p md-w-100p lg-w-100p xl-w-100p xxl-w-1320px',
        'responsive-fluid':'xs-w-100p sm-w-100p md-w-100p lg-w-100p xl-100p xxl-100p',
    },
    statement:`.color{color:red}`,
   ignore:['bgc-red'] 
}
export  default config;

/* const xconfig= {
    // input glob pattern or array of glob pattern
    input:'public/*.html',
 
    // Output css file , file must exist or should be created manully if file doesnot exist
    output:{
        // path to main/master css file which include every compiled css declaration for given input
        location:'./public/css/acss.css',
        "--file":true// output css file for each file
    },
 
    //---------------Below this are all optional -------------------------
    // Customize media prefix selector
    media:{
        prefix:{
            xs:'@media (max-width : 600px)'
        }
    },
    // support for css Module
    '--module':true,
    
    // import module as i.e import x form 'page.module.css'
    importModuleAs:'x',
 
    // uncomment minify is true if you want main css file to be minified by cssnano
 
    // minify:true,
 
    // name of extractorFunction
    extractorFunction:"x",
     
     // prefix aliascss  ac-bgc-red ac--hover-color-red
    // prefix:'ac',
 
    //Truncate the css file , you should let it true unless you know what your are doing
    truncate:true,
    	
     //ADD Custom color Value
	custom:{
		colors:{
            //custom name for color value  must not have  "-" or "_" to work perfectly.
			'main':"rgb(12,23,45)",// now you can use bgc-main
			'theme':'#c6c6c6'
 
		}
 
	},
    // Create your own compiler 
     extend:{
        'font-size':{
            alias:'fs',
            values:["2rem:xl"],
            compiler:(value)=>{
                return value;
            }
        },
        'txt-color':{
            proerty:'color',  
            extend:'color' // now you can use txt-color in place color 
        },
 
        // Now you can use shadow as className property e.g shadow-xs 
        'shadow':{
            property:'box-shadow',
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
    // predefine className 
	prebuild:{
        //section
        'text-xl': 'font-size:20px;line-height:30px',
        'text-lg': 'font-size:18px;line-height:28px',
        'text-md': 'font-size:16px;line-height:24px',
        'text-sm': 'font-size:14px;line-height:20px',
        'text-xs': 'font-size:12px;line-height:18px',
 
        'text-xl': 'font-size:20px;line-height:30px',
        'text-lg': 'font-size:18px;line-height:28px',
        'text-md': 'font-size:16px;line-height:24px',
        'text-sm': 'font-size:14px;line-height:20px',
        'text-xs': 'font-size:12px;line-height:18px',
 
        'radius-xs':'border-radius:4px',
 
        'flex-center':'display:flex;align-items:center;justify-content:center',
    },
    //Add some css statement in every compiled css file
	statement:`
        :root{
            --bg-dark-color:rgba(111,111,111,1) ;
            --bg-light-color:rgba(21,21,21,1) ;
            --outline-color:blue;
    
        }
 
        body{
            font-family:BlinkMacSystemFont , -apple-system , "Segoe UI"  ;
        }
 
	`,
 
	// pre group valid Aliascss classNames in single className
	group:{
		'container':' df fdc bsbb aic flex-shrink-1 flex-grow-1 ',
		'section':'flex-shrink0 bsbb',
        
	},
    // if some of the className collide with other CSS framework like bootstrap and tailwindcss
    // You wanna  tell aliascss to ignore it...
	ignore:['fs12px', 'c-red','bgc-red'],// these classnames will be ignored
}
*/