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
// import keyframes from './compilers/keyframes.js';

export let matcher = {
  // device:{match:/^(mob|tab|lab|desk|hd|print|xs|sm|md|lg|xl)(?=[-|_])/, call:function(str){return this.match.exec(str)[1];}},
  // selector:{match:/^([-|_])/,call:null},
  //------------------------property and value compilers
  compilers: {
    color: {
      match:
        /^((background-color|accent-color|caret-color|fill|stroke|border(-(right|left|top|bottom|text-decoration|text-shadow))?-color|outline-color|color|text)|(bgc|b[rltb]?c|oc|c|cc|ac|txsc|tdc))[-_]/,
      call: (data, custom, classname) =>
        color(classname.replace(data[0], ""), custom.color),
    },
    length: {
      //cv is custome value for user
      match:
        /^(([-]?[a-z])+)(([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|fr|cv))+)/,
      call: (data, custom) => length(data[3], custom.length),
    },

    number: {
      match:
        /^(aic|animation-iteration-count|border-image-slice|text-shadow-radius|txsr|bis|cc|column-count|f|flex|fg|flex-grow|fsk|flex-shrink|grid-column-start|grid-row-start|grid-column-end|grid-row-end|gcs|grs|gce|gre|font-size|fs|o|opacity|fill-opacity|stroke-opacity|ord|order|lh|ls|letter-spacing|line-height|orp|orphans|op|object-position|zi|z-index)([-]?[0-9]+[d]?[0-9]*)$/,
      call: (data) => number(data[2]),
    },
    font: {
      match: /^(font-family|ff)[-]([a-zA-Z0-9-_]+)/,
      call: (data, custom) => font(data[2], custom.font),
    },
    time: {
      match:
        /^(adu|animation-duration|adl|animation-delay|tdl|transition-delay|tdu|transition-duration)([-]?[0-9]+[d]?[0-9]*(ms|s))/,
      call: (data) => angleTimeFrequencyResolution(data[2]),
    },
    transform: {
      match:
        /^(tf|transform)(([-](matrix|translate|rotate|skew|scale|perspective))|(m|t|tx|ty|s|sy|sx|r|sk|sky|skx|m3d|t3d|tz|ry|rx|rz|p))/,
      call: (data, custom, classname) =>
        transform(classname.replace(data[1], "")),
    },
    transition: {
      match: /^(tn|transition)[-]([a-z-]+)([0-9]+[d]?[0-9]*[m]?[s])([\w-_]*)/,
      call: (data, custom, classname) =>
        transition(classname.replace(data[1], "")),
    },
    border: {
      match:
        /^(b|border|brt|border-right|bl|border-left|bt|border-top|border-bottom|bb|ol|outline|cr|counter-reset)([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmaxc|m|mm|in|pt|pc|fr|cv))[-]?(n|none|s|solid|r|ridge|o|outset|i|inset|h|hidden|g|groove|db|double|dt|dotted|ds|dashed)[-]([\w]*)/,
      call: (data, custom) => border(data[2], data[4], data[5], custom.color),
    },
    gradient: {
      match:
        /(background|bg|bgi|background-image)[-]?(((repeating-)?(conic|linear|radical)-gradient)|(rrg|rg|lg|cg|rlg))([\w_-]+)/,
      call: (data, custom) => gradient(data[2], data[7], custom.color),
    },
    shadow: {
      match:
        /(bxs|bxsi|txs|box-shadow|box-shadow-inset|text-shadow)([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|fr|cv))+/, //[-_]([\w]+)/,
      call: shadow,
    },
    url: {
      match:
        /(background-image|border-image-source|bis|background|bgi|bg)[-]?url[-_]([\w-]+)/,
      call: (data) => url(data[2]),
    },
    filter: {
      match:
        /(filter|fl)[-]?(drop-shadow|ds|b|blur|br|brightness|c|contrast|g|grayscale|hr|hue-rotate|i|invert|o|opacity|s|saturate|se|sepia)([-]?[0-9][\w-]+)/,
      call: (data) => filter(data[2], data[3]),
    },
    timingFunction: {
      match:
        /(animation-timing-function|atf|transition-timing-function|ttf)[-_]?(cubic-bezier[_-]?[0-9][\w-]+|cb[-_]?[0-9][\w-]+|e|ease|l|linear|ei|ease-in|eo|ease-out|eio|ease-in-out|ss|step-start|se|step-end)/,
      call: (data) => timingFunction(data[2]),
    },
    content: {
      match:
        /^(con|content|grid-area|ga|grid-template-areas|gtc|grid-template-columns|^gtr|grid-template-rows|gta)[-_]?(url|attr)?[-_]([\w-]+)/,
      call: (data) => {
        //u->url
        if (data[2] === "url") {
          return url(data[3]);
        } else if (data[2] === "attr") {
          return "attr(" + data[3] + ")";
        }

        let result = "";

        data[3].split("--").forEach((each) => {
          if (each.match(/[_]/)) {
            result += "'" + each.replace(/[_]/g, " ") + "' ";
          } else {
            result += each;
          }
        });

        return result.replace(/[\s]dot/g, " . ");
      },
    },
    animation: {
      match: /(animation-name|an)[-_]([\w]+)/,
      call: (data) => {
        return data[2];
      },
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
      // match:'/yzx(grid-template-column|grid-template-row|gtr|gtc|\
      // 	grid-auto-rows-minmax|grid-auto-columns-minmax|gacmx|garmx\
      // 	grid-auto-rows-fit-content|grid-auto-columns-fit-content|gacmx|garmx\
      // |grid-column-end-span|gces|grid-row-end-span|gres|grid-column|gc|grid-row|gr|grid-area|ga\
      // )/',//,
      match: /^(grid-column|gc|ga|grid-area|grid-row|gr)[-]?([\w-]+)/,
      call: (data) => {
        //grid-colums,grid-row, grid-column-start-grid-
        if (
          data[2].match(/(span)?[-]?[0-9]+((by)?[-0-9]*([-]?span[0-9]+)?)*/)
        ) {
          return data[2]
            .replace(/[-]?by/g, " / ")
            .replace(/[-]?span/g, " span ");
        }
        //1fr1fr1fr1fr
        //repeat3_1fr2fr
        //repeat-auto-fill-minmax200px1fr
        //repeat-auto-fill-minmax200px-autofill
        //

        //1by2
        //1by-1
        //1by2by4by4
        //1byspan3 or 1by-span3
        //1byspan3by1byspan5 or 1by-span3by-span6
        //minmax200px1fr
        //minmax-auto200px
        //minmax200px-auto
        //grid-auto-columns: fit-content(400px);
      },
    },
    // 		grid-template-column:1fr 1fr 1fr //
    // grid-template-column: repeate(3, 1fr) //gtc-r3_1fr3fr
    // grid-template-column: repeate(3, 1fr 2fr)
    // grid-template-column: repeate(auto-fill, 200px)  //raf200px30px
    // grid-template-column: repeate(auto-fill, minmax(200px, 1fr));//rafmx200px1fr
    // grid-template-column:  minmax(200px, 1fr);m200px1fr
    // grid-template-column:  minmax(200px, 1fr);

    // grid-auto-rows:200px

    // grid-auto-rows: minmax(100px, auto)
    // grid-auto-rows: minmax(100px, 400px)

    // grid-column-start:1
    // grid-column-end:4

    // grid-column:1/4 gc1by4  gc1by-1 gc1by-span3
    // grid-column:1  //1/ span 1 equevalent
    // grid-column:1 / span 3
    // grid-column:1 / -1 //full stretch to colum
    // gap:1rm
    // gap:1em 20px
    // column-gap:20px

    // grid-area: 1/2/3/4 ga1by2by3by4    1byspan3by2byspan4

    // grid-area: grid-row-start/grid-column-start/grid-row-end/grid-colum-end
  },

  // -------------for property and value-----------
};
// let t=/(background-color|border(-(right|left|top|bottom))?-color|outline-color|color)|(bgc|b[rltb]?c|c)/,
