

type Property = {
    alias?:string,
    property?: string,
    type?:string,
    values?:string[],
    compiler?:(a:string, b:{ [key: string]: { [key: string]: string}})=>any,

}
export default (key:string,compiler:Property)=>{
    const dynamicCompilerObj:{[key:string]:Property}={};
    let staticCompilerObj:{[key:string]:string}={};

    const property:string=compiler.property||key;
    const alias:string|boolean=compiler.alias||false;

    // Generate Static ClassNames 
    
    if(compiler.values?.length){
        staticCompilerObj={...staticValueCompiler(property,alias,compiler.values),...staticCompilerObj}
    }
    // Make Dynamic Class Compiler
    if(compiler.compiler && typeof compiler.compiler === 'function'){
        if(property) dynamicCompilerObj[key]={property,compiler:compiler.compiler};
        if(alias) dynamicCompilerObj[alias]={property,compiler:compiler.compiler};
    }
    return [dynamicCompilerObj,staticCompilerObj]
}

export function staticValueCompiler(property:string,alias:string|boolean=false,values:string[]){
    const result:{[key:string]:string}={};
    if(values.length){
        values.forEach((value)=>{
            const val=value.split(':')[0];
            value.split(':').forEach((each)=>{
                result[`${property}-${each}`]=`${property}:${val}`;
                if(alias)result[`${alias}-${each}`]=`${property}:${val}`;
            })
        })
    }
    return result;
}

export function extractProperty(className:string, data:{[key:string]:Property}){
            // we just need parts before '--' or __ as they can't be in property  is any;
            const splittedClassName=className.split('--')[0];
            const extractPossiblePropertyPortion = splittedClassName.match(/^[a-z-]+/);

            //  Not a valid Aliascss class name
            if (!extractPossiblePropertyPortion) return[ null, null];

            let propertyPortion = extractPossiblePropertyPortion[0]
            .replace(/-$/, '') //  remove last "-"
            .trim();

            let propertyHolder: {}| null = null;

            //  try to match whole portion with property alias
            //   From higher to lower i.e border-right-color.......border-right.....border
            if (data.hasOwnProperty(propertyPortion)) {
                propertyHolder = data[propertyPortion];
            //   console.log(className,0);
            } else {
            //  remove  last -[a-z]+ and try again un till ^[a-z]+ means we are at begin ing
                while (/[-][a-z]+$/.test(propertyPortion)) {
                    propertyPortion = propertyPortion.replace(/[-][a-z]+$/, '');
                    if (data.hasOwnProperty(propertyPortion)) {
                         propertyHolder = data[propertyPortion];
                    break;
                    }
                }
            }
            return [propertyHolder,propertyPortion];
        };



      export  function generateStaticClassNames(data:{[key:string]:Property},global:string[]=[]){
            let staticClassNames:{[key:string]:string}={};
            Object.keys(data).map((key)=>{
                const [property, alias,values]=[(data[key].property||key),(data[key].property?key:(data[key].alias||false)),[...(data[key].values||[]),...global]
                                                ]
                staticClassNames={...staticValueCompiler(property,alias,values),...staticClassNames}
            
                
            })

            return staticClassNames;
        };
        // takes compiler as arguments and return compiler obj with alias and staticClassNames with Alias
   export function createCompilerObj(obj:{[key:string]:Property},globalValue:string[]=[]):[{[key:string]:string},{[key:string]:Property}]{           
                const [staticClassNames,compilerObj]:[{[key:string]:string},{[key:string]:Property}]=[{},{}]
                Object.keys(obj).map((key)=>{
                    // createStaticClassNames  from Obj
                    const [property, alias,values]=[(obj[key].property||key),(obj[key].property?key:(obj[key].alias||false)),[...(obj[key].values||[]),...globalValue]
                        ]
                        for(const [key, value] of Object.entries(staticValueCompiler(property,alias,values))){
                            staticClassNames[key]=value;
                        }
                    //  staticClassNames={...staticValueCompiler(property,alias,values),...staticClassNames}
    
                    // Dynamic compiler generator for css-Props and Alias
                    compilerObj[key]=obj[key];
                    if(obj[key].alias?.trim()) {
                        const alias=obj[key].alias?.trim()||null;
                        if(alias){
                            compilerObj[alias]=obj[key];
                            compilerObj[alias].property=key;
                        }  
                    }     
                })          

                return [staticClassNames,compilerObj];
    }    

    