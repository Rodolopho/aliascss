import length from "./length.js";
export default function clipPath(data, custom){
  let valuePortion=data.replace(/^-/,'');
  let match=/^(circle|c|inset|i|polygon|p|ellipse|e)[-]?[\d]/;
  let shape=null;
  let content="";
  let shapes={
    circle:'circle',
    c:'circle',
    'inset':'inset',
    'i':'inset',
    'ellipse':'ellipse',
    'e':'ellipse',
    polygon:'polygon',
    p:'polygon',
    url:'url',
    u:'url'
  }

  if(valuePortion.match(/^(url|u)/)){
   let extractShape=valuePortion.match(/^(url|u)/)[1];
   content="#"+valuePortion.replace(extractShape,'').replace(/^-/,"");
   shape='url';   
  }else if(valuePortion.match(match)){
    let extractShape=valuePortion.match(match)[1];
    shape=shapes[extractShape];
    content=valuePortion.replace(extractShape,'')
    .replace(/(px|em|p|ex|ch|rem|vw|fr|vh|vmin|vmax|cm|mm|in|pt|pc|cv)/g,"$1 ")
    .replace(/p[\s]|p(,)/g,"%$1 ")
    .replace(/_/g,",").replace('-at'," at ")
    .replace('-round'," round ");
    // content=length(valuePortion.replace(extractShape,''));
   

  }else{
    return false;
  }
  return shape+"( "+ content + " )"; 
  
}