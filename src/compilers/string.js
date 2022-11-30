export default function string(str) {
  //hello_word = "hello world", hello-world=>hello-word
  //hello--worlf=
  console.log(str);

  return str.replace(/^[-]/, "");
  replace(/--/g, ",").replace(/_/g, " ");

  // let result = "";

  // str.split('--').forEach((each) => {

  //     if (each.match(/[_]/)) {
  //         result += '"'+ each.replace(/[_]/g, " ") + '"';
  //     } else {
  //         result += " "+each;
  //     }
  // })

  // return result.replace(/[\s]dot/g, " . ");
}
