import { compiler } from "./returnStatement.js"
import cssProps from "./css-properties-all.js";
import styleToAliascss from "./utils/stylesToAliascss.js";
// import { customStaticClassNames } from "./static/customStaticClassNames.js";
export const getCompiler=(property:string)=>cssProps.hasOwnProperty(property)?cssProps[property]:null;

export const main=compiler;

export const styleJSX=(str:string,bool?:boolean)=>compiler.groupForJs(str,bool);
// export const style=()=>{};
export const staticClassNames=compiler.staticClassNames;
export const extend=(object:{})=>compiler.extend(object);
export const convert=styleToAliascss;
