
type EProperty = {
    alias?:string,
    type?:string,
    property?:string
    values?:string[],
    groups?:{[key:string]:string}
    compiler:(...args: any[]) => any,

}
type Property = {
    alias?:string,
    property?: string,
    type?:string,
    values?:string[],
    groups?:{[key:string]:string}
    // compiler?:(a:string, b:{ [key: string]: { [key: string]: string}})=>any,
    compiler?:(...args: any[]) => any,

}
type xProperty = {
    alias?:string,
    property?: string,
    test?:RegExp,
    type?:string,
    values?:string[],
    compiler?:(a:string, b:{ [key: string]: { [key: string]: string}})=>any,

}



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
        const value=className.slice(className.indexOf(':')).replace(':','');
        const property=className.replace(value,'').replace(':','');
        if(/^--[a-zA-Z]/.test(value)){
                return  bool?[property,"var("+value + ')']:property+": var("+value+ ')';
        }else{
            // check for string and color
            if(/color$/.test(property)){
                console.log(cssPropertiesWithAlias.color)
                const v=cssPropertiesWithAlias.color.compiler?cssPropertiesWithAlias.color.compiler(value,custom):value;
                 return  bool?[property,v]:property+":"+ v;
            }else if(/text$/.test(property)){
                const v='"'+value.replace(/([_]?)[_]/g,'$1 ').replace(/_[\s]/g,'_')+'"';
                 return  bool?[property,v]:property+":"+ v;
            }
            return bool?[property,value.replace(/[-]([-]?[\w])/g,' $1').replace(/([\d])d([\d])/g,'$1.$2').replace(/([\d])p[\s]/g,"$1% ").replace(/([\d])p$/,"$1%").replace(/[\s]by[\s]/g,' / ').replace(/auto flow/g,'auto-flow')]
            :
            property+":"+value.replace(/[-]([-]?[\w])/g,' $1').replace(/([\d])d([\d])/g,'$1.$2').replace(/([\d])p[\s]/g,"$1% ").replace(/([\d])p$/,"$1%").replace(/[\s]by[\s]/g,' / ').replace(/auto flow/g,'auto-flow'); 
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
                    return  bool?[prop,"var(--"+splits[1] + ')']: prop+": var(--"+splits[1] + ')';
                }
            } 
            // case 3: CSS variable without --var keyword
            const valuePortion=className.replace(propertyKey,'');
           
            if(/^--[a-zA-Z]/.test(valuePortion)){
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


 