export default function clipPath(data: string, custom: { [key: string]: { [key: string]: string } }) {
  const valuePortion: string = data.replace(/^-/, '') || '';
//   const match = /^(path|pa|circle|c|inset|i|polygon|p|ellipse|e|xywh|rect|r)[-]?[\d]/;
  const match = /^(path|pa|circle|c|inset|i|polygon|p|ellipse|e|xywh|rect|r)[-]?([\d]|-)/;
  let shape = null;
  let content = '';
  const shapes: { [key: string]: string } = {
    circle: 'circle',
    c: 'circle',
    inset: 'inset',
    i: 'inset',
    ellipse: 'ellipse',
    e: 'ellipse',
    polygon: 'polygon',
    p: 'polygon',
    rect:'rect',
    r:'rect',
    xywh:'xywh',
    url: 'url',
    u: 'url',
    path:'path',
    pa:'path'
  };

  if (valuePortion.match(/^(url|u)/)) {
    shape = 'url';
    if(valuePortion.replace(/url|u/, '').match(/^--[a-zA-Z]/)){
        content=`var(${valuePortion.replace(/url|u/, '')})`
    }else{
        content = '#' + valuePortion.replace(/url|u/, '').replace(/^-/, '');
    }
        
  } else if (valuePortion.match(match)) {
    const extractShape: RegExpMatchArray | null = valuePortion.match(match);
    if (extractShape) {
      shape = shapes[extractShape[1]];
      if(valuePortion.replace(extractShape[1], '').match(/^--[a-zA-z]/)){
        content=`var(${valuePortion.replace(extractShape[1], '')})`
      }else{
        content = valuePortion
        .replace(extractShape[1], '').replace(/-0-/g,'-0px-')
        .replace(/(px|em|p|ex|ch|rem|vw|fr|vh|vmin|vmax|cm|mm|in|pt|pc|cv)/g, '$1 ')
        .replace(/p[\s]|p(,)/g, '%$1 ')
        .replace(/_/g, ', ')
        .replace('-at', ' at ').replace(/(\d)d(\d)/g,'$1.$2')
        .replace('-round', ' round ').replace(/-([0-9][d/.]?[0-9]*)/g,'$1').replace(/[\s][0]px[\s]/g,' 0 ')
        .replace(/^0px[\s]/,'0 ');
      }
      
      // content=length(valuePortion.replace(extractShape,''));
    }
  } else {
    return false;
  }
  return shape + '(' + content + ')';
}
