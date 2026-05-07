import prebuild from "./prebuild.js";
import { cssVarWithDefault } from "./utils/helper.js";
import color from './compilers/color.js';
import length from './compilers/length.js';
import {compiler} from './returnStatement.js';
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
'ButtonAR':{
    type:'group',
    compiler:(value,custom)=>{
        const stm=`
            --border-color: ${color('accentRA',custom)};
            --button-background: ${color('accentRATheme100',custom)};
            --button-gradient:${color('accentRATheme200',custom)};
            --button-border: ${color('accentRATheme300',custom)};
            --button-highlight: rgb(255 255 255 / 0.8);
            --button-shadow: ${color('accentRATheme400',custom)};
            --button-border-size: 1px;
            --button-text: ${color('accentRATheme1400',custom)};
            --button-gradient-size: 8px;
            --text-color: var(--gray-1200,${color('grayRATheme1200',custom)});
            --text-color-hover: var(--gray-1300,${color('grayRATheme1300',custom)});
            --text-color-disabled: var(--gray-600,${color('grayRATheme600',custom)});
    
    background:var(--button-background);
    display:inline-flex;align-items:center;justify-content:center;
    color: var(--button-text);
    box-shadow: 
      inset 0 -1px 0 var(--button-shadow), /* bottom shadow */
      inset 0 0 0 var(--button-border-size) var(--button-border), /* border */
      inset 0px calc(var(--button-border-size) + 1px) 0px var(--button-highlight), /* top specular highlight */
      inset 0px calc(-1 * var(--button-gradient-size)) var(--button-gradient-size) -2px var(--button-gradient); /* inner gradient */
    outline: none;
    transition-property: background, color, scale, box-shadow;
    transition-duration: 200ms;
    will-change: scale;
    forced-color-adjust: none;
    -webkit-tap-highlight-color: transparent;

    @media (prefers-color-scheme: dark) {
      --button-shadow: ${color('accentRATheme200',custom)};;
      --button-highlight: rgb(255 255 255 / 0.15);
      box-shadow:
        inset 0 var(--button-border-size) 0 var(--button-highlight), /* top specular highlight */
        inset 0 calc(-1 * var(--button-border-size)) 0 var(--button-shadow), /* bottom shadow */
        inset 0 0 0 var(--button-border-size) var(--button-border), /* border */
        inset 0 var(--button-gradient-size) var(--button-gradient-size) -2px var(--button-gradient); /* inner gradient */
    }

    &:where([data-pressed]) {
      --button-background: ${color('accentRATheme200',custom)};
    }

    &:where([data-focus-visible]) {
      outline: 2px solid var(--focus-ring-color,${color('accentRATheme1000',custom)});
      outline-offset: 2px;
    }

    &:where([data-variant=secondary]) {
      --button-color: ${color('grayRA',custom)};
    }

    &:where([data-variant=quiet]) {
      --button-background: none;
      --button-text: var(--text-color);
      box-shadow: 0 0 0 1px transparent;

      &:where([data-hovered], [data-pressed]) {
        --button-background: ${color('accentRATheme200',custom)};
        --button-text: var(--tint-1400);
        box-shadow: 0 0 0 1px ${color('accentRATheme200',custom)};
      }
    }

    &:where([data-selected]) {
      --button-background: oklch(from var(--button-color) 55% c h);
      --button-border: oklch(from var(--button-color) 50% c h);
      --button-gradient: var(--button-border);
      --button-highlight: rgb(255 255 255 / 0.2);
      --button-shadow: oklch(from var(--button-color) 30% c h);
      --button-text: var(--highlight-foreground);

      box-shadow:
        inset 0 -1px 0 var(--button-shadow), /* bottom shadow */
        inset 0 0 0 1px var(--button-border), /* border */
        inset 0 2px 0 var(--button-highlight), /* top specular highlight */
        inset 0 calc(-1 * var(--button-gradient-size)) var(--button-gradient-size) var(--button-gradient); /* inner gradient */

      @media (prefers-color-scheme: dark) {
        --button-highlight: rgb(255 255 255 / 0.4);
        --button-gradient: rgb(255 255 255 / 0.2);
        --button-shadow: var(--button-border);
        box-shadow:
          inset 0 1px 0 var(--button-highlight), /* top specular highlight */
          inset 0 var(--button-gradient-size) var(--button-gradient-size) var(--button-gradient), /* inner gradient */
          inset 0 0 0 1px var(--button-border); /* border */
      }

      &:where([data-pressed]) {
        --button-background: oklch(from var(--button-color) 50% c h);
      }
    }

    &:where([data-disabled]) {
      box-shadow: none;
      --button-background: var(--border-color-disabled);
      --button-text: var(--text-color-disabled);

      &:where([data-variant=quiet]) {
        --button-background: none;
      }
    }

    @media (forced-colors: active) {
      --button-background: ButtonFace;
      --button-text: ButtonText;
      --button-border: ButtonBorder;
      box-shadow: inset 0 0 0 var(--button-border-size) var(--button-border);

      &:where([data-variant=quiet]) {
        --button-border: transparent;
        &:where([data-hovered], [data-pressed]) {
          --button-border: ButtonBorder;
        }
      }

      &:where([data-selected]) {
        --button-background: Highlight;
        --button-text: HighlightText;
        --button-border: Highlight;
      }

      &:where([data-disabled]) {
        --button-background: ButtonFace;
        --button-text: GrayText;
        --button-border: GrayText;

        &:where([data-variant=quiet]) {
          --button-border: transparent;
        }
      }
  }`
        // const order=['padding','margin','gap'];
        // const values=value.replace(/^\(|\)$/g,'').split(',');
        // values.forEach((e,i)=>{
        //     if(i<order.length && e){
        //         if(/--[a-zA-Z]/.test(e)){
        //             stm+=`${order[i]}:var(${e});`
        //         }else{
        //             stm+=`${order[i]}:${length(e)};`
        //         }
                
        //     }
        // });
        return stm; 
    }
},
// Button:{
//     type:'group',
//     compiler:(value,custom)=>{
//         let stm=`
//         `
//     }
// },
'Space':{
    type:'group',
    compiler:(value,custom)=>{
        let stm='';
        const order=['padding','margin','gap'];
        const values=value.replace(/^\(|\)$/g,'').split(',');
        values.forEach((e,i)=>{
            if(i<order.length && e){
                if(/--[a-zA-Z]/.test(e)){
                    stm+=`${order[i]}:var(${e});`
                }else{
                    stm+=`${order[i]}:${length(e)};`
                }
                
            }
        });
        return stm; 
    }
},
// 'Grid':{
//     type:'group',
//     compiler:(value,custom)=>{
//         let stm=`display:grid;grid-template-columns:repeat(var(--columns),1fr);--columns:12;`;
//         const order=['xs','md','gap'];
//         const values=value.replace(/^\(|\)$/g,'').split(',');
//         values.forEach((e,i)=>{
//             if(i<order.length && e){
//                 if(/--[a-zA-Z]/.test(e)){
//                     stm+=`${order[i]}:var(${e});`
//                 }else{
//                     stm+=`${order[i]}:${length(e)};`
//                 }
                
//             }
//         });
//         return stm; 
//     }
// },
'Size':{
    type:'group',
    compiler:(value,custom)=>{
        let stm='';
        const order=['width','height','border-radius'];
        const values=value.replace(/^\(|\)$/g,'').split(',');
        if(values.length===1){
            const val=/--[a-zA-Z]/.test(values[0])?`var(${values[0]})`:length(values[0])
            return `width:${val};height:${val}`
        }
        values.forEach((e,i)=>{
            if(i<order.length && e){
                if(/--[a-zA-Z]/.test(e)){
                    stm+=`${order[i]}:var(${e});`
                }else{
                    stm+=`${order[i]}:${length(e)};`
                }
                
            }
        });
        return stm; 
    }
},

'Color':{
    type:'group',
    compiler:(value,custom)=>{
        let stm='';
        const order=['color','background-color','border-color'];
        const values=value.replace(/^\(|\)$/g,'').split(',');
        values.forEach((e,i)=>{
            if(i<order.length && e){
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


