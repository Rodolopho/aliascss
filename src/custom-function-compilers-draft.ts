

type Property = {
    alias?:string,
    property?: string,
    test?:RegExp,
    type?:string,
    values?:string[],
    groups?:{[key:string]:string},
    statement?:string,
    compiler?:(a:string, b:{ [key: string]: { [key: string]: string}})=>any,

}



const cssCustomCompilers:{
    [key:string]:Property
}={
   
    abs:{
        type:'group',
        compiler:()=>{
            return '';
        }
    }

}

export default cssCustomCompilers;


