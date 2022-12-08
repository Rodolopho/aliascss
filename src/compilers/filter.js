import shadow from "./shadow.js";

export default function filter(valuePortion, custom) {
  let extractFnV=valuePortion.split('--');
  let result='';
  extractFnV.forEach(element => {
    result=result + extractValue(element,custom) +" ";
    
  });

  return result.replace(/[\s]$/,'');
  
}

// return f(value); blur(40px)
 function extractValue(each,custom){
    let extractFnV=each.split(/^[-]?([a-zA-Z-]+)/);
    let f=extractFnV[1];
    let v=extractFnV[2];
    if(/-$/.test(f)){
      f=f.replace(/-$/,"");
      v='-'+v;
    }
     if (f.match(/drop-shadow|ds/)) {
      return func[f] + "( " + shadow(v,custom) + " )";
    }

    if (func.hasOwnProperty(f)) {
    let fn = func[f];
      if (fn) {
        return (
          fn +
          "( " +
          v.replace(/p$/, "%").replace(/(?<=[0-9])[d](?=[0-9])/, ".") +
          " )"
        );
      }
    }
  }

let func = {
  b: "blur",
  blur: "blur",
  br: "brightness",
  brightness: "brightness",
  "drop-shadow": "drop-shadow",
  ds: "drop-shadow",
  c: "contrast",
  contrast: "contrast",
  g: "grayscale",
  grayscale: "grayscale",
  hr: "hue-rotate",
  "hue-rotate": "hue-rotate",
  i: "invert",
  invert: "invert",
  o: "opacity",
  opacity: "opacity",
  saturate: "saturate",
  s: "saturate",
  se: "sepia",
  sepia: "sepia",
};

//m=/(filter|f)(drop-shadow|ds|b|blur|br|brightness|c|contrast|g|grayscale|hr|hue-rotate|i|invert|o|opacity|s|saturate|se|sepia)([-]?[0-9][\w-]+)/;

// filter:{match:/^fl([b|c|g|h|i|o|s][l|r|e]?)[0-9]+/,
// 			callFunction:function(each){

// 				getProperty='filter';
// 				var funcAlias={bl:'blur',b:'brightness',c:'contrast',g:'grayscale',
// 					hr:'hue-rotate',i:'invert',o:'opacity',s:'saturate',se:'sepia'};
// 				if(each.match(/[d]?[0-9]$/)){

// 					funcValue=each.match(/([0-9]*[d]?[0-9]+)/)[0].replace('d', '.');

// 				}else if(each.match(/flhr[0-9]+/)){
// 					funcValue=compiler.angleTimeFrequencyResolutionProcessor(each);
// 				}else{

// 					funcValue=compiler.lengthProcessor(each)?compiler.lengthProcessor(each):0;

// 				}
// 				getValue=funcAlias[each.match(this.match)[1]] + "(" +funcValue +")";
// 				return 	[getProperty,getValue];

// 			}

// 			},
