import prebuild from "./prebuild.js";
import { cssVarWithDefault } from "./utils/helper.js";
import color from './compilers/color.js';

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

// 'Button':{
//     type:'group',
//     compiler:(value,custom)=>{
//         let stm='';
//         const order=['color','background-color','border-color'];
//         const values=value.replace(/^\(|\)$/g,'').split(',');
//         values.forEach((e,i)=>{
//             if(i<order.length){
//                 stm+=`${order[i]}:${color(e,custom)};`
//             }
//         });
//         return stm; 
//     }
  
//     options:{
//         'solid':'background-color:var(--main-color),color:var(--main-text-color,#fff)',
//         'outline':'--background-color:var(--outline-bg-color,transparent),--button-color:var(--main-color)',
//         'link':'background-color:var(--outline-bg-color,transparent),color:var(--main-color),border:none',
//         'ghost':'background:transparent',
//         'primary':'--button-main-color:var(--primary-color,),',
//         'success':'',
//         'error':'',
//         'warning':'',
//         'info':'',
//         'xs':'border-radius: 4px;padding: 0px 8px;font-size: 12px;height: 24px;line-height: 16px;gap: 4px;',
//         'sm':'border-radius: 4px;padding: 0px 12px;font-size: 14px;height: 32px;line-height: 20px;gap: 8px;',
//         'md':'border-radius: 4px;padding: 0px 15px;font-size: 15px;font-weight: 500;height: 35px;line-height: 1;',
//         'lg':'border-radius: 6px;padding: 0px 16px;font-size: 16px;height: 40px;line-height: 24px;gap: 12px;',
//         'lg':'border-radius: 6px; padding: 0px 24px;font-size: 18px;height: 48px;line-height: 26px;gap: 14px;',
//     },
// },

'Color':{
    type:'group',
    compiler:(value,custom)=>{
        let stm='';
        const order=['color','background-color','border-color'];
        const values=value.replace(/^\(|\)$/g,'').split(',');
        values.forEach((e,i)=>{
            if(i<order.length){
                stm+=`${order[i]}:${color(e,custom)};`
            }
        });
        return stm; 
    }
},
'theme':{
    type:'group',
    compiler:(value,custom)=>{
        const values=value.replace(/^\(|\)$/g,'').split(',');
        if(values.length===3){
            return `${values[0]}:light-dark(${color(values[1],custom)||values[1]},${color(values[2],custom)||values[2]})`
        }else{
            return '';
        }
        
    }},    


'ring':{
    type:'group',
    compiler:(value,custom)=>{
        if(/^--[a-zA-Z]/.test(value)){

          return `box-shadow:0 0 0 var(--ring-width,2px) ${cssVarWithDefault(value,color,custom)}`;  
        }
        return `box-shadow:0 0 0 var(--ring-width,2px) ${color(value,custom)}`;
        
    }
},

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
    1:`padding-left:var(--space-1,${1/4}rem);padding-right:var(--space-1,${1/4}rem)`,
    2:`padding-left:var(--space-2,${2/4}rem);padding-right:var(--space-2,${2/4}rem)`,
    3:`padding-left:var(--space-3,${3/4}rem);padding-right:var(--space-3,${3/4}rem)`,
    4:`padding-left:var(--space-4,${4/4}rem);padding-right:var(--space-4,${4/4}rem)`,
    5:`padding-left:var(--space-5,${5/4}rem);padding-right:var(--space-5,${5/4}rem)`,
    6:`padding-left:var(--space-6,${6/4}rem);padding-right:var(--space-6,${6/4}rem)`,
    7:`padding-left:var(--space-7,${7/4}rem);padding-right:var(--space-7,${7/4}rem)`,
    8:`padding-left:var(--space-8,${8/4}rem);padding-right:var(--space-8,${8/4}rem)`,
    9:`padding-left:var(--space-9,${9/4}rem);padding-right:var(--space-9,${9/4}rem)`,
    10:`padding-left:var(--space-10,${10/4}rem);padding-right:var(--space-10,${10/4}rem)`,
   
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
    1:`padding-left:var(--space-1,${1/4}rem);padding-right:var(--space-1,${1/4}rem)`,
    2:`padding-left:var(--space-2,${2/4}rem);padding-right:var(--space-2,${2/4}rem)`,
    3:`padding-left:var(--space-3,${3/4}rem);padding-right:var(--space-3,${3/4}rem)`,
    4:`padding-left:var(--space-4,${4/4}rem);padding-right:var(--space-4,${4/4}rem)`,
    5:`padding-left:var(--space-5,${5/4}rem);padding-right:var(--space-5,${5/4}rem)`,
    6:`padding-left:var(--space-6,${6/4}rem);padding-right:var(--space-6,${6/4}rem)`,
    7:`padding-left:var(--space-7,${7/4}rem);padding-right:var(--space-7,${7/4}rem)`,
    8:`padding-left:var(--space-8,${8/4}rem);padding-right:var(--space-8,${8/4}rem)`,
    9:`padding-left:var(--space-9,${9/4}rem);padding-right:var(--space-9,${9/4}rem)`,
    10:`padding-left:var(--space-10,${10/4}rem);padding-right:var(--space-10,${10/4}rem)`,
  
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
        1:`padding-top:var(--space-1,${1/4}rem);padding-bottom:var(--space-1,var(--space-1,${1/4}rem))`,
        2:`padding-top:var(--space-2,var(--space-2,${2/4}rem));padding-bottom:var(--space-2,var(--space-2,${2/4}rem))`,
        3:`padding-top:var(--space-3,var(--space-3,${3/4}rem));padding-bottom:var(--space-3,var(--space-3,${3/4}rem))`,
        4:`padding-top:var(--space-4,var(--space-4,${4/4}rem));padding-bottom:var(--space-4,var(--space-4,${4/4}rem))`,
        5:`padding-top:var(--space-5,var(--space-5,${5/4}rem));padding-bottom:var(--space-5,var(--space-5,${5/4}rem))`,
        6:`padding-top:var(--space-6,var(--space-6,${6/4}rem));padding-bottom:var(--space-6,var(--space-6,${6/4}rem))`,
        7:`padding-top:var(--space-7,var(--space-7,${7/4}rem));padding-bottom:var(--space-7,var(--space-7,${7/4}rem))`,
        8:`padding-top:var(--space-8,var(--space-8,${8/4}rem));padding-bottom:var(--space-8,var(--space-8,${8/4}rem))`,
        9:`padding-top:var(--space-9,var(--space-9,${9/4}rem));padding-bottom:var(--space-9,${9/4}rem)`,
        10:`padding-top:var(--space-10,var(--space-10,${10/4}rem));padding-bottom:var(--space-10,${10/4}rem)`,
     
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
        1:`padding-top:var(--space-1,${1/4}rem);padding-bottom:var(--space-1,${1/4}rem)`,
        2:`padding-top:var(--space-2,${2/4}rem);padding-bottom:var(--space-2,${2/4}rem)`,
        3:`padding-top:var(--space-3,${3/4}rem);padding-bottom:var(--space-3,${3/4}rem)`,
        4:`padding-top:var(--space-4,${4/4}rem);padding-bottom:var(--space-4,${4/4}rem)`,
        5:`padding-top:var(--space-5,${5/4}rem);padding-bottom:var(--space-5,${5/4}rem)`,
        6:`padding-top:var(--space-6,${6/4}rem);padding-bottom:var(--space-6,${6/4}rem)`,
        7:`padding-top:var(--space-7,${7/4}rem);padding-bottom:var(--space-7,${7/4}rem)`,
        8:`padding-top:var(--space-8,${8/4}rem);padding-bottom:var(--space-8,${8/4}rem)`,
        9:`padding-top:var(--space-9,${9/4}rem);padding-bottom:var(--space-9,${9/4}rem)`,
        10:`padding-top:var(--space-10,${10/4}rem);padding-bottom:var(--space-10,${10/4}rem)`,

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
        1:`margin-right:var(--space-1,${1/4}rem);margin-left:var(--space-1,${1/4}rem)`,
        '-1':`margin-right:calc( -1 * var(--space-1,${1/4}rem));margin-left:calc( -1 * var(--space-1,${1/4}rem))`,
        2:`margin-right:var(--space-2,${2/4}rem);margin-left:var(--space-2,${2/4}rem)`,
        '-2':`margin-right:calc( -1 * var(--space-2,${2/4}rem));margin-left:calc( -1 * var(--space-2,${2/4}rem))`,
        3:`margin-right:var(--space-3,${3/4}rem);margin-left:var(--space-3,${3/4}rem)`,
        '-3':`margin-right:calc( -1 * var(--space-3,${3/4}rem));margin-left:calc( -1 * var(--space-3,${3/4}rem))`,
        4:`margin-right:var(--space-4,${4/4}rem);margin-left:var(--space-4,${4/4}rem)`,
        '-4':`margin-right:calc( -1 * var(--space-4,${4/4}rem));margin-left:calc( -1 * var(--space-4,${4/4}rem))`,
        5:`margin-right:var(--space-5,${5/4}rem);margin-left:var(--space-5,${5/4}rem)`,
        '-5':`margin-right:calc( -1 * var(--space-5,${5/4}rem));margin-left:calc( -1 * var(--space-5,${5/4}rem))`,
        6:`margin-right:var(--space-6,${6/4}rem);margin-left:var(--space-6,${6/4}rem)`,
        '-6':`margin-right:calc( -1 * var(--space-6,${6/4}rem));margin-left:calc( -1 * var(--space-6,${6/4}rem))`,
        7:`margin-right:var(--space-7,${7/4}rem);margin-left:var(--space-7,${7/4}rem)`,
        '-7':`margin-right:calc( -1 * var(--space-7,${7/4}rem));margin-left:calc( -1 * var(--space-7,${7/4}rem))`,
        8:`margin-right:var(--space-8,${8/4}rem);margin-left:var(--space-8,${8/4}rem)`,
        '-8':`margin-right:calc( -1 * var(--space-8,${8/4}rem));margin-left:calc( -1 * var(--space-8,${8/4}rem))`,
        9:`margin-right:var(--space-9,${9/4}rem);margin-left:var(--space-9,${9/4}rem)`,
        '-9':`margin-right:calc( -1 * var(--space-9,${9/4}rem));margin-left:calc( -1 * var(--space-9,${9/4}rem))`,
        10:`margin-right:var(--space-10,${10/4}rem);margin-left:var(--space-10,${10/4}rem)`,
        '-10':`margin-right:calc( -1 * var(--space-10,${10/4}rem));margin-left:calc( -1 * var(--space-10,${10/4}rem))`,
     
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
        1:`margin-right:var(--space-1,${1/4}rem);margin-left:var(--space-1,${1/4}rem)`,
        '-1':`margin-right:calc( -1 * var(--space-1,${1/4}rem));margin-left:calc( -1 * var(--space-1,${1/4}rem))`,
        2:`margin-right:var(--space-2,${2/4}rem);margin-left:var(--space-2,${2/4}rem)`,
        '-2':`margin-right:calc( -1 * var(--space-2,${2/4}rem));margin-left:calc( -1 * var(--space-2,${2/4}rem))`,
        3:`margin-right:var(--space-3,${3/4}rem);margin-left:var(--space-3,${3/4}rem)`,
        '-3':`margin-right:calc( -1 * var(--space-3,${3/4}rem));margin-left:calc( -1 * var(--space-3,${3/4}rem))`,
        4:`margin-right:var(--space-4,${4/4}rem);margin-left:var(--space-4,${4/4}rem)`,
        '-4':`margin-right:calc( -1 * var(--space-4,${4/4}rem));margin-left:calc( -1 * var(--space-4,${4/4}rem))`,
        5:`margin-right:var(--space-5,${5/4}rem);margin-left:var(--space-5,${5/4}rem)`,
        '-5':`margin-right:calc( -1 * var(--space-5,${5/4}rem));margin-left:calc( -1 * var(--space-5,${5/4}rem))`,
        6:`margin-right:var(--space-6,${6/4}rem);margin-left:var(--space-6,${6/4}rem)`,
        '-6':`margin-right:calc( -1 * var(--space-6,${6/4}rem));margin-left:calc( -1 * var(--space-6,${6/4}rem))`,
        7:`margin-right:var(--space-7,${7/4}rem);margin-left:var(--space-7,${7/4}rem)`,
        '-7':`margin-right:calc( -1 * var(--space-7,${7/4}rem));margin-left:calc( -1 * var(--space-7,${7/4}rem))`,
        8:`margin-right:var(--space-8,${8/4}rem);margin-left:var(--space-8,${8/4}rem)`,
        '-8':`margin-right:calc( -1 * var(--space-8,${8/4}rem));margin-left:calc( -1 * var(--space-8,${8/4}rem))`,
        9:`margin-right:var(--space-9,${9/4}rem);margin-left:var(--space-9,${9/4}rem)`,
        '-9':`margin-right:calc( -1 * var(--space-9,${9/4}rem));margin-left:calc( -1 * var(--space-9,${9/4}rem))`,
        10:`margin-right:var(--space-10,${10/4}rem);margin-left:var(--space-10,${10/4}rem)`,
        '-10':`margin-right:calc( -1 * var(--space-10,${10/4}rem));margin-left:calc( -1 * var(--space-10,${10/4}rem))`,
     
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
        1:`margin-top:var(--space-1,${1/4}rem);margin-bottom:var(--space-1,${1/4}rem)`,
        '-1':`margin-top:calc( -1 * var(--space-1,${1/4}rem));margin-bottom:calc( -1 * var(--space-1,${1/4}rem))`,
        2:`margin-top:var(--space-2,${2/4}rem);margin-bottom:var(--space-2,${2/4}rem)`,
        '-2':`margin-top:calc( -1 * var(--space-2,${2/4}rem));margin-bottom:calc( -1 * var(--space-2,${2/4}rem))`,
        3:`margin-top:var(--space-3,${3/4}rem);margin-bottom:var(--space-3,${3/4}rem)`,
        '-3':`margin-top:calc( -1 * var(--space-3,${3/4}rem));margin-bottom:calc( -1 * var(--space-3,${3/4}rem))`,
        4:`margin-top:var(--space-4,${4/4}rem);margin-bottom:var(--space-4,${4/4}rem)`,
        '-4':`margin-top:calc( -1 * var(--space-4,${4/4}rem));margin-bottom:calc( -1 * var(--space-4,${4/4}rem))`,
        5:`margin-top:var(--space-5,${5/4}rem);margin-bottom:var(--space-5,${5/4}rem)`,
        '-5':`margin-top:calc( -1 * var(--space-5,${5/4}rem));margin-bottom:calc( -1 * var(--space-5,${5/4}rem))`,
        6:`margin-top:var(--space-6,${6/4}rem);margin-bottom:var(--space-6,${6/4}rem)`,
        '-6':`margin-top:calc( -1 * var(--space-6,${6/4}rem));margin-bottom:calc( -1 * var(--space-6,${6/4}rem))`,
        7:`margin-top:var(--space-7,${7/4}rem);margin-bottom:var(--space-7,${7/4}rem)`,
        '-7':`margin-top:calc( -1 * var(--space-7,${7/4}rem));margin-bottom:calc( -1 * var(--space-7,${7/4}rem))`,
        8:`margin-top:var(--space-8,${8/4}rem);margin-bottom:var(--space-8,${8/4}rem)`,
        '-8':`margin-top:calc( -1 * var(--space-8,${8/4}rem));margin-bottom:calc( -1 * var(--space-8,${8/4}rem))`,
        9:`margin-top:var(--space-9,${9/4}rem);margin-bottom:var(--space-9,${9/4}rem)`,
        '-9':`margin-top:calc( -1 * var(--space-9,${9/4}rem));margin-bottom:calc( -1 * var(--space-9,${9/4}rem))`,
        10:`margin-top:var(--space-10,${10/4}rem);margin-bottom:var(--space-10,${10/4}rem)`,
        '-10':`margin-top:calc( -1 * var(--space-10,${10/4}rem));margin-bottom:calc( -1 * var(--space-10,${10/4}rem))`,
     
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
        1:`margin-top:var(--space-1,${1/4}rem);margin-bottom:var(--space-1,${1/4}rem)`,
        '-1':`margin-top:calc( -1 * var(--space-1,${1/4}rem));margin-bottom:calc( -1 * var(--space-1,${1/4}rem))`,
        2:`margin-top:var(--space-2,${2/4}rem);margin-bottom:var(--space-2,${2/4}rem)`,
        '-2':`margin-top:calc( -1 * var(--space-2,${2/4}rem));margin-bottom:calc( -1 * var(--space-2,${2/4}rem))`,
        3:`margin-top:var(--space-3,${3/4}rem);margin-bottom:var(--space-3,${3/4}rem)`,
        '-3':`margin-top:calc( -1 * var(--space-3,${3/4}rem));margin-bottom:calc( -1 * var(--space-3,${3/4}rem))`,
        4:`margin-top:var(--space-4,${4/4}rem);margin-bottom:var(--space-4,${4/4}rem)`,
        '-4':`margin-top:calc( -1 * var(--space-4,${4/4}rem));margin-bottom:calc( -1 * var(--space-4,${4/4}rem))`,
        5:`margin-top:var(--space-5,${5/4}rem);margin-bottom:var(--space-5,${5/4}rem)`,
        '-5':`margin-top:calc( -1 * var(--space-5,${5/4}rem));margin-bottom:calc( -1 * var(--space-5,${5/4}rem))`,
        6:`margin-top:var(--space-6,${6/4}rem);margin-bottom:var(--space-6,${6/4}rem)`,
        '-6':`margin-top:calc( -1 * var(--space-6,${6/4}rem));margin-bottom:calc( -1 * var(--space-6,${6/4}rem))`,
        7:`margin-top:var(--space-7,${7/4}rem);margin-bottom:var(--space-7,${7/4}rem)`,
        '-7':`margin-top:calc( -1 * var(--space-7,${7/4}rem));margin-bottom:calc( -1 * var(--space-7,${7/4}rem))`,
        8:`margin-top:var(--space-8,${8/4}rem);margin-bottom:var(--space-8,${8/4}rem)`,
        '-8':`margin-top:calc( -1 * var(--space-8,${8/4}rem));margin-bottom:calc( -1 * var(--space-8,${8/4}rem))`,
        9:`margin-top:var(--space-9,${9/4}rem);margin-bottom:var(--space-9,${9/4}rem)`,
        '-9':`margin-top:calc( -1 * var(--space-9,${9/4}rem));margin-bottom:calc( -1 * var(--space-9,${9/4}rem))`,
        10:`margin-top:var(--space-10,${10/4}rem);margin-bottom:var(--space-10,${10/4}rem)`,
        '-10':`margin-top:calc( -1 * var(--space-10,${10/4}rem));margin-bottom:calc( -1 * var(--space-10,${10/4}rem))`,
      
    },
},

// ---------------------x-custom-compiler

'x-row':{
    type:'group',
    compiler:(value)=>{
        return `--x-row-gap:${value.trim()?value.replace(/^-(\d)/,'$1'):'16px'};display:flex;flex-wrap:wrap;margin-left:calc(var(--x-row-gap,${value.replace(/^-(\d)/,'$1')}) * -0.5);margin-right:calc(var(--x-row-gap,${value.replace(/^-(\d)/,'$1')}) * 0.5);`;
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
        return `--x-col-width:${value.replace(/^-(\d)/,'$1')};padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5);box-sizing:border-box;flex:0 0 var(--x-col-width,${value.replace(/^-(\d)/,'$1')});max-width:var(--x-col-width,${value.replace(/^-(\d)/,'$1')});`;
    },
    groups:{
        '1':`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5); box-sizing:border-box;flex:0 0 8.333%;max-width:8.333%;`,
       '2':`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5); box-sizing:border-box;flex:0 0 16.6667%;max-width:16.6667%;`,
       '3':`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5); box-sizing:border-box;flex:0 0 25%;max-width:25%;`,
       '4':`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5); box-sizing:border-box;flex:0 0 33.3333%;max-width:33.3333%;`,
       '5':`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5); box-sizing:border-box;flex:0 0 41.6667%;max-width:41.6667%;`,
       '6':`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5); box-sizing:border-box;flex:0 0 50%;max-width:50%;`,
       '7':`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5); box-sizing:border-box;flex:0 0 58.3333%;max-width:58.3333%;`,
       '8':`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5); box-sizing:border-box;flex:0 0 66.6667%;max-width:66.6667%;`,
       '9':`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5); box-sizing:border-box;flex:0 0 75%;max-width:75%;`,
        '10':`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5); box-sizing:border-box;flex:0 0 83.3333%;max-width:83.3333%;`,
        '11':`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5); box-sizing:border-box;flex:0 0 91.6667%;max-width:91.6667%;`,
        '12':`padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5); box-sizing:border-box;flex:0 0 100%;max-width:100%;`,
    },

},
// 'x-col-responsive':{
//     type:'statement',
//     statement:`[]`,

// },
'x-square':{
    type:'group',
    compiler:(value)=>{
        // case i : --var:value;
        let v='';
        
       if(/^--[a-zA-Z]/.test(value)){
        v=cssVarWithDefault(value)||'';
       }else{
        v=value.replace(/^-([-]?[\d])/g,'$1').replace(/([/d])p$/,'$1%');    
       }
        const val=`calc(${v} - var(--x-square-shrink, 0px) + var(--x-square-grow, 0px))`
        return `width:${val};height:${val};flex: 0 0 ${val}`
        
    },
    groups:{
        '0':'width:0px;height:0px;flex: 0 0 0px',
        '1':`width:var(--space-1,${1/4}rem;height:1px;flex: 0 0 var(--space-1,${1/4}rem`,
        '2':`width:var(--space-2,${2/4}rem;height:1px;flex: 0 0 var(--space-2,${2/4}rem`,
        '3':`width:var(--space-3,${3/4}rem;height:1px;flex: 0 0 var(--space-3,${3/4}rem`,
        '4':`width:var(--space-4,${4/4}rem;height:1px;flex: 0 0 var(--space-4,${4/4}rem`,
        '5':`width:var(--space-5,${5/4}rem;height:1px;flex: 0 0 var(--space-5,${5/4}rem`,
        '6':`width:var(--space-6,${6/4}rem;height:1px;flex: 0 0 var(--space-6,${6/4}rem`,
        '7':`width:var(--space-7,${7/4}rem;height:1px;flex: 0 0 var(--space-7,${7/4}rem`,
        '8':`width:var(--space-8,${8/4}rem;height:1px;flex: 0 0 var(--space-8,${8/4}rem`,
        '9':`width:var(--space-9,${9/4}rem;height:1px;flex: 0 0 var(--space-9,${9/4}rem`,
        '10':`width:var(--space-10,${10/4}rem;height:1px;flex: 0 0 var(--space-10,${10/4}rem`,
        '12':`width:var(--space-12,${12/4}rem;height:1px;flex: 0 0 var(--space-12,${12/4}rem`,
        '16':`width:var(--space-16,${16/4}rem;height:1px;flex: 0 0 var(--space-16,${16/4}rem`,
        '20':`width:var(--space-20,${20/4}rem;height:1px;flex: 0 0 var(--space-20,${20/4}rem`,
        '32':`width:var(--space-32,${32/4}rem;height:1px;flex: 0 0 var(--space-32,${32/4}rem`,
        
        'xs':'width:4px;height:4px;flex: 0 0 4px',
        'sm':'width:8px;height:8px;flex: 0 0 8px',
        'md':'width:16px;height:16px;flex: 0 0 16px',
        'lg':'width:24px;height:1px;flex: 0 0 24px',
        'xl':'width:32px;height:1px;flex: 0 0 32px',
        'xxl':'width:64px;height:1px;flex: 0 0 64px',
    }
},

   'x-width':{
    type:'group',
    compiler:(value)=>{
        if(/^--[a-zA-Z]/.test(value)){
            if(value.includes(':')){
            const val=value.slice(value.indexOf(':')).replace(':','');
                const cssVar=value.replace(val,'').replace(':','');
                return `width:calc(var(${cssVar},${val}) + var(--x-width-grow,0px) - var(--x-width-shrink,0px))`
            }
            return `width:calc(var(${value}) + var(--x-width-grow,0px) - var(--x-width-shrink,0px))`
            
        }
        return `width:calc(${value.replace(/^-([-]?[\d])/g,'$1')} + var(--x-width-grow,0px) - var(--x-width-shrink,0px))`
    },
   },
   'x-height':{
    type:'group',
    compiler:(value)=>{
        if(/^--[a-zA-Z]/.test(value)){
            if(value.includes(':')){
            const val=value.slice(value.indexOf(':')).replace(':','');
                const cssVar=value.replace(val,'').replace(':','');
                return `height:calc(var(${cssVar},${val}) + var(--x-height-grow,0px) - var(--x-height-shrink,0px))`
            }
            return `height:calc(var(${value}) + var(--x-height-grow,0px) - var(--x-height-shrink,0px))`
            
        }
        return `height:calc(${value.replace(/^-([-]?[\d])/g,'$1')} + var(--x-height-grow,0px) - var(--x-height-shrink,0px))`;
    },
   },


}

export default cssCustomCompilers;


