// custom.color will be provided {primary:'#2d3f3e....}
export default function color(color: string, custom: { [key: string]: { [key: string]: string } }): string | undefined {
  
  // ----check for css variables
  if(color.match(/^--[a-zA-Z]/)) return `var(${color})`

  // remove - before the color
    color = color.replace(/^[-]/, '');

  // custom-color  
  if (custom.hasOwnProperty('colors') && typeof custom.colors === 'object') {
    if (custom.colors.hasOwnProperty(color)) return custom.colors[color];

    // custom-color try replacing - 

    if (custom.colors.hasOwnProperty(color.replace(/-/g,''))) return custom.colors[color.replace(/-/g,'')];
  }
 
  // hexadecimal =+ alpha 00-ff
  if (/^[0-9a-fA-F]{3,8}$/.test(color)) {
    return `#${color}`;
    // Name
  } else if (/^[a-zA-Z]+$/.test(color)) {
    return color;
    // rgb/a in number
  } else if (/^[0-9]{9}/.test(color)) {
    if (color.length === 9) return `rgb(${color.replace(/([\d]{3})([\d]{3})([\d]{3})/, '$1,$2,$3')})`;
    else
      return `rgba(${color
        .replace(/([\d]{3})([\d]{3})([\d]{3})([\d]+)/, '$1,$2,$3,$4')
        .replace('d', '.')
        .replace('p', '%')})`;
    
  } else if (/^([\d]{3})([\d]{1,3}p)([\d]{1,3}p)/.test(color)) {
    if (/^([\d]{3})([\d]{1,3}p)([\d]{1,3}p)$/.test(color))
      return 'hsl(' + color.replace(/^([\d]{1,3})([\d]{1,3}p)([\d]{1,3}p)/, '$1,$2,$3').replace(/p/g, '%') + ')';
    else
      return (
        'hsla(' +
        color
          .replace(/^([\d]{1,3})([\d]{1,3}p)([\d]{1,3}p)([\d]+)/, '$1,$2,$3,$4')
          .replace('d', '.')
          .replace(/p/g, '%') +
        ')'
      );
  } else if (/^([\d]{1,3}p)([\d]{1,3}p)([\d]{1,3}p)/.test(color)) {
    if (/^([\d]{1,3}p)([\d]{1,3}p)([\d]{1,3}p$)/.test(color))
      return 'rgb(' + color.replace(/^([\d]{1,3}p)([\d]{1,3}p)([\d]{1,3}p)/, '$1,$2,$3').replace(/p/g, '%') + ')';
    else
      return (
        'rgba(' +
        color
          .replace(/^([\d]{1,3}p)([\d]{1,3}p)([\d]{1,3}p)([\d]+)/, '$1,$2,$3,$4')
          .replace('d', '.')
          .replace(/p/g, '%') +
        ')'
      );

    
  }else if(/^(rgb|hsl|hsla|rgba|hwb|hwba|lab|oklab|lch|oklch)-/.test(color)){
    const match=color.match(/^(rgb|hsl|hsla|rgba|hwb|hwba|lab|oklab|lch|oklch)-/);
    const colorFunc=match?match[1]:'';
    if(color.replace(colorFunc,'').match(/^--/)) return `${colorFunc}(var(${color.replace(colorFunc,'')}))`
    return replaceLast(`${colorFunc}(${color.replace(colorFunc,'').replace(/^-/,'').replace(/-/g,' ').replace(/([0-9])d([0-9])/g, '$1.$2')
          .replace(/p/g, '%')})`, 3," "," / ");


  }else if(/^p3-/.test(color)){
    if(color.replace(/p3/,'').match(/^--/)) return `color(display-p3 (var(${color.replace(/p3/,'')}))`
    return replaceLast(`color(display-p3 ${color.replace(/p3/,'').replace(/^-/,'').replace(/-/g,' ').replace('d', '.')
          .replace(/([0-9])p/g, '$1%')})`, 4," "," / ");
  } else {
    return;
  }
}

function replaceLast(str:string, occurs:number, target:string, replacement:string) {
  if(str.match(new RegExp(target,'g'))?.length===occurs){
    const lastIndex = str.lastIndexOf(target);
  if (lastIndex === -1) return str;
  return str.slice(0, lastIndex) + replacement + str.slice(lastIndex + target.length);
  }else{
    return str;
  }
}