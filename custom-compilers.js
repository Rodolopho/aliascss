import {getCompiler} from './lib/index.js'
export const compilers={
    'x-square':{
    type:'group',
    compiler:(value)=>{
        const v=value.replace(/-([\d])/g,'$1');
        return `width:calc(${v} + var(--x-square-grow,0px) - var(--x-square-shrink,0px)); flex-basis:calc(${v} + var(--x-square-grow,0px) - var(--x-square-shrink,0px)); flex-shrink:0;flex-grow:0;height:calc(${v} + var(--x-square-grow,0px) - var(--x-square-shrink,0px))`;
    },
   },
   'x-circle':{
    type:'group',
    compiler:(value)=>{
         const v=value.replace(/-([\d])/g,'$1');
        return `width:calc(${v} + var(--x-circle-grow,0px) - var(--x-circle-shrink,0px)); height:calc(${v} + var(--x-circle-grow,0px) - var(--x-circle-shrink,0px)); border-radius:50%;`;
    },
   },
   'x-box':{
    type:'group',
    compiler:(value)=>{
        const property=['width','height','padding','margin'];
        let result='display:block; ';
        const match=/-([-]?[\w\.]+)/;
         value.match(new RegExp(match,'g')).forEach((e,i)=>{
                    if(i<property.length){
                        result+=`${property[i]}:${e.replace(match,'$1').replace(/(\d)d(\d)/,'$1.$2').replace(/([\d])p([\s]|$)/,'$1%$2')};`;
                    }else{
                        result=result.replace(/;$/,` ${e.replace(match,'$1').replace(/(\d)d(\d)/,'$1.$2').replace(/([\d])p([\s]|$)/,'$1%$2')};`)
                    }      
                })
                return result;
    },
   },
   'Flex-box':{ 
    type:'group',
    compiler:(value)=>{
        const property=['flex-direction','justify-content','align-items','margin'];
        let result='display:flex; ';
        const match=/-([-]?[\w\.]+)/;
         value.match(new RegExp(match,'g')).forEach((e,i)=>{
                    if(i<property.length){
                        result+=`${property[i]}:${e.replace(match,'$1').replace(/(\d)d(\d)/,'$1.$2').replace(/([\d])p([\s]|$)/,'$1%$2')};`;
                    }else{
                        result=result.replace(/;$/,` ${e.replace(match,'$1').replace(/(\d)d(\d)/,'$1.$2').replace(/([\d])p([\s]|$)/,'$1%$2')};`)
                    }      
                })
                return result;
    },
   },
   
}

//Grid-box
//Flex-child
//Grid-child
//Color
//Container
//Section
//Text-size-lineHeight-letterSpacing-decoration
//Border-borderWidth-borderStyle-Border-color-borderRadius
//List
//Table
