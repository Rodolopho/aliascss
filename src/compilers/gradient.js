import color from "./color.js";

export default function gradient(datas, customColor) {
  datas = datas.replace(/^[-]/, "");
  let masterHolder = "";
  datas.split("--").forEach((data) => {
    let matched = data.match(
      /[-]?(((repeating-)?(conic|linear|radial)-gradient)|(rrg|rg|lg|rcg|cg|rcg|rlg))([\w_-]+)/
    );

    // console.warn(matched, data);
    let grad = matched[1];

    let gradientFunc = "";
    let holder = "";
    //data=45deg-color_position-color_position
    data = matched[6].replace(/^[-]([a-z])/, "$1");
    
    if (alias.hasOwnProperty(grad)) {
      //set gradient to grdeint fucn e.g lineargradient()
      gradientFunc = alias[grad];

      //setting  direction/angle/position/shape e.g right/45deg/center/circle
      let m1 = /^[-]?[0-9]+[d]?[0-9]*(deg|grad|rad|turn)/;
      let m2 =
        /^((to-)?(right|left|top|bottom)?[-]?(right|left|top|bottom))|^([t]?[rltb]?[rltb])(?=[0-9-])/;
      if (m1.test(data)) {
        let m = m1.exec(data);
        holder += m[0].replace(/[d](?=[0-9])/, ".") + ", ";
        data = data.replace(m[0], "");
      } else if (m2.test(data)) {
        let m = m2.exec(data);
        // console.log(m2.match()[1]);
        if (alias.hasOwnProperty(m[0])) {
          holder += alias[m[0]] + ", ";
        }
        data = data.replace(m[0], "");
      }

      data = data.replace(/_([0-9]+)[d]([0-9])/g, " _$1.$2").replace(/_/g,' ').replace(/-/g, ",");
      // console.log(data);
      data = data.

      replace(/^[A-Za-z0-9]+/g, function (mch) {
        // console.log(mch);
        let proccessedColor = color(mch.replace(/[,]/, ""), customColor);
        return proccessedColor ? ", " + proccessedColor : mch;
      }).
      
      replace(/[,][A-Za-z0-9]+/g, function (mch) {
        // console.log(mch);
        let proccessedColor = color(mch.replace(/[,]/, ""), customColor);
        return proccessedColor ? ", " + proccessedColor : mch;
      });

      data = data
        .replace(/(?<=[0-9])[p](?=[\W]|$)/g, "%")
        // .replace(/(?<=[\W]([0-9])+)[d](?=[0-9])/g, ".");
      holder += data.replace(/^[,]/, "").replace(/[_]/g, "");

      // return gradientFunc + "( " + holder.replace(/,$/, "") + " )";
      masterHolder += gradientFunc + "( " + holder.replace(/,$/, "") + " ) ,";
    } else {
      return null;
    }
  });

  return masterHolder.replace(/,$/, "");
}

let alias = {
  //gradient
  cg: "conic-gradient",
  rcg: "repeating-conic-gradient",
  "repeating-conic-gradient": "repeating-conic-gradient",
  "conic-gradient": "conic-gradient",

  lg: "linear-gradient",
  "linear-gradient": "linear-gradient",
  rg: "radial-gradient",
  "radial-gradient": "radial-gradient",
  rlg: "repeating-linear-gradient",
  "repeating-linear-gradient": "repeating-linear-gradient",
  rrg: "repeating-radial-gradient",
  "repeating-radial-gradient": "repeating-radial-gradient",
  //direction ((to-)?(right|left|top|bottom)?(right|left|top|bottom))|([t]?[rltb]?[rltb])(?=[0-9-])
  r: "right",
  right: "right",
  bottom: "bottom",
  b: "bottom",
  t: "top",
  top: "top",
  l: "left",
  left: "left",

  "top-left": "top left",
  "top-right": "top rigth",
  "bottom-right": "bottom right",
  "bottom-left": "bottom left",
  "left-top": "left top",
  "right-top": "rigth top",
  "right-bottom": "right bottom",
  "left-bottom": "left bottom",

  tl: "top left",
  tr: "top right",
  br: "bottom right",
  bl: "bottom left",
  lt: "left top",
  rt: "rigth top",
  rb: "right bottom",
  lb: "left bottom",

  tr: "to right",
  "to-right": "to right",
  "to-bottom": "to bottom",
  tb: "to bottom",
  tt: "to top",
  "to-top": "to top",
  tl: "to left",
  "to-left": "to left",
  "to-top-left": "to top left",
  "to-top-right": "to top right",
  "to-bottom-right": "to bottom right",
  "to-bottom-left": "to bottom left",
  "to-left-top": "to left top",
  "to-right-top": "to right top",
  "to-right-bottom": "to right bottom",
  "to-left-bottom": "to left bottom",
  //shr
  ttl: "to top left",
  ttr: "to top right",
  tbr: "to bottom right",
  tbl: "to bottom left",
  tlt: "to left top",
  trt: "to  right top",
  trb: "to right bottom",
  tlb: "to left bottom",
};
