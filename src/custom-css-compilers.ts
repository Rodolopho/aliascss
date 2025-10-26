import prebuild from "./prebuild.js";

type Property = {
    alias?:string,
    property?: string,
    test?:RegExp,
    type?:string,
    values?:string[],
    groups?:{[key:string]:string},
    statement?:string,
    compiler?:(a:string, b:{ [key: string]: { [key: string]: string}})=>any,

}



const cssCustomCompilers:{
    [key:string]:Property
}={
    ...prebuild,

// padding, margin
'padding-x':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `padding-left:var(${y});padding-right:var(${y})`;
        }
        const value=y.split('-');
        if(value.length===3){
            return `padding-left:${value[1]};padding-right:${value[2]}`;
        }else if(value.length===2){
            return `padding-left:${value[1]};padding-right:${value[1]}`;
        }
        // else{
        //     return `padding-left:${y};padding-right:${y}`;
        // }
        },
    groups:{
        0:"padding-left:0;padding-right:0",
    1:`padding-left:${1/4}rem;padding-right:${1/4}rem`,
    2:`padding-left:${2/4}rem;padding-right:${2/4}rem`,
    3:`padding-left:${3/4}rem;padding-right:${3/4}rem`,
    4:`padding-left:${4/4}rem;padding-right:${4/4}rem`,
    5:`padding-left:${5/4}rem;padding-right:${5/4}rem`,
    6:`padding-left:${6/4}rem;padding-right:${6/4}rem`,
    7:`padding-left:${7/4}rem;padding-right:${7/4}rem`,
    8:`padding-left:${8/4}rem;padding-right:${8/4}rem`,
    9:`padding-left:${9/4}rem;padding-right:${9/4}rem`,
    10:`padding-left:${10/4}rem;padding-right:${10/4}rem`,
    },
},
'px':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `padding-left:var(${y});padding-right:var(${y})`;
        }
        const value=y.split('-');
        if(value.length===3){
            return `padding-left:${value[1]};padding-right:${value[2]}`;
        }else if(value.length===2){
            return `padding-left:${value[1]};padding-right:${value[1]}`;
        }
        // else{
        //     return `padding-left:${y};padding-right:${y}`;
        // }
        },
    groups:{
        0:"padding-left:0;padding-right:0",
    1:`padding-left:${1/4}rem;padding-right:${1/4}rem`,
    2:`padding-left:${2/4}rem;padding-right:${2/4}rem`,
    3:`padding-left:${3/4}rem;padding-right:${3/4}rem`,
    4:`padding-left:${4/4}rem;padding-right:${4/4}rem`,
    5:`padding-left:${5/4}rem;padding-right:${5/4}rem`,
    6:`padding-left:${6/4}rem;padding-right:${6/4}rem`,
    7:`padding-left:${7/4}rem;padding-right:${7/4}rem`,
    8:`padding-left:${8/4}rem;padding-right:${8/4}rem`,
    9:`padding-left:${9/4}rem;padding-right:${9/4}rem`,
    10:`padding-left:${10/4}rem;padding-right:${10/4}rem`,
    },
},

'padding-y':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `padding-top:var(${y});padding-bottom:var(${y})`;
        }
        const value=y.split('-');
        if(value.length===3){
            return `padding-top:${value[1]};padding-bottom:${value[2]}`;
        }else if(value.length===2){
            return `padding-top:${value[1]};padding-bottom:${value[1]}`;
        }
        // else{
        //     return `padding-top:${y};padding-bottom:${y}`;
        // }
        },
    groups:{
        0:"padding-top:0;padding-bottom:0",
        1:`padding-top:${1/4}rem;padding-bottom:${1/4}rem`,
        2:`padding-top:${2/4}rem;padding-bottom:${2/4}rem`,
        3:`padding-top:${3/4}rem;padding-bottom:${3/4}rem`,
        4:`padding-top:${4/4}rem;padding-bottom:${4/4}rem`,
        5:`padding-top:${5/4}rem;padding-bottom:${5/4}rem`,
        6:`padding-top:${6/4}rem;padding-bottom:${6/4}rem`,
        7:`padding-top:${7/4}rem;padding-bottom:${7/4}rem`,
        8:`padding-top:${8/4}rem;padding-bottom:${8/4}rem`,
        9:`padding-top:${9/4}rem;padding-bottom:${9/4}rem`,
        10:`padding-top:${10/4}rem;padding-bottom:${10/4}rem`,
    },
},
'py':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `padding-top:var(${y});padding-bottom:var(${y})`;
        }
        const value=y.split('-');
        if(value.length===3){
            return `padding-top:${value[1]};padding-bottom:${value[2]}`;
        }else if(value.length===2){
            return `padding-top:${value[1]};padding-bottom:${value[1]}`;
        }
        // else{
        //     return `padding-top:${y};padding-bottom:${y}`;
        // }
        },
    groups:{
        0:"padding-top:0;padding-bottom:0",
        1:`padding-top:${1/4}rem;padding-bottom:${1/4}rem`,
        2:`padding-top:${2/4}rem;padding-bottom:${2/4}rem`,
        3:`padding-top:${3/4}rem;padding-bottom:${3/4}rem`,
        4:`padding-top:${4/4}rem;padding-bottom:${4/4}rem`,
        5:`padding-top:${5/4}rem;padding-bottom:${5/4}rem`,
        6:`padding-top:${6/4}rem;padding-bottom:${6/4}rem`,
        7:`padding-top:${7/4}rem;padding-bottom:${7/4}rem`,
        8:`padding-top:${8/4}rem;padding-bottom:${8/4}rem`,
        9:`padding-top:${9/4}rem;padding-bottom:${9/4}rem`,
        10:`padding-top:${10/4}rem;padding-bottom:${10/4}rem`,
    },
},
// Margin
'margin-x':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `margin-left:var(${y});margin-right:var(${y})`;
        }
        const value=y.replace(/--/g,'-M').split('-');
        if(value.length===3){
            return `margin-left:${value[1].replace("M",'-')};margin-right:${value[2].replace("M",'-')}`;
        }else if(value.length===2){
            return `margin-left:${value[1].replace("M",'-')};margin-right:${value[1].replace("M",'-')}`;
        }
        // else{
        //     return `margin-left:${y};margin-right:${y}`;
        // }
        },
    groups:{
        0:"margin-right:0;margin-left:0",
        1:`margin-right:${1/4}rem;margin-left:${1/4}rem`,
        '-1':`margin-right:-${1/4}rem;margin-left:-${1/4}rem`,
        2:`margin-right:${2/4}rem;margin-left:${2/4}rem`,
        '-2':`margin-right:-${2/4}rem;margin-left:-${2/4}rem`,
        3:`margin-right:${3/4}rem;margin-left:${3/4}rem`,
        '-3':`margin-right:-${3/4}rem;margin-left:-${3/4}rem`,
        4:`margin-right:${4/4}rem;margin-left:${4/4}rem`,
        '-4':`margin-right:-${4/4}rem;margin-left:-${4/4}rem`,
        5:`margin-right:${5/4}rem;margin-left:${5/4}rem`,
        '-5':`margin-right:-${5/4}rem;margin-left:-${5/4}rem`,
        6:`margin-right:${6/4}rem;margin-left:${6/4}rem`,
        '-6':`margin-right:-${6/4}rem;margin-left:-${6/4}rem`,
        7:`margin-right:${7/4}rem;margin-left:${7/4}rem`,
        '-7':`margin-right:-${7/4}rem;margin-left:-${7/4}rem`,
        8:`margin-right:${8/4}rem;margin-left:${8/4}rem`,
        '-8':`margin-right:-${8/4}rem;margin-left:-${8/4}rem`,
        9:`margin-right:${9/4}rem;margin-left:${9/4}rem`,
        '-9':`margin-right:-${9/4}rem;margin-left:-${9/4}rem`,
        10:`margin-right:${10/4}rem;margin-left:${10/4}rem`,
        '-10':`margin-right:-${10/4}rem;margin-left:-${10/4}rem`,
    },
},
'mx':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `margin-left:var(${y});margin-right:var(${y})`;
        }
        const value=y.replace(/--/g,'-M').split('-');
        if(value.length===3){
            return `margin-left:${value[1].replace("M",'-')};margin-right:${value[2].replace("M",'-')}`;
        }else if(value.length===2){
            return `margin-left:${value[1].replace("M",'-')};margin-right:${value[1].replace("M",'-')}`;
        }
        // else{
        //     return `margin-left:${y};margin-right:${y}`;
        // }
        },
    groups:{
        0:"margin-left:0;margin-right:0",
        1:`margin-right:${1/4}rem;margin-left:${1/4}rem`,
        '-1':`margin-right:-${1/4}rem;margin-left:-${1/4}rem`,
        2:`margin-right:${2/4}rem;margin-left:${2/4}rem`,
        '-2':`margin-right:-${2/4}rem;margin-left:-${2/4}rem`,
        3:`margin-right:${3/4}rem;margin-left:${3/4}rem`,
        '-3':`margin-right:-${3/4}rem;margin-left:-${3/4}rem`,
        4:`margin-right:${4/4}rem;margin-left:${4/4}rem`,
        '-4':`margin-right:-${4/4}rem;margin-left:-${4/4}rem`,
        5:`margin-right:${5/4}rem;margin-left:${5/4}rem`,
        '-5':`margin-right:-${5/4}rem;margin-left:-${5/4}rem`,
        6:`margin-right:${6/4}rem;margin-left:${6/4}rem`,
        '-6':`margin-right:-${6/4}rem;margin-left:-${6/4}rem`,
        7:`margin-right:${7/4}rem;margin-left:${7/4}rem`,
        '-7':`margin-right:-${7/4}rem;margin-left:-${7/4}rem`,
        8:`margin-right:${8/4}rem;margin-left:${8/4}rem`,
        '-8':`margin-right:-${8/4}rem;margin-left:-${8/4}rem`,
        9:`margin-right:${9/4}rem;margin-left:${9/4}rem`,
        '-9':`margin-right:-${9/4}rem;margin-left:-${9/4}rem`,
        10:`margin-right:${10/4}rem;margin-left:${10/4}rem`,
        '-10':`margin-right:-${10/4}rem;margin-left:-${10/4}rem`,
    },
},

'margin-y':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `margin-top:var(${y});margin-bottom:var(${y})`;
        }
        const value=y.replace(/--/g,'-M').split('-');
        if(value.length===3){
            return `margin-top:${value[1].replace("M",'-')};margin-bottom:${value[2].replace("M",'-')}`;
        }else if(value.length===2){
            return `margin-top:${value[1].replace("M",'-')};margin-bottom:${value[1].replace("M",'-')}`;
        }
        // else{
        //     return `margin-top:${y};margin-bottom:${y}`;
        // }
        },
    groups:{
        0:"margin-top:0;margin-bottom:0",
        1:`margin-top:${1/4}rem;margin-bottom:${1/4}rem`,
        '-1':`margin-top:-${1/4}rem;margin-bottom:-${1/4}rem`,
        2:`margin-top:${2/4}rem;margin-bottom:${2/4}rem`,
        '-2':`margin-top:-${2/4}rem;margin-bottom:-${2/4}rem`,
        3:`margin-top:${3/4}rem;margin-bottom:${3/4}rem`,
        '-3':`margin-top:-${3/4}rem;margin-bottom:-${3/4}rem`,
        4:`margin-top:${4/4}rem;margin-bottom:${4/4}rem`,
        '-4':`margin-top:-${4/4}rem;margin-bottom:-${4/4}rem`,
        5:`margin-top:${5/4}rem;margin-bottom:${5/4}rem`,
        '-5':`margin-top:-${5/4}rem;margin-bottom:-${5/4}rem`,
        6:`margin-top:${6/4}rem;margin-bottom:${6/4}rem`,
        '-6':`margin-top:-${6/4}rem;margin-bottom:-${6/4}rem`,
        7:`margin-top:${7/4}rem;margin-bottom:${7/4}rem`,
        '-7':`margin-top:-${7/4}rem;margin-bottom:-${7/4}rem`,
        8:`margin-top:${8/4}rem;margin-bottom:${8/4}rem`,
        '-8':`margin-top:-${8/4}rem;margin-bottom:-${8/4}rem`,
        9:`margin-top:${9/4}rem;margin-bottom:${9/4}rem`,
        '-9':`margin-top:-${9/4}rem;margin-bottom:-${9/4}rem`,
        10:`margin-top:${10/4}rem;margin-bottom:${10/4}rem`,
        '-10':`margin-top:-${10/4}rem;margin-bottom:-${10/4}rem`,
    },
},
'my':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `margin-top:var(${y});margin-bottom:var(${y})`;
        }
        const value=y.replace(/--/g,'-M').split('-');
        if(value.length===3){
            return `margin-top:${value[1].replace("M",'-')};margin-bottom:${value[2].replace("M",'-')}`;
        }else if(value.length===2){
            return `margin-top:${value[1].replace("M",'-')};margin-bottom:${value[1].replace("M",'-')}`;
        }
        // else{
        //     return `margin-top:${y};margin-bottom:${y}`;
        // }
        },
    groups:{
        0:"margin-top:0;margin-bottom:0",
        1:`margin-top:${1/4}rem;margin-bottom:${1/4}rem`,
        '-1':`margin-top:-${1/4}rem;margin-bottom:-${1/4}rem`,
        2:`margin-top:${2/4}rem;margin-bottom:${2/4}rem`,
        '-2':`margin-top:-${2/4}rem;margin-bottom:-${2/4}rem`,
        3:`margin-top:${3/4}rem;margin-bottom:${3/4}rem`,
        '-3':`margin-top:-${3/4}rem;margin-bottom:-${3/4}rem`,
        4:`margin-top:${4/4}rem;margin-bottom:${4/4}rem`,
        '-4':`margin-top:-${4/4}rem;margin-bottom:-${4/4}rem`,
        5:`margin-top:${5/4}rem;margin-bottom:${5/4}rem`,
        '-5':`margin-top:-${5/4}rem;margin-bottom:-${5/4}rem`,
        6:`margin-top:${6/4}rem;margin-bottom:${6/4}rem`,
        '-6':`margin-top:-${6/4}rem;margin-bottom:-${6/4}rem`,
        7:`margin-top:${7/4}rem;margin-bottom:${7/4}rem`,
        '-7':`margin-top:-${7/4}rem;margin-bottom:-${7/4}rem`,
        8:`margin-top:${8/4}rem;margin-bottom:${8/4}rem`,
        '-8':`margin-top:-${8/4}rem;margin-bottom:-${8/4}rem`,
        9:`margin-top:${9/4}rem;margin-bottom:${9/4}rem`,
        '-9':`margin-top:-${9/4}rem;margin-bottom:-${9/4}rem`,
        10:`margin-top:${10/4}rem;margin-bottom:${10/4}rem`,
        '-10':`margin-top:-${10/4}rem;margin-bottom:-${10/4}rem`,
      
    },
},

// ---------------------x-custom-compiler

'x-row':{
    type:'group',
    compiler:(value)=>{
        return `--x-row-gap:${value.replace(/^-(\d)/,'$1')};display:flex;flex-wrap:wrap;margin-left:calc(var(--x-row-gap,${value.replace(/^-(\d)/,'$1')}) * -0.5);margin-right:calc(var(--x-row-gap,${value.replace(/^-(\d)/,'$1')}) * 0.5);`;
    },
    groups:{
        'xs':`--x-row-gap:4px;display:flex;flex-wrap:wrap;margin-left:calc(var(--x-row-gap,4px) * -0.5);margin-right:calc(var(--x-row-gap,16px) * 0.5);`,
        'sm':`--x-row-gap:8px;display:flex;flex-wrap:wrap;margin-left:calc(var(--x-row-gap,8px) * -0.5);margin-right:calc(var(--x-row-gap,16px) * 0.5);`,
        'md':`--x-row-gap:16px;display:flex;flex-wrap:wrap;margin-left:calc(var(--x-row-gap,16px) * -0.5);margin-right:calc(var(--x-row-gap,16px) * 0.5);`,
        'lg':`--x-row-gap:24px;display:flex;flex-wrap:wrap;margin-left:calc(var(--x-row-gap,24px) * -0.5);margin-right:calc(var(--x-row-gap,16px) * 0.5);`,
        'xl':`--x-row-gap:32px;display:flex;flex-wrap:wrap;margin-left:calc(var(--x-row-gap,32px) * -0.5);margin-right:calc(var(--x-row-gap,16px) * 0.5);`,
    },
},

'x-col':{
    type:'group',
    compiler:(value)=>{
        return `--x-col-width:${value.replace(/^-(\d)/,'$1')};padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 var(--x-col-width,${value.replace(/^-(\d)/,'$1')});max-width:var(--x-col-width,${value.replace(/^-(\d)/,'$1')});`;
    },
    groups:{
        1:`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 100%;max-width:100%;`,
        2:`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 50%;max-width:50%;`,
        3:`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 33.3333%;max-width:33.3333%;`,
        4:`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 25%;max-width:25%;`,
        5:`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 20%;max-width:20%;`,
        6:`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 16.6667%;max-width:16.6667%;`,
        7:`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 14.2857%;max-width:14.2857%;`,
        8:`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 12.5%;max-width:12.5%;`,
        9:`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 11.1111%;max-width:11.1111%;`,
        10:`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 10%;max-width:10%;`,
        11:`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 9.0909%;max-width:9.0909%;`,
        12:`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5) box-sizing:border-box;flex:0 0 8.3333%;max-width:8.3333%;`,
    },

},
// 'x-col-responsive':{
//     type:'statement',
//     statement:`[]`,

// },
'x-square':{
    type:'group',
    compiler:(value)=>{
        const v=value.replace(/^-([-]?[\d])/g,'$1');
        return `width:calc(${v} + var(--x-square-grow,0px) - var(--x-square-shrink,0px)); flex-basis:calc(${v} + var(--x-square-grow,0px) - var(--x-square-shrink,0px)); flex-shrink:0;flex-grow:0;height:calc(${v} + var(--x-square-grow,0px) - var(--x-square-shrink,0px))`;
    },
   },
   'x-circle':{
    type:'group',
    compiler:(value)=>{
         const v=value.replace(/^-([-]?[\d])/g,'$1');
        return `width:calc(${v} + var(--x-circle-grow,0px) - var(--x-circle-shrink,0px)); height:calc(${v} + var(--x-circle-grow,0px) - var(--x-circle-shrink,0px)); border-radius:50%;`;
    },
   },
   'x-width':{
    property:'width',
    compiler:(value)=>{
        if(/^--[a-zA-Z]/.test(value)){
            if(value.includes(':')){
            const val=value.slice(value.indexOf(':')).replace(':','');
                const cssVar=value.replace(val,'').replace(':','');
                return `calc(var(${cssVar},${val}) + var(--x-width-grow,0px) - var(--x-width-shrink,0px))`
            }
            return `calc(var(${value}) + var(--x-width-grow,0px) - var(--x-width-shrink,0px))`
            
        }
        return `calc(${value.replace(/^-([-]?[\d])/g,'$1')} + var(--x-width-grow,0px) - var(--x-width-shrink,0px))`
    },
   },
   'x-height':{
    property:'height',
    compiler:(value)=>{
        if(/^--[a-zA-Z]/.test(value)){
            if(value.includes(':')){
            const val=value.slice(value.indexOf(':')).replace(':','');
                const cssVar=value.replace(val,'').replace(':','');
                return `calc(var(${cssVar},${val}) + var(--x-height-grow,0px) - var(--x-height-shrink,0px))`
            }
            return `calc(var(${value}) + var(--x-height-grow,0px) - var(--x-height-shrink,0px))`
            
        }
        return `calc(${value.replace(/^-([-]?[\d])/g,'$1')} + var(--x-height-grow,0px) - var(--x-height-shrink,0px))`;
    },
   },


}

export default cssCustomCompilers;


