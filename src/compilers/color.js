export default function color(color, custom) {
  if (color.match(/[-_]/)) color = color.split(/[_-]/)[1];
  custom = custom.color;
  if (typeof custom === "object") {
    if (custom.hasOwnProperty(color)) return custom[color];
  }

  //hexadecimal
  if (/^[0-9a-fA-F]{3,6}$/.test(color)) {
    return `#${color}`;

    //Name
  } else if (/^[a-zA-Z]+$/.test(color)) {
    return color;
    //rgb/a in number
  } else if (/^[0-9]{9}/.test(color)) {
    //rgb
    let rgb = color.match(/[\d]{3}/g);
    if (color.length === 9) {
      return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    } else {
      let a = color.slice(9).replace("d", ".");
      return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;
    }
    //rgb/a in pecentage
  } else if (/[0-9]+p/.test(color) && color.match(/[0-9]+p/g).length === 3) {
    if (/[\d]p$/.test(color)) {
      return (
        "rgb(" + color.replace(/([\d]+)p([\d]+)p([\d]+)p/, "$1%,$2%,$3%") + ")"
      );
    } else {
      return (
        "rgba(" +
        color.replace(
          /([\d]+)p([\d]+)p([\d]+)p([\d][d]?[\d]?)/,
          "$1%,$2%,$3%,$4"
        ) +
        ")"
      ).replace("d", ".");
    }
    //HSL/a
  } else if (/[0-9]+p/.test(color) && color.match(/[0-9]+p/g).length == 2) {
    if (/[\d]p$/.test(color)) {
      return (
        "hsl(" + color.replace(/([\d]{3})([\d]+)p([\d]+)p/, "$1,$2%,$3%") + ")"
      );
    } else {
      return (
        "hsla(" +
        color.replace(
          /([\d]{3})([\d]+)p([\d]+)p([\d][d]?[\d]?)/,
          "$1,$2%,$3%,$4"
        ) +
        ")"
      ).replace("d", ".");
    }
  } else {
    return false;
  }
}
