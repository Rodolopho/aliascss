import length from "./length.js";
import color from "./color.js";

export default function shadow(data, custom) {
  let holder = "";

  // if(data.match(/^[-]?(i|inset)/)){
  // 		holder+="inset ";
  // }

  let m =
    /(([-]?(i|inset)?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))+)[-_]([\w-]+)/;

  data.split(/--/).forEach((e) => {
    if (m.test(e)) {
      if (e.match(/^[-]?(i|inset)/)) {
        holder += "inset ";
      }

      let result = m.exec(e);
      let col = color(result[5], custom);
      let len = length(result[1], custom);

      holder += len + " " + col + ",";
    }
  });

  return holder.replace(/[,]$/, "");
}
