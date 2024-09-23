import {getCompiler} from './lib/index.js'
export const compilers={
   Box:{ 
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
