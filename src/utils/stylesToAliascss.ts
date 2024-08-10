import cssProps from "../css-properties-all.js";

export default function styleToAliascss(data:string,options?:{'JSX':true}){
    const JSX=options?.JSX?true:false;

    const matchJSXStyle=/(?<=[\s])style=[\{][\{]([^}]*)[\}][\}]/;
    const matchSingleQuotes=/(?<=[\s])style=[']([^']*)[']/;
    const matchDoubleQuotes=/(?<=[\s])style=["]([^']*)["]/;
    if(JSX){
     return data.replace(new RegExp(matchJSXStyle,'g'),(m,s)=>processJSX(m,s));
    }
    return data.replace(new RegExp(matchSingleQuotes,'g'),(m,s)=>process(m,s,true))
    .replace(new RegExp(matchDoubleQuotes,'g'),(m,s)=>process(m,s,false));

}

export function process(match:string,styleValue:string,isSingleQuote:boolean,JSX?:boolean){
    let contentForStyle='';
    let contentForClass=''
    styleValue.split(';').forEach((each)=>{
        const split=each.split(':');
        if(split && split.length===2){
             const[property,value]=split;
             if(cssProps.hasOwnProperty(property.trim())){
                contentForClass+=`${property.trim()}-${value.trim().replace(/#/g,'').replace(/\s/g,'-').replace(/,/g,"__")} `
                return;
             }

        }
        contentForStyle+=each+"; ";
    })

    if(isSingleQuote){
        return `class="${contentForClass}" style='${contentForStyle}'`
    }
    return `class="${contentForClass}" style="${contentForStyle}"`

}
export function processJSX(match:string,styleValue:string){
    let contentForStyle='';
    let contentForClass=''
    styleValue.replace(/[,]([\s]*[a-zA-z]+\:)/g,"###$1").split("###").forEach((each)=>{
        const split=each.split(':');
        if(split && split.length===2){
             const[property,value]=split;
              const formatProperty=property.replace(/([a-z])([A-Z])/g,(m,a,b)=>a+'-'+b.toLowerCase());
             if(cssProps.hasOwnProperty(formatProperty.trim())){
                contentForClass+=`${formatProperty.trim()}-${value.trim().replace(/['"]/g,'').replace(/#/g,'').replace(/\s/g,'-').replace(/,/g,"__")} `
                return;
             }

        }
        contentForStyle+=each+", ";
    })

   
    return `className="${contentForClass}" style={{${contentForStyle}}}`

}

// export function processJSXOld(match:string,styleValue:string){
  
//     const formatStyleValue=styleValue.replace(/[,]([\s]*[a-zA-z]+\:)/g,"###").split("###");
//     let styleOjb:{[key:string]:string}={};
//     eval(`styleOjb=${styleValue}`);
//     console.log(styleOjb);

//     const contentForStyle:{[key:string]:string}={};
//     let contentForClass=''
//     Object.keys(styleOjb).forEach((key:string)=>{
//         const property=key.replace(/([a-z])([A-Z])/g,(m,a,b)=>a+'-'+b.toLowerCase());
//         if(cssProps.hasOwnProperty(property)){
//            contentForClass+=`${property.trim()}-${(styleOjb[key]+" ").trim().replace(/#/g,'').replace(/\s/g,'-').replace(/,/g,"__")} ` 
//            return
//         }

//         contentForStyle[key]=styleOjb[key];

//     });

//     return `className="${contentForClass}" style={${JSON.stringify(contentForStyle)}}`

// }
