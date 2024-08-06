import prefix,{createRegexForPseudo} from './PseudoPrefix.js';

export default function PseudoEleState(data:string){
    const match=createRegexForPseudo(prefix);
    if(!match.test(data)) return null;

 
    // case 1. nth
    if(/(^--nth(-child-|-last-child-|-last-of-type|-of-type-))([0-9]+[n]?)(?=[-|_])/.test(data)){
      const mch=data.match(/^(--nth(-child-|-last-child-|-last-of-type|-of-type-))([0-9]+[n]?)(?=[-|_])/);
      const cn=mch?.[0]?data.replace(mch[0],''):'';
      const alias=mch?.[1]?prefix[mch[1].replace(/-$/,'')]:'';
      const cont=mch?.[3];
      return [cn,`${alias}(${cont})`]
        // return pseudoHandlerNthChild(data,/(^--nth(-child-|-last-child-|-last-of-type|-of-type-))([0-9]+[n]?)(?=[-|_])/)
    }else if(/^(-(nc|nlc|nlot|not)-)([a-z0-9]+)(?=[-|_])/.test(data)){
        const mch=data.match(/^(-(n|nc|nlc|nlot|not)-)([a-z0-9]+)(?=[-|_])/);
        const cn=mch?.[0]?data.replace(mch[0],''):'';
        const alias=mch?.[1]?prefix[mch[1].replace(/-$/,'')]:'';
        const cont=mch?.[3];
        return [cn,`${alias}(${cont})`]
    }else if(/(^-(-not-|-has-|-is-|-where-|n-|hs-|w-|is-)([a-z0-9\.]+)(?=[-|_]))/.test(data)){
        console.log("matched")
        const mch=data.match(/(^-(-not-|-has-|-is-|-where-|n-|hs-|w-|is-)([a-z0-9\.]+)(?=[-|_]))/);
        console.log(mch)
        const cn=mch?.[1]?data.replace(mch[1],''):'';
        const alias=mch?.[2]?prefix['-'+mch[2].replace(/-$/,'')]:'';
        const cont=mch?.[3];
        return [cn,`${alias}(${cont})`]
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

  