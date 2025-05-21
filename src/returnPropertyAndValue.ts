

type Property = {
    alias?:string,
    property?: string,
    type?:string,
    values?:string[],
    groups?:{[key:string]:string}
    // compiler?:(a:string, b:{ [key: string]: { [key: string]: string}})=>any,
    compiler?:(...args: any[]) => any,

}



/**
 * @param className : string
 * @param cssPropertiesWithAlias: Compiler Object 
 * @param staticClassNames : StaticClassNames
 * @param custom : custom values for color, font, etc
 * @param extractProperty :extractProperty(className:string,cssPropertiesWithAlias:{[key:string]:Property})=>[Property,string] 
 * @param bool : return[property,value] or property:value
 * @returns {string[]|null|{}}
 */
export  default function getPropertyAndValue(
    className:string, 
     cssPropertiesWithAlias:{[key:string]:Property},
      staticClassNames:{[key:string]:string},
      custom:{[key:string]:{[key:string]:string}},
      extractProperty:any, // (a:string,b:{[key:string]:Property})=>[Property,string],
      bool:boolean=false
      ): string[]|null|{} {

    // Case 1 StaticClassNames
    if(staticClassNames.hasOwnProperty(className)){
        return staticClassNames[className];
    }
    // case CSS define var

    if(className.startsWith('--') && className.includes(':')){
        let value=className.slice(className.indexOf(':')).replace(':','');
        const property=className.replace(value,'').replace(':','');
        const possiblePropsName=property.slice(property.lastIndexOf('-')+1);
        let compiler=null;
        if(cssPropertiesWithAlias.hasOwnProperty(possiblePropsName) && cssPropertiesWithAlias[possiblePropsName].hasOwnProperty('compiler') && typeof cssPropertiesWithAlias[possiblePropsName].compiler === 'function'){
            compiler =cssPropertiesWithAlias[possiblePropsName].compiler;
        }
        // case 1: CSS Variable inside css variable
        if(/^calc/.test(value)){
            return bool?[property,value.replace(/([-+/*])([\d]|var\(|calc\()/g,' $1 $2')]:property+":"+value.replace(/([-+/*])([\d]|var\(|calc\()/g,' $1 $2');
        }

        // case 2: CSS variable in side css variable
        if(/^--[a-zA-Z]/.test(value)){
            if(value.includes(':')){
                let val=value.slice(value.indexOf(':')).replace(':','');
                const cssVar=value.replace(val,'').replace(':','');
                if(compiler && typeof compiler === 'function'){
                    const v=compiler(val ,custom);
                    val=v?v:val;
                }
                return  bool?[property,"var("+cssVar + ','+ val+')']:property+": var("+cssVar + ','+ val+ ')';
            }
            return  bool?[property,"var("+value + ')']:property+": var("+value+ ')';
            
        }else{
            // If has text in end 
            if(/text$/.test(property)){
                const v='"'+value.replace(/([_]?)[_]/g,'$1 ').replace(/_[\s]/g,'_')+'"';
                 return  bool?[property,v]:property+":"+ v;
            }
            // Rest

            if(compiler && typeof compiler === 'function'){
                const v=compiler(value ,custom);
                value=v?
                v
                :
                value.replace(/[-]([-]?[\w])/g,' $1').replace(/([\d])d([\d])/g,'$1.$2').replace(/([\d])p[\s]/g,"$1% ").replace(/([\d])p$/,"$1%").replace(/[\s]by[\s]/g,' / ')
                .replace(/auto flow/g,'auto-flow')
                .replace(/__/g," ")
                .replace(/[\s](mix|cmyk|set|gradient|bezier|content|shadow|rotate|dark|conic|linear|radial)/g,'-$1');
            }else{
                value=value.replace(/[-]([-]?[\w])/g,' $1').replace(/([\d])d([\d])/g,'$1.$2').replace(/([\d])p[\s]/g,"$1% ").replace(/([\d])p$/,"$1%").replace(/[\s]by[\s]/g,' / ')
                .replace(/auto flow/g,'auto-flow')
                .replace(/__/g," ")
                .replace(/[\s](mix|cmyk|set|gradient|bezier|content|shadow|rotate|dark|conic|linear|radial)/g,'-$1');
            }
            
            return bool?[property,value]:property+":"+value;
            
            // return bool?[property,value.replace(/[-]([-]?[\w])/g,' $1').replace(/([\d])d([\d])/g,'$1.$2').replace(/([\d])p[\s]/g,"$1% ").replace(/([\d])p$/,"$1%").replace(/[\s]by[\s]/g,' / ')
            //     .replace(/auto flow/g,'auto-flow').replace(/__/g," ")
            //     .replace(/[\s](mix|cmyk|set|gradient|bezier|content|shadow|rotate|dark|conic|linear|radial)/g,'-$1')
            //     ]
            // :
            // property+":"+value.replace(/[-]([-]?[\w])/g,' $1').replace(/([\d])d([\d])/g,'$1.$2').replace(/([\d])p[\s]/g,"$1% ").replace(/([\d])p$/,"$1%").replace(/[\s]by[\s]/g,' / ')
            // .replace(/auto flow/g,'auto-flow')
            // .replace(/__/g," ")
            // .replace(/[\s](mix|cmyk|set|gradient|bezier|content|shadow|rotate|dark|conic|linear|radial)/g,'-$1'); 
        }
    }

     
    const [property, propertyKey]=extractProperty(className,cssPropertiesWithAlias);
    //  console.log(propertyKey,'ttt',property,className)
    if(property){
        
        // check for type='group'
        if(property.hasOwnProperty('type') && property.type==="group"){
            const valuePortion=className.replace(propertyKey,'');
            if(property.hasOwnProperty('groups') && property.groups.hasOwnProperty(valuePortion.replace(/^-/,''))){
                return property.groups[valuePortion.replace(/^-/,'')];
            }
            return property.compiler(valuePortion,custom)|| '';
        }

        // --End of Group type
        const prop=property.property?property.property:propertyKey;

            // Case 2: CSS Variables
            if (/--var--/.test(className)) {
                const splits: string[] = className.split(/--var--/);
                if(cssPropertiesWithAlias.hasOwnProperty(splits[0])){
                    if(splits[1].includes(':')){
                        let value=splits[1].slice(splits[1].indexOf(':')).replace(':','');
                        const cssVar=splits[1].replace(value,'').replace(':','');
                        if(/^calc\(/.test(value)){
                            return  bool?[prop,"var(--"+cssVar + ','+ value.replace(/([-+/*])([\d]|var\(|calc\()/g,' $1 $2')+')']: prop+": var(--"+cssVar + ','+ value.replace(/([-+/*])([\d]|var\(|calc\()/g,' $1 $2')+ ')';
                        }
                        if(property.hasOwnProperty('compiler') && typeof property.compiler === 'function'){
                            const val=property.compiler(value ,custom);
                           value=val?val:value; 
                        }
                        return  bool?[prop,"var(--"+cssVar + ','+ value+')']: prop+": var(--"+cssVar + ','+ value+ ')';


                    }
                    return  bool?[prop,"var(--"+splits[1] + ')']: prop+": var(--"+splits[1] + ')';
                }
            } 

            const valuePortion=className.replace(propertyKey,'');

            // case 3: calc function
            if (/^--calc\(/.test(valuePortion)) {
                 return bool?[prop,valuePortion.replace(/^--/,'').replace(/([-+/*])([\d]|var\(|calc\()/g,' $1 $2')]:prop+":"+valuePortion.replace(/^--/,'').replace(/([-+/*])([\d]|var\(|calc\()/g,' $1 $2');
            }
 
            // case 4: CSS variable without --var keyword
            
           
            if(/^--[a-zA-Z]/.test(valuePortion)){
                if(valuePortion.includes(':')){
                    let value=valuePortion.slice(valuePortion.indexOf(':')).replace(':','');
                    const cssVar=valuePortion.replace(value,'').replace(':','');
                    if(/^calc\(/.test(value)){
                        return  bool?[prop,"var("+cssVar + ','+ value.replace(/([-+/*])([\d]|var\(|calc\()/g,' $1 $2')+')']: prop+": var("+cssVar + ','+ value.replace(/([-+/*])([\d]|var\(|calc\()/g,' $1 $2')+ ')';

                    }
                    
                    if(property.hasOwnProperty('compiler') && typeof property.compiler === 'function'){
                         const val=property.compiler(value ,custom);
                        value=val?val:value; 
                     }
                    return  bool?[prop,"var("+cssVar + ','+ value+')']: prop+": var("+cssVar + ','+ value+ ')';
                }
                
                return  bool?[prop,"var("+valuePortion + ')']:prop+": var("+valuePortion + ')';
            }
            if(property.hasOwnProperty('compiler') && typeof property.compiler === 'function'){
             
                // const value=property.compiler(valuePortion.replace(/^-/,'') ,custom);
                const value=property.compiler(valuePortion ,custom);
                // console.log(value,valuePortion,property)
               
                
                if(value && value !== '-'){
                    const val=value.replace(/([-]?)([\d]|10|11|12)col/g,(m:string,p1:string,p2:string)=>`${p1}${parseFloat(((100/12)*parseFloat(p2)).toFixed(6))}%`);
                    return bool?[prop,val]:prop+":"+val;
                }else{
                    console.log(`${className}: '${propertyKey}' unable to compile value:${className.replace(propertyKey,'')} returning value as it is`)
                    return bool?[prop,valuePortion.replace(/^-/,'')+`  /* ***Warning:Might not be Valid value *** */`]:prop+":"+valuePortion.replace(/^-/,'')+`  /* ***Warning:Might not be Valid value *** */`;
                }
            }else{
                console.log("No Compiler found for:" + className+" invalidating static className definition, add compiler function to get as it is value.");
                // Saving Static Value 
                // return bool?[prop,valuePortion.replace(/^-/,'')+`  /* ***Warning:Might not be Valid value *** */`]:prop+":"+valuePortion.replace(/^-/,'')+`  /* ***Warning:Might not be Valid value *** */`;
            }
        }else{
            console.log(`${className}: is not valid AliasCSS class name, property definition not found`);
        }
    
    return bool?[null,null]:null;
}


 