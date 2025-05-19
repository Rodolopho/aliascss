

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
  