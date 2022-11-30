export default function transiton(data) {
  let holder = "";

  data
    .replace(/^-/, "")
    .split(/--/)
    .forEach((e) => {
      let m = e.match(/^([a-z-]+)([0-9]+[d]?[0-9]*[m]?[s])([\w-_]*)/);
      let tf = m[3].replace(/^-/, "");
      if (tf && func[tf]) {
        holder +=
          m[1].replace(/-$/, "") +
          " " +
          m[2].replace(/d/, ".") +
          " " +
          func[tf] +
          ",";
      } else {
        holder += m[1].replace(/-$/, "") + " " + m[2].replace(/d/, ".") + ",";
      }
    });

  return holder.replace(/[,]$/, "");
}
let func = {
  e: "ease",
  ease: "ease",
  linear: "linear",
  l: "linear",
  ei: "ease-in",
  "ease-in": "ease-in",
  eo: "ease-out",
  "ease-out": "ease-out",
  eio: "ease-in-out",
  "ease-in-out": "ease-in-out",
  ss: "step-start",
  "step-start": "step-start",
  se: "step-end",
  "step-end": "step-end",
};
