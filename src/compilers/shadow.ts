
import color from './color.js';

export default function shadow(data: string, custom: { [key: string]: { [key: string]: string } }) {
    let compileValue='';
data.split(/__/).forEach((e)=>{
    let eachValue=' ';
    let len='';
    const col='';
    if (e.match(/^[-]?(i|inset)/)) {
        eachValue += 'inset ';
        e=e.replace(/^[-]?(inset|i)/,'');
      }
      // fix Zero
      e=e.replace(/(?<=-)0(?=-)/g,'0px').replace(/([-][0-9pd]{6,})/,(a)=>a.replace(/p/g,'xer'));
      const match=e.match(/([-]?[-]?[0-9]{1,3}[d/.]?[0-9]*(px|em|p|fr|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))+/);
      if(match){
        len=match[0];
        e=e.replace(len,'')   
      }
      if(len){
        // eachValue+=len.replace(/-0px-/g,'-0-').replace(/[-]([-]?[\d])/g,' $1').trim()+" ";
        eachValue+=len.replace(/[-]([-]?[\d])/g,' $1').trim()+" ";
        const col=color(e.replace(/xer/g,'p'),custom);
        if(col) {
           eachValue+=col+" ";
        }
      }
      compileValue+=eachValue + ",";
    
      // search for length /()/
})
return compileValue.replace(/[,]$/,'').replace(/%x/g,'%').trim();
}

const ref =`/* Keyword values */
box-shadow: none;

/* A color and two length values */
/* <color> | <length> | <length> */
box-shadow: red 60px -16px;

/* Three length values and a color */
/* <length> | <length> | <length> | <color> */
box-shadow: 10px 5px 5px black;

/* Four length values and a color */
/* <length> | <length> | <length> | <length> | <color> */
box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

/* inset, length values, and a color */
/* <inset> | <length> | <length> | <color> */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow:
  3px 3px red inset,
  -1em 0 0.4em olive;
  `
