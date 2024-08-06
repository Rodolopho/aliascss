import { compiler } from "./returnStatement.js"
// import { customStaticClassNames } from "./static/customStaticClassNames.js";

export const main=compiler;

export const styleJSX=(str:string,bool?:boolean)=>compiler.groupForJs(str,bool);
// export const style=()=>{};
export const staticClassNames=compiler.staticClassNames;
export const extend=(object:{})=>compiler.extend(object);
