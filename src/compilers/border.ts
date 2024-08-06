import color from './color.js';
export default function border(data: string, custom: { [key: string]: { [key: string]: string } }) {

    // let result='';

    const styleRegex=/-(none|n|hidden|h|dotted|dt|dashed|ds|solid|s|double|db|groove|g|ridge|r|inset|i|outset|o)(?:[^\w]|$)/;
    const widthRegex=/[-]?([0-9]+[d/.]?[0-9]*(px|em|fr|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|p))/;
    let [s,l,c]:[string,string,string|undefined]=['','',''];
    
    
   
    // Style
    if(styleRegex.test(data)){
        const m=data.match(styleRegex);
        s=m?style[m[1]]:'';
        data=m?data.replace(m[0],''):data;
    }

    // width
    if(/-(thick|medium|thin)/.test(data)){
        const m=data.match(/-(thick|medium|thin)/);
        l=m?m[1]:'';
         data=m?data.replace(m[0],''):data;

    }else if(widthRegex.test(data)){
        const m=data.match(widthRegex);
        l=m?m[1].replace(/p[\s]?$/,'%').replace(/(\d)d(\d)/,'$1.$2'):'';
        data=m?data.replace(m[0],''):data;
    }

    if(data){
        c=color(data,custom);
    }

    return `${l?l:''} ${s?s:''} ${c?c:''}`.trim();


}
const style: { [key: string]: string } = {
  n: 'none',
  none: 'none',
  s: 'solid',
  solid: 'solid',
  r: 'ridge',
  ridge: 'ridge',
  o: 'outset',
  outset: 'outset',
  i: 'inset',
  inset: 'inset',
  h: 'hidden',
  hidden: 'hidden',
  g: 'groove',
  groove: 'groove',
  db: 'double',
  double: 'double',
  dotted: 'dotted',
  dt: 'dotted',
  ds: 'dashed',
  dashed: 'dashed',
};
