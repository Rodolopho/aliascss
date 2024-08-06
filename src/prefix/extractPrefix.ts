// import pseudoSelector from './selector.js'
import pseudoSelector from './pseudoSelectorNew.js'
import elementSelector from './element-selector.js'
import attribute from './attribute-selector.js';

    export default function extractPrefix(className:string){
        let workingClassName=className;
        let result='';
        let match=false;
        do {
            const matched=pseudoSelector(workingClassName);
            if(matched){
                workingClassName=matched[0];
                if(result.match(/:(not|where|has|is)[)]?$/)){
                    const m=result.match(/:(not|where|has|is)([)])?$/);
                    if(m?.[2]){
                       result=result.replace(/\)$/,'')+ `(${matched[1]}))`;
                    }else{
                        result +=`(${matched[1]})`
                    }
                    
                }else{
                    result +=matched[1]
                }
                
                match=true;

            }else if(elementSelector.test.test(workingClassName)){
                const [replacedClassName, selector]=elementSelector.process(workingClassName);
                if(result.match(/:(not|where|has|is)[)]?$/)){
                    const m=result.match(/:(not|where|has|is)([)])?$/);
                    if(m?.[2]){
                       result=result.replace(/\)$/,'')+ `(${selector}))`;
                    }else{
                        result +=`(${selector})`
                    }
                    
                }else{
                    result +=selector
                }
                workingClassName=replacedClassName;
                match=true;
            }else if(attribute.test.test(workingClassName)){
                const [replacedClassName, selector]=attribute.process(workingClassName);
                if(result.match(/:(not|where|has|is)[)]?$/)){
                    const m=result.match(/:(not|where|has|is)([)])?$/);
                    if(m?.[2]){
                       result=result.replace(/\)$/,'')+ `(${selector}))`;
                    }else{
                        result +=`(${selector})`
                    }
                }else{
                    result +=selector
                }
                workingClassName=replacedClassName;
                match=true;
            }else{
                match=false;
            }
            
        } while (match);

        return [result, workingClassName]

       
}
