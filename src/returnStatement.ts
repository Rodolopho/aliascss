import getPropertyAndValue from "./returnPropertyAndValue.js";
import { customStaticClassNames } from "./static/customStaticClassNames.js";
import media,{createRegexForMedia} from "./prefix/responsive.js";
import {customColors} from './static/customColors.js'
import {customColors as customColors2} from './static/customColors2.js'
import {getColorScale,customColorsRadix} from './static/customColorsRadix.js'
import extractPrefix from './prefix/extractPrefix.js';
import extractMediaPrefix from './prefix/extractMediaPrefix.js';
import {createCompilerObj, extractProperty} from "./utils/createCompilerObj.js";
import config from "./config.js";
import cssProps from "./css-properties-all.js";
import { staticClassNamesAlias } from "./static/staticClassNamesAlias.js";
import postcss from "postcss";
import { splitByCommaOutsideParens } from "./utils/helper.js";
import cssCustomCompilers from "./custom-css-compilers.js";
// import customGroups from './prebuild.js';

const [staticClassNamesWithAlias, cssPropsWithAlias]=createCompilerObj(cssProps,config.globalValues);


export const compiler:{
    make:(a:string,b?:string,c?:boolean)=>string,
    group:(a:string,b:string)=>string
    [key:string]:any
}={
    // cache will cache propertyAndValue
    cache:{propertyAndValue:{...customStaticClassNames}},
    custom:{...{colors:{...customColors,...customColors2,...customColorsRadix}}},
    mediaSelector:{...media.target},
    mediaTest:null,
    staticClassNames:{...staticClassNamesAlias,...staticClassNamesWithAlias},
    cssProps:{...cssPropsWithAlias,...cssCustomCompilers},
    prefix:null,
    rawCSS:null,
    customGroupStatement:null,

    extend(data:{[key:string]:Property}){
        Object.keys(data).forEach((key)=>{
            if(data[key].hasOwnProperty('extend')){
                if(cssProps.hasOwnProperty(data[key].extend)){
                    Object.keys(cssProps[data[key].extend]).forEach((each)=>{
                        if(each==='values'){
                            data[key].values=[...cssProps[data[key].extend].values||[],...data[key].values||[]];
                        }else if(each==='compiler'){
                            data[key].compiler=cssProps[data[key].extend].compiler;
                        }

                    })
                 }
             }
        })
        const [staticClassNames, compiler]=createCompilerObj(data,config.globalValues);
        this.cssProps={...this.cssProps,...compiler};
        this.staticClassNames={...this.staticClassNames,...staticClassNames};
    },
    // className as another-name, bool->only return property and value
    make(className:string,as?:string, bool?:boolean){
        // --Group Statement  
        if(this.cssProps.hasOwnProperty(className)){
            if(this.cssProps[className].hasOwnProperty('type') && (this.cssProps[className].type==='statement') ){
                return this.group(this.cssProps[className].statement,className);
            }
            if(this.cssProps[className].hasOwnProperty('type') && (this.cssProps[className].type==='raw') ){
                return this.cssProps[className].statement;
            }
        }
        if(/--as-[a-zA-Z0-9-_]+$/.test(className)){
            const asMatch=className.match(/--as-([a-zA-Z0-9-_]+)$/)??[null,null];
            if(asMatch[0] && asMatch[1]){
                return this.group(className.replace(asMatch[0],''),asMatch[1]);
            }
                
            }

        
        let unPrefixedClassName=className;
        // check for [group-acss,]
        const matchGroupCSS=className.match(/\[([^[]*)\]$/);
        if(matchGroupCSS){
            
            const asString=splitByCommaOutsideParens(matchGroupCSS[1])
            // .split(',')
            .map(e=>(className.replace(matchGroupCSS[0],'')+"-").replace(/--$/,'-')+e.replace(/^--/,'-'))
            .join(' ');
            return this.group(asString,as?as:className);
        }
        //
        let beforeClassNameSelector='';
        if(this.prefix && !className.match(new RegExp('^'+this.prefix+"[-]"))){
            return null;
            
        }else if(this.prefix){
            unPrefixedClassName=className.replace(new RegExp('^'+this.prefix+"[-]"),'');
        } 

        if(!this.mediaTest) this.mediaTest=createRegexForMedia(this.mediaSelector);

        // 1. check and extract Media prefix and return className with prefix treatment,
        let[ media,workingClassName]:[string,string]=extractMediaPrefix(unPrefixedClassName,this.mediaSelector,this.mediaTest);
        media=media;

        // 2. search for '&' which tells us to use selector before or after className
        if(workingClassName.match(/[&]/)){
           const[before,after]=workingClassName.split('&');
           beforeClassNameSelector=extractPrefix(before+"-display-none")[0]+" ";
           if(!beforeClassNameSelector.trim()){
                console.error('Not a valid AliasCSS className:'+className,'Make sure to provide valid css aliascss selector before "&" identifier');
                return null;
           }else{
            beforeClassNameSelector=beforeClassNameSelector.replace(/^([\s]?[+~>])(.*)/,"$2$1 ");
           }
           workingClassName=workingClassName.replace(before,'').replace('&','');
           
           
        }

        let [elementAndPseudo, important]=['','']
        // workingClassName=workingClassName.replace(/[_][\.]([a-zA-Z])/g,(s,e)=>"_"+'ACSS').replace(/[.]/g,"d").replace(/[%]/g,'p')

        // 3.  Process --important flag
        if(/(-i|--important)$/.test(className)){
            important=' !important';
            workingClassName=workingClassName.replace(/(-i|--important)$/,'');
        }
        // 4.  process Pseudo State
        const prefixPseudoElementAttribute=extractPrefix(workingClassName);
        workingClassName=prefixPseudoElementAttribute[1];
        elementAndPseudo=prefixPseudoElementAttribute[0];
        // ---------------------------------------------------------------------
        
        const pnv=workingClassName.replace(/^-([a-zA-Z])/,'$1');
        
        let result :any ='';
        // x-class
        
        //  if(/^(x-width|x-height)/.test(pnv)){
        //     const extract=getPropertyAndValue(pnv.replace('x-',''), this.cssProps, this.staticClassNames, this.custom,extractProperty);
        //     if(typeof extract === 'string'){
        //         const [p,v]=extract.split(':');
        //         if(p && v){
        //             result=`${p}:calc(${v} + var(--x-${p}-grow,0px) - var(--x-${p}-shrink,0px));`
        //         }
        //     }
         
        // }else 
        if(this.cache.propertyAndValue.hasOwnProperty(pnv)){
            result=this.cache.propertyAndValue[pnv];
        }else{
            try {
                result=getPropertyAndValue(pnv, this.cssProps, this.staticClassNames, this.custom,extractProperty);
            } catch (error) {
               console.log(error) 
            }
            
        }
        // if(result){
        //     className=className.replace(/([$.&%=\]\[@~:*#+\(\)\/^])/g,'\\$1');
        //     if(bool===true) return result;
        //     this.cache.propertyAndValue[pnv]=result;
        //     if(media){
        //         return `${media}{${
        //                beforeClassNameSelector+'.'+(as?as:className)+ elementAndPseudo
        //              }{${result}${important}}}`;
        //     }else{
        //         return `${beforeClassNameSelector}.${(as?as:className)}${elementAndPseudo}{${result}${important}}`;
        //     }

        // }else{
        //     console.log(`Unable to process ${className} [media:${media},pseudoSelector:${elementAndPseudo},imp:${important}]`)
        // }
        // ------------PostCSSParse

        if(result){
            let stm='';
            className=(as?as:className).replace(/([$.&%=\]\[@~,:*#+\(\)\/^])/g,'\\$1');
            if(bool===true) return result;
            this.cache.propertyAndValue[pnv]=result;
            if(media){
                stm=`${media}{${
                       beforeClassNameSelector+'.'+className+ elementAndPseudo
                     }{${result}${important}}}`;
            }else{
                stm= `${beforeClassNameSelector}.${className}${elementAndPseudo}{${result}${important}}`;
            }
            try {
                postcss.parse(stm);
                return stm;
            } catch (error) {
                console.log('Not a Valid CSS Statement, PostCSS Parse:',stm);
            }

        }else{
            console.log(`Unable to process ${className} [media:${media},pseudoSelector:${elementAndPseudo},imp:${important}]`)
        }

    },

    group(str:string, as:string){
        
        let statement='';
        [...str.trim().split(/\s+/)].forEach((e)=>{
            const getEachClassNameCompiled=this.make(e,as);
            if(getEachClassNameCompiled) statement += getEachClassNameCompiled + ' \n';
        })

        return statement;
    },
    prebuild(a: string | { [key: string]: string }, b: string) {
        if (typeof a === 'object') {
        for (const key in a) {
            if (a.hasOwnProperty(key)) this.cache.propertyAndValue[key] = a[key];
        }
        } else {
        if (a && b) {
            this.cache.propertyAndValue[a] = b;
        }
        }
    },
    groupForJs(str: string, bool: boolean) {
        if (!str.trim()) return '';
        const jsStyle: { [key: string]: any } = {};
        const list = str.trim().split(/\s+/);
        list.forEach((e:string) => {
        let pNv: any = '';
        if (this.cache.propertyAndValue.hasOwnProperty(e)) {
            pNv = this.cache.propertyAndValue[e];
        } else {
            pNv = getPropertyAndValue(e,this.cssProps,this.staticClassNames, this.custom, extractProperty);
            if (pNv) this.cache.propertyAndValue[e] = pNv;
        }
        if (!pNv) return '';
        const result = pNv.split(':');
        if (result.length === 2) {
            const key = result[0].replace(/-([a-z])/g, (e:string, a:string) => {
            return a.toUpperCase();
            });
            let value: string |number  = bool === true ? result[1].replace(/px$/g, '') : result[1];
            if (typeof value === 'string' && value.trim().match(/^[\d\.]+$/)) {
                value = parseFloat(value.toString());
            }

            jsStyle[key] = value;
        }
        });

        return jsStyle;
  },
  // obj:{'container':'p20px m-12pxx, 'section':'mt16px'}
  groupObj(obj: { [key: string]: string }) {
    if (typeof obj !== 'object') return false;
    let statement = '';

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const result = this.group(obj[key], key);
        if (result) {
          statement += result + '\n';
        }
      }
    }
    return statement;
  },    

addCustom(name: string, obj: { [key: string]: string }) {
     name=(name==='color'?'colors':name);
    if (typeof obj === 'object') {
      if (!this.custom[name]) this.custom[name] = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) this.custom[name][key] = obj[key];
      }
    }
  },
addMedia(obj:{[key:string]:string}){
    this.mediaSelector={...this.mediaSelector,...obj}
},
// styleToAliascss(value:string,bool:boolean){
//     let classValue='';
//     let styleValue='';
//     value.split(/\s*;\s*/).forEach((each)=>{
//         const [property,value]=each.match(/:/)?each.split(':'):['',''];
//         if(property && value){
//             if(cssProps.hasOwnProperty(property.trim())){
//                 classValue+=`${(bool===true && cssProps[property.trim()].alias)?cssProps[property.trim()].alias:property}-${
//                 value.trim().replace(/['"]/g, '').replace(/#/g, '').replace(/\((^\()\)/g, (m,s)=>'-'+s.replace(/[\s]*,[\s]*/g,'-'))
//                  .replace(/\s/g, '-').replace(/^var---/g,'-').replace(/-var-/g,'')
//                 }`
//             }else{
//                 styleValue+=each+'; ';
//             }

//         }else {
//              styleValue+=each+'; ';
//         }
       
//     })
// }
};

// ----------------------------------Extras

type Property = {
    alias?:string,
    type?:string,
    values?:string[]|[],
    compiler?:(...args: any[]) => any,
    [key:string]:any
    

}


// compiler.staticClassNames={...helper().generateStaticClassNames(compiler.cssProps,config['css-global-values'])};
// compiler.addCustom('color',customColors)

