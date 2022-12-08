export default function font(str, custom) {
  custom = custom.font;
  if (typeof custom === "object") {
    if (custom.hasOwnProperty(font)) return custom[font];
  }
  let holder = "";

  str
    .replace(/^[-_]/, "")
    .split(/--/)
    .forEach((e) => {
      if (e.search(/_/) !== -1) {
        holder += '"' + e.replace(/_/g, " ") + '" , ';
      } else {
        holder += e + " , ";
      }
    });

  return holder.replace(/,[\s]$/, "");
}
