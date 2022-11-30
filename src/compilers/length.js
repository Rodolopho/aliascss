export default function length(length, custom) {
  if (custom) custom = custom.length;

  if (typeof custom === "object") {
    if (custom.hasOwnProperty(length)) return custom[length];
  }
  //-100px100px-100px100px
  return length
    .match(
      /[-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|fr|vh|vmin|vmax|cm|mm|in|pt|pc|cv)/g
    )
    .toString()
    .replace(/p(,)|p$/g, "%$1")
    .replace(/d/g, ".")
    .replace(/[,]/g, " ");
}
