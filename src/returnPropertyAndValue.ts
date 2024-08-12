
type Property = {
    alias:string,
    type:string,
    property?:string
    values:[],
    groups?:{[key:string]:string}
    compiler:(...args: any[]) => any,
    [key:string]:any

}




export  default function getPropertyAndValue(
    className:string,
     cssPropertiesWithAlias:{},
      staticClassNames:{[key:string]:string},
      custom:{[key:string]:{[key:string]:string}},
      extractProperty:any, // (a:string,b:{[key:string]:Property})=>[Property,string],
      bool:boolean=false
      ): string[]|null|{} {

    // Case 1 StaticClassNames
    if(staticClassNames.hasOwnProperty(className)){
        return staticClassNames[className];
    }
     
    const [property, propertyKey]=extractProperty(className,cssPropertiesWithAlias);
    // console.log(propertyKey,'ttt',property)
    if(property){
        
        // check for type='group'
        if(property.hasOwnProperty('type') && property.type==="group"){
            const valuePortion=className.replace(propertyKey,'');
            if(property.hasOwnProperty('groups') && property.groups.hasOwnProperty(valuePortion.replace(/^-/,''))){
                return property.groups[valuePortion.replace(/^-/,'')];
            }
            return property.compiler(valuePortion)|| '';
        }

        // --End of Group type
        const prop=property.property?property.property:propertyKey;

            // Case 2: CSS Variables
            if (/--var--/.test(className)) {
                const splits: string[] = className.split(/--var--/);
                if(cssPropertiesWithAlias.hasOwnProperty(splits[0])){
                    return  bool?[prop,"var(--"+splits[1] + ')']: prop+": var(--"+splits[1] + ')';
                }
            } 
            // case 3: CSS variable without --var keyword
            const valuePortion=className.replace(propertyKey,'');
            if(/^--[a-z]/.test(valuePortion)){
                return  bool?[prop,"var("+valuePortion + ')']:prop+": var("+valuePortion + ')';
            }
            if(property.hasOwnProperty('compiler') && typeof property.compiler === 'function'){
             
                // const value=property.compiler(valuePortion.replace(/^-/,'') ,custom);
                const value=property.compiler(valuePortion ,custom);
                
                if(value && value !== '-'){
                    const val=value.replace(/([-]?)([\d]|10|11|12)col/g,(m:string,p1:string,p2:string)=>`${p1}${parseFloat(((100/12)*parseFloat(p2)).toFixed(6))}%`);
                    return bool?[prop,val]:prop+":"+val;
                }else{
                    console.log(`${className}: '${propertyKey}' unable to compile value:${className.replace(propertyKey,'')}`)
                    return bool?[null,null]:null;
                }
            }else{
                console.log("No Compiler found for:" + className);
            }
        }else{
            console.log(`${className}: is not valid AliasCSS class name`);
        }
    
    return bool?[null,null]:null;
}


 