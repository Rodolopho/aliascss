import color from "./color.js";
import length from "./length.js";
export default function border(data, custom) {
  let [l, s, c] = data.split("-");
  let col = color(c, custom);
  let sty = style.hasOwnProperty(s) ? style[s] : "";

  let len = length(l, custom); //.replace(/d/,".");

  return len + " " + sty + " " + col;
}

let style = {
  n: "none",
  none: "none",
  s: "solid",
  solid: "solid",
  r: "ridge",
  ridge: "ridge",
  o: "outset",
  outset: "outset",
  i: "inset",
  inset: "inset",
  h: "hidden",
  hidden: "hidden",
  g: "groove",
  groove: "groove",
  db: "double",
  double: "double",
  dotted: "dotted",
  dt: "dotted",
  ds: "dashed",
  dashed: "dashed",
};
// (n|none|s|solid|r|ridge|o|outset|i|inset|h|hidden|g|groove|db|double|dt|dotted|ds|dashed)
// match=/(b|border|brt|border-right|bl|border-left|bt|border-top|border-bottom|bb|ol|outline|cr|counter-reset)([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmaxc|m|mm|in|pt|pc|cv))[-]?(n|none|s|solid|r|ridge|o|outset|i|inset|h|hidden|g|groove|db|double|dt|dotted|ds|dashed)[-]([\w]+)/
// letborderLike={match:/^(b|border|brt|border-right|bl|border-left|bt|border-top|border-bottom|bb|ol|outline|cr|counter-reset)[-]?[0-9][\w]+[-]?(s|sn|r|o|i|h|g|db|dt|ds)/,
// 			  callFunction:function(each){//console.log("i am a border");
// 			  	var styleAlias={n:"none",s:"solid", r:"ridge", o :"outset", i :"inset", h :"hidden", g : "groove", db:"double", dt:"dotted", ds : "dashed",};
// 				var propertyAlias=each.match(this.match)[1];
// 			    var getProperty=aliasProperty[propertyAlias];
// 			    var style="", length="", color="";
// 			    if(each.match(/ct|c_t/)){color="transparent";}
// 			    else if(compiler.colorProcessor(each)){color=compiler.colorProcessor(each);}
// 			    if(compiler.lengthProcessor(each)){length=compiler.lengthProcessor(each);};
// 			    if(each.match(/[_|-](s|n|r|o|i|h|g|db|dt|ds)/)){
// 			    	var s=each.match(/[_|-](s|n|r|o|i|h|g|db|dt|ds)/)[1];
// 			    	style=styleAlias[s];
// 			    }
// 			    //getMulipleValue=[];
// 			    getValue=style+" "+length+" "+color;
// 				return [getProperty,getValue];
// 			  }
// 			};
