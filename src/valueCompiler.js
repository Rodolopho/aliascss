import color from "./compilers/color.js";
import length from "./compilers/length.js";
import number from "./compilers/number.js";
import font from "./compilers/font.js";
import angleTimeFrequencyResolution from "./compilers/angleTimeFrequencyResolution.js";
import transform from "./compilers/transform.js";
import transition from "./compilers/transition.js";
import border from "./compilers/border.js";
import gradient from "./compilers/gradient.js";
import shadow from "./compilers/shadow.js";
import url from "./compilers/url.js";
import filter from "./compilers/filter.js";
import timingFunction from "./compilers/timingFunction.js";
import grid from "./compilers/grid.js";
import string from "./compilers/string.js";
import content from "./compilers/content.js";

//TO get array of compiler based in property name
// import { propertyAliasCompiler } from "./static/propertyAliasCompiler.js";

export default function valueCompiler(
  classname,
  compiler,
  valuePortion,
  custom
) {
  let value;

  for (var i = compiler.length - 1; i >= 0; i--) {
    //if it has given compiler
    if (compilers.hasOwnProperty(compiler[i])) {
      //try to match
      if (compilers[compiler[i]].match.test(valuePortion)) {
        value = compilers[compiler[i]].call(valuePortion, custom);
        // console.log(compiler[i]);
        break;
      }
      // console.log(compilers[compiler[i]].match,valuePortion);
    } else {
      console.log("invalid value compiler:-" + compiler[i]);
    }
  }

  // console.log("%c"+classname, "color:red");
  // console.log(value);
  return value;
}

let compilers = {
  color: {
    match: /^[-_]/,
    call: color,
  },
  length: {
    //cv is custome value for user
    match:
      /^(([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|fr|cv))+)/,
    call: length,
  },

  number: {
    match: /^[-]?[0-9]+[d]?[0-9]*$/,
    call: number,
  },
  font: {
    match: /^[-]([a-zA-Z0-9-_]+)/,
    call: font,
  },
  time: {
    match: /^([-]?[0-9]+[d]?[0-9]*(ms|s))/,
    call: angleTimeFrequencyResolution,
  },
  transform: {
    match:
      /^([-]?(matrix|translate|rotate|skew|scale|perspective|m|t|tx|ty|s|sy|sx|r|sk|sky|skx|m3d|t3d|tz|ry|rx|rz|p))/,
    call: transform,
  },
  transition: {
    match: /^[-]([a-z-]+)([0-9]+[d]?[0-9]*[m]?[s])([\w-_]*)/,
    call: transition,
  },
  border: {
    match:
      /^([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmaxc|m|mm|in|pt|pc|fr|cv))[-]?(n|none|s|solid|r|ridge|o|outset|i|inset|h|hidden|g|groove|db|double|dt|dotted|ds|dashed)[-]([\w]*)/,
    call: border,
  },
  gradient: {
    match:
      /[-]?(((repeating-)?(conic|linear|radial)-gradient)|(rrg|rg|lg|cg|rcg|rlg))([\w_-]+)/,
    call: gradient,
  },
  shadow: {
    match:
      /((i|inset)?[-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|fr|cv))+/, //[-_]([\w]+)/,
    call: shadow,
  },
  url: {
    match: /[-]?url[-_]([\w-]+)/,
    call: url,
  },
  filter: {
    match:
      /[-]?(drop-shadow|ds|b|blur|br|brightness|c|contrast|g|grayscale|hr|hue-rotate|i|invert|o|opacity|s|saturate|se|sepia)([-]?[0-9][\w-]+)/,
    call: filter,
  },
  timingFunction: {
    match:
      /[-_]?(cubic-bezier[_-]?[0-9][\w-]+|cb[-_]?[0-9][\w-]+|e|ease|l|linear|ei|ease-in|eo|ease-out|eio|ease-in-out|ss|step-start|se|step-end)/,
    call: timingFunction,
  },
  string: {
    match: /[-_]?/,
    call: string,
  },
  content: {
    match: /[-_]?(url|attr)?[-_]([\w-]+)/,
    call: content,
  },

  fontFeatureSettings: {
    match: /(ffs|font-feature-settings)[-]([\w-_]+)/,
    call: (data, custom, classname) =>
      data[2]
        .replace(/--/g, ", ")
        .replace(/(\w{4})/g, '"$1" ')
        .replace("-", " "),
  },
  grid: {
    match: /^[-]?([\w-]+)/,
    call: grid,
  },
};
