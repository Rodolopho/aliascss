import prefix,{createRegexForPseudo} from './PseudoPrefixNew.js';
import extractPrefix from './extractPrefix.js';

export default function PseudoEleStateNew(data:string):string[]|null{
    // const match=createRegexForPseudo({...prefix,'--KKK':','});
    const match=createRegexForPseudo(prefix);
    if(!match.test(data)) return null;

    const matchAndFunc=[
        {
            match:/^-([-]?(not|has|is|where|n|hs|w))\((.+)\)/,
            func(value:string){
                const matched=value.match(this.match);
                const newData=matched?.[3];
                if(newData){
                    const[result,className]= extractPrefix(newData+'-display-none');
                    
                    return [value.replace(matched[0],''),`${prefix['-'+matched[1]]}(${result})`];
                }
                    return [value.replace(matched?.[0]?matched[0]:'',''),'']
                
            }
        },
        {
            match:/^-([-]?n(th(-child|-last-child|-last-of-type|-of-type)|c|lc|lot|ot))\((.+)\)/,
            func(value:string){
                const matched=value.match(this.match);
                return[value.replace(matched?.[0]?matched[0]:'',''),`${prefix['-'+matched?.[1]]}(${matched?.[4]})`]
            }
        },
    ];

    // accept (acss-selector)
    if(data.match(matchAndFunc[0].match)){
       
        return matchAndFunc[0].func(data);
    }

    if(data.match(matchAndFunc[1].match)){
       
        return matchAndFunc[1].func(data);
    }
 
    // case 1. nth
    if(/(^--nth(-child-|-last-child-|-last-of-type|-of-type-))([0-9]+[n]?)(?=[-|_])/.test(data)){
      const mch=data.match(/^(--nth(-child-|-last-child-|-last-of-type|-of-type-))([0-9]+[n]?)(?=[-|_])/);
      const cn=mch?.[0]?data.replace(mch[0],''):'';
      const alias=mch?.[1]?prefix[mch[1].replace(/-$/,'')]:'';
      const cont=mch?.[3];
      return [cn,`${alias}(${cont})`]
        // return pseudoHandlerNthChild(data,/(^--nth(-child-|-last-child-|-last-of-type|-of-type-))([0-9]+[n]?)(?=[-|_])/)
    }else if(/^(--(nc|nlc|nlot|nthot)-)([a-z0-9]+)(?=[-|_])/.test(data)){
        const mch=data.match(/^(--(n|nc|nlc|nlot|not)-)([a-z0-9]+)(?=[-|_])/);
        const cn=mch?.[0]?data.replace(mch[0],''):'';
        const alias=mch?.[1]?prefix[mch[1].replace(/-$/,'')]:'';
        const cont=mch?.[3];
        // console.log(data,cn,alias,mch)
        return [cn,`${alias}(${cont})`]
    }else if(/(^-(-not|-has|-is|-where|-n|-hs|-w|-is)[-_])/.test(data)){
        
        const mch=data.match(/(^-(-not|-has|-is|-where|-n|-hs|-w|-is)([_-]+[a-zA-Z0-9\.,]+)(?=[-|_]))/);
       
        const cn=mch?.[1]?data.replace(mch[1],''):'';
        const alias=mch?.[2]?prefix['-'+mch[2].replace(/-$/,'')]:'';
        const cont:string|undefined=PseudoEleStateNew(mch?.[3]+'-dn')?.[1];
        const[result,className]= extractPrefix(mch?.[3]+'-display-none');
        // console.log('PseudoMatch',result,cont)
        return [cn,`${alias}(${result})`]
    }else if(/(^--lang-([a-z]+)(?=[-|_]))/.test(data)){
        const mch=data.match(/(^--lang-([a-z0-9]+)(?=[-|_]))/);
        const cn=mch?.[1]?data.replace(mch[1],''):'';
        // const alias=mch?.[1]?prefix[mch[1].replace(/-$/,'')]:'';
        const cont=mch?.[2];
        return [cn,`:lang(${cont})`]
    }
    else{
        const alias = data.match(match);
        if (alias) {
            if (prefix.hasOwnProperty(alias[0])) {
               
            return [data.replace(alias[0], ''), prefix[alias[0]]];
            }
        }

        // return [data, ''];
        return null;
    }
}

  