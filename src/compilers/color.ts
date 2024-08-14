// custom.color will be provided {primary:'#2d3f3e....}
export default function color(color: string, custom: { [key: string]: { [key: string]: string } }): string | undefined {
  
  if(color.match(/^--[a-zA-Z]/)) return `var(${color})`
    color = color.replace(/^[-]/, '');
  if (custom.hasOwnProperty('colors') && typeof custom.colors === 'object') {
    if (custom.colors.hasOwnProperty(color)) return custom.colors[color];
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

    
  }else if(/^(rgb|hsl|hsla|rgba)-/.test(color)){
    const match=color.match(/^(rgb|hsl|hsla|rgba)-/);
    const colorFunc=match?match[1]:'';
    if(color.replace(colorFunc,'').match(/^--/)) return `${colorFunc}(var(${color.replace(colorFunc,'')}))`
    return `${colorFunc}(${color.replace(colorFunc,'').replace(/^-/,'').replace(/-/g,',').replace('d', '.')
          .replace(/p/g, '%')})`


  } else {
    return;
  }
}
