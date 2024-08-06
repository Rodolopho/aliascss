export default function extractMediaPrefix(className:string, prefix:{[key:string]:string}, match:RegExp, bool:boolean=false):[string, string]{

    if(className.match(match)){
        const prefixMedia=className.match(match)?.[0];
        if(prefixMedia){
            if(prefix.hasOwnProperty(prefixMedia)){
                return [prefix[prefixMedia], className.replace(prefixMedia,'')]
            }
        }
    }
    return ['',className]
}
