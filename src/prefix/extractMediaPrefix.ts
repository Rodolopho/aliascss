export default function extractMediaPrefix(className:string, prefix:{[key:string]:string}, match:RegExp, bool:boolean=false):[string[], string]{

    const medias:string[]=[];
    let cls=className;
    const matchNestedMedia=/@\[(.*?)]/;
    // case 1. single media 
    if(className.match(match)){
        const prefixMedia=className.match(match)?.[0];
        if(prefixMedia){
            if(prefix.hasOwnProperty(prefixMedia)){
                medias.push(prefix[prefixMedia]);
                cls=className.replace(prefixMedia,'');
                // return [[], ]
            }
        }
    }else if(className.match(matchNestedMedia)){ // Nested Media Selector 
        className.match(matchNestedMedia)?.[1]?.split(',').map((e)=>{
            const suffixedMatch=e+"-";
            if(suffixedMatch.match(match) || ("@"+suffixedMatch).match(match) ){
                const prefixMedia=suffixedMatch.match(match)?.[0] || ('@'+suffixedMatch).match(match)?.[0]
                if(prefixMedia){
                    if(prefix.hasOwnProperty(prefixMedia)){
                        medias.push(prefix[prefixMedia]);
                        // return [[], ]
                    }
                }
            }

        })
       if(medias.length){
        cls=className.replace(matchNestedMedia,'');
       }

    }

    
    return [medias,cls]
}
