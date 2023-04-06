import { flags } from "./static/pseudoSelector.js";

// export  const browserPrefix=["-moz-","-webkit-","-ms-"];

export const selectorMatch = /^([-|_])/;

let matchAndCall = {
  element: {
    match: /^_[_]?[A-Za-z0-9_]+(?=[_|-])/,
    callFunction: elementHandler,
  },
  pseduoFullFlag: {
    match:
      /(^--(?!n)[a-z0-9]+(-child|-scrollbar|-scrollbar-thumb|-scrollbar-track|-of-range|-of-type|-before|-after|-hover|-letter|-line|-range|-target|-only|-write)?)(?=[-|_])/,
    callFunction: pseduoFullFlag,
  },
  pseduoNot: {
    match: /(^--not-([a-z0-9]+)(?=[-|_]))/,
    callFunction: pseduoHandlerNot,
  },
  pseduoNthChild: {
    match:
      /(^--nth(-child-|last-child-|last-of-type|of-type-))([0-9]+[n]?)(?=[-|_])/,
    callFunction: pseduoHandlerNthChild,
  },
  pseduoShortNth: {
    match: /^(-(n|nc|nlc|nlot|not)-)([a-z0-9]+)(?=[-|_])/,
    callFunction: pseduoShortNth,
  },
  pseduoShort: {
    match:
      /^(-(a|af|sb|stm|st|afh|bf|bfh|ch|de|di|em|en|fc|fl|fln|fot|fo|h|haf|abf|htg|ir|ind|inv|lc|lot|ln|oot|oc|oor|ph|ro|rw|r|rt|s|tg|v|vi))(?=[-|_])/,
    callFunction: pseduoShort,
  },
};

function pseduoFullFlag(classname) {
  let alias = classname.match(matchAndCall.pseduoFullFlag.match)[0];
  if (flags.hasOwnProperty(alias)) {
    classname = classname.replace(alias, "");
    return [classname, flags[alias]];
  }

  return [classname, ""];
}
function pseduoHandlerNthChild(classname) {
  let pseduo = "";
  let m = classname.match(matchAndCall.pseduoNthChild.match);
  let alias = m[1];
  let classnamepre = m[0];
  let n = m[3];

  if (flags.hasOwnProperty(alias)) {
    pseduo = flags[alias] + "(" + n + ")";
    classname = classname.replace(classnamepre, "");
  }

  return [classname, pseduo];
}
function pseduoHandlerNot(classname) {
  let alias = classname.match(matchAndCall.pseduoNot.match)[0];
  let pseduo = ":not(" + classname.match(matchAndCall.pseduoNot.match)[2] + ")";
  classname = classname.replace(alias, "");

  return [classname, pseduo];
}
function pseduoShortNth(classname) {
  let match = classname.match(matchAndCall.pseduoShortNth.match);
  if (flags.hasOwnProperty(match[1])) {
    return [
      classname.replace(match[0], ""),
      flags[match[1]] + "(" + match[3] + ")",
    ];
  }

  return [classname, ""];
}
function pseduoShort(classname) {
  let match = classname.match(matchAndCall.pseduoShort.match);
  if (flags.hasOwnProperty(match[1])) {
    return [classname.replace(match[0], ""), flags[match[1]]];
  }

  return [classname, ""];
}
function elementHandler(classname) {
  let alias = classname.match(matchAndCall.element.match)[0];
  if (alias) {
    let elfy = alias
      .replace(/____/g, " ~ ")
      .replace(/___/g, " + ")
      .replace(/__/g, " > ")
      .replace(/_/g, "  ")
      .replace(/^all/, " * ")
      .replace(/[\s]([A-Z])/g, function (e, a) {
        return " ." + a.toLowerCase();
      })
      .trim();

    return [classname.replace(alias, ""), " " + elfy];
  }
  return [classname, ""];
}

// ---------------while-Match---

export function whileMatchNCall(classname) {
  let before = "";

  while (classname) {
    let match = false;
    for (let key in matchAndCall) {
      if (classname.match(matchAndCall[key].match)) {
        match = true;
        let result = matchAndCall[key].callFunction(classname);
        if (!result[1]) {
          match = false;
        }
        classname = result[0];
        before += result[1];
        break;
      } else {
      }
    }
    // console.log(match);
    if (!match) break;
  }
  return [classname, before];
}

//-----------whiel-match-end
// exports.whileMatchNCall=whileMatchNCall;
// exports.pseduoFullFlag=pseduoFullFlag;
// exports.pseduoShort=pseduoShort;
// exports.pseduoShortNth=pseduoShortNth;
// exports.deviceHandler=deviceHandler;
// exports.elementHandler=elementHandler;
// exports.pseduoHandlerNthChild=pseduoHandlerNthChild;
// exports.pseduoHandlerNot=pseduoHandlerNot;
// exports.matchAndCall;
