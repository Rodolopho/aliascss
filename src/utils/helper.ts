

export function splitByCommaOutsideParens(str:string) {
    const result = [];
    let current = '';
    let depth = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (char === '(') {
        depth++;
        current += char;
      } else if (char === ')') {
        depth = Math.max(0, depth - 1);
        current += char;
      } else if (char === ',' && depth === 0) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
  
    if (current.length > 0) {
      result.push(current.trim());
    }
  
    return result;
  }
  
  export function cssVarWithDefault(valuePortion:string,compiler?:(a:string, b:{ [key: string]: { [key: string]: string}})=>any,custom={}){
      if(/^--[a-zA-Z]/.test(valuePortion)){
                if(valuePortion.includes(':')){
                    const value=valuePortion.slice(valuePortion.indexOf(':')).replace(':','');
                    const cssVar=valuePortion.replace(value,'').replace(':','');
                    if(/^calc\(/.test(value)){
                        return "var("+cssVar + ','+ value.replace(/([-+/*])([\d]|var\(|calc\()/g,' $1 $2')+ ')';
                    }
                    if(compiler){
                        const val=compiler(value, custom); 
                        return `var(${cssVar}, ${val?val:value})`
                     }else{
                      return `var(${cssVar}, ${value.replace(/([\d])p$/g,'$1%')})`
                     }
                } 
                return  `var(${valuePortion})`
            }
  }