
// splitByCommaOutsideParens("(someValue,(nested,value),someValue)");

// Output: ["someValue", "(nested,value)", "someValue"]

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

  // -----------------------------
  

  // "--primary-color"=> "var(--primary-color)"
  // "--primary-color:ff0000"=>"var(--primary-color, #ff0000)" 
  // "--gap:calc(1rem+var(--spacing))"=>"var(--gap, calc(1rem + var(--spacing)))"
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

  // ----------------------

// console.log(stringToArray("(apple, banana , cherry)"));
// Output: ["apple", "banana", "cherry"]
  export function stringToArray(str:string) {
  return str
    .trim()
    .slice(1, -1)  // Remove outer parentheses
    .split(',')
    .map(item => item.trim());  // Split by comma and trim whitespace
}

// ---------------------------

// console.log(objectToCSS({'margin': '10px', 'padding': '5px'}));
// Output: "{margin:10px; padding:5px}"
export function objectToCSS(obj:{[key:string]:string}, prefix:string='') {
  return prefix+'{' + 
    Object.entries(obj)
      .map(([key, value]) => 
        `${key}:${value}`
      )
      .join('; ') + 
    '}';
}

// ----------------------------

// console.log(stylesToCSS({'padding': '20px', 'background': 'blue'}, 'body'));
// Output: "body{padding:20px} body{background:blue}"
export function stylesToCSS(stylesObj:{[key:string]:string}, selector:string) {
  const cssRules = Object.entries(stylesObj)
    .map(([property, value]) => 
      `${selector}{${property}:${value}}`
    )
    .join(' ');
  
  return cssRules;
}