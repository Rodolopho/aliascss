export default function keyframes(data, name, propertyValue, custom) {
  [animate|kf|keyframes]-([0-9]+[p])?-pnv---pnv---pnv__([0-9]+[p])?-pnv---pnv---pnv__([0-9]+[p])?-pnv---pnv---pnv
  //Step
  //1. Extract name and @keyframes

  //.
  let statement = "@keyframes " + name + "{\n";
  let splits = data.split("__");
  splits.forEach((each) => {
    let result = at(each, propertyValue, custom);
    if (result !== false) statement += "\t" + result;
  });

  return statement + "}";
}

function at(data, propertyValue, custom) {
  if (!data.match(/^(from|to|[0-9]+[p])/)) return false;
  let statement = "";
  let when = data.match(/^(from|to|[0-9p]+[p])/)[0];
  data = data.replace(when + "-", "");
  data.split("---").forEach((e) => {
    let pnv = propertyValue(e, custom);
    if (pnv) statement += "\n\t\t" + pnv + ";";
  });

  if (statement)
    return (
      when.replace(/p/g, "% ,").replace(/[,]$/, "") +
      "{\n" +
      statement +
      "\n\t}\n"
    );
  return false;
}

// keyframes-name__from-propertyvalue---propertyvalue__to
// keyframes-name__0px-
// keyframes-name__0p10p50p-

// @keyframes bouncing {
//     0%, 50%, 100% { /* OR from, 50%, to */
//         top: 0;
//     }
//     25%, 75% {
//         top: 100px;
//     }
// }

// keyframes-bouncing-0p50p100p-t0p
// @keyframes bouncing {
//     0% {
//         top: 0;
//     }
//     25% {
//         top: 100px;
//     }
//     50% {
//         top: 0;
//     }
//     75% {
//         top: 100px;
//     }
//     100% {
//         top: 0;
//     }
// }

// @keyframes jump {
//     0% {
//         left: 0; top: 0;
//     }
//     50% {
//         left: 200px; top: -200px;
//     }
//     100% {
//         left: 400px; top: 0;
//     }
// }

// @keyframes bounce {
//   from {
//     top: 100px;
//     animation-timing-function: ease-out;
//   }
//   25% {
//     top: 50px;
//     animation-timing-function: ease-in;
//   }
//   50% {
//     top: 150px;
//     animation-timing-function: ease-out;
//   }
//   75% {
//     top: 75px;
//     animation-timing-function: ease-in;
//   }
//   to {
//     top: 100px;
//   }
// }

// @keyframes fall {
//     from {
//         transform: rotate(0) translateX(0);
//         opacity: 1;
//     }
//     /* ... */
//     to {
//         transform: rotate(90deg) translateX(200px);
//         opacity: 0;
//     }
// }
