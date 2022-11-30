export default function content(str) {
  //for content attr
  str = str.replace(/^[-]/, "");
  let data = str.match(/^(attr|counter)?[-_]([\w-]+)/);
  if (data) {
    if (data[1] === "attr") {
      return "attr(" + data[2] + ")";
    }
    if (data[1] === "counter") {
      return "counter(" + data[2] + ")";
    }
  }

  return '"' + str.replace(/[_]/g, " ") + '"';

  // str.split('--').forEach((each) => {

  //     if (each.match(/[_]/)) {
  //         result += '"' + each.replace(/[_]/g, " ") + '"' ;
  //     } else {
  //         result += '"'+each+'"';
  //     }
  // })

  // return result.replace(/[\s]dot/g, " . ");
}
