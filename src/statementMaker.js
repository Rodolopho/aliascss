import propertyAndValue from "./provertyAndValue.js";
import { deviceHandler, deviceMatch } from "./responsive.js";
import { whileMatchNCall, selectorMatch } from "./selector.js";
import keyframes from "./keyframes.js";
// import  {matcher} from "./matcher.js";

import customColor from "./static/customColor.js";

//---------------------------Notes-----------------------------------------------------------------
// Its handles each classname, responsible for keyframe, device, selector, suffix, then calls propertyAndValue 
//for property:value

export let statementMaker = {
  device: null,
  classname: null,
  selector: null,
  propertyAndValue: null,
  hasSuffix: null,
  keyframesMatch: /^(animate|keyframes|kf|k)-([a-zA-Z-]+)[_]{2}/,
  cache: {
    propertyAndValue: {},
  },
  //it will igonre the classname listed in ignore
  ignore: [],
  custom: {},
  addCustom: function (name, obj) {
    if (typeof obj === "object") {
      if (!this.custom[name]) this.custom[name] = {};
      for (let key in obj) {
        this.custom[name][key] = obj[key];
      }
    }
  },

  //Handle @keyframe animation
  //Handle !important !default.....
  handleSuffix: function (classname) {
    let match = /[-](i|-important)$/;
    if (classname.match(match)) this.hasSuffix = " !important";
    return classname.replace(match, "");
  }, //end of Handle suffix

  getPropertyAndValue(classname) {
    let result = this.make(classname, null, true);
    if (!result[0] && !result[1]) return result[2];
  },

  make(classname, as, bool) {
    // as for grouping classnames into single group
    //bool return [selector,proverty:value]
    //reset old values
    [
      this.device,
      this.classname,
      this.selector,
      this.propertyAndValue,
      this.hasSuffix,
    ] = [null, null, null, null, null];

    this.classname = as ? as : classname;

    //-----  ---KeyFrames-------------------------------------
    if (this.keyframesMatch.test(classname)) {
      // (animate|keyframes|kf|k)-([\w]+)[-_]{1,2}/,
      let extract = classname.match(this.keyframesMatch);
      // classname=classname.replace(extract[0],'');
      let name=extract[2];
      let $result = keyframes(
        classname.replace(extract[0], ""),
        this.custom
      );
      if ($result) {
        // return "@keyframes" +name+ " {/n"+ $result +"\n}\n" + `\n .${classname}{animation-name: ${name}}`;
        return `@keyframes ${name}   ${$result} \n .${classname}{animation-name: ${name}}`;
      } else {
        console.log(
          `Can not able to process classname "${classname}" @keyframes`
        );
        return false;
      }
    }
    // -------------------------responsive----------------takes out device[-|_] mob-, tab_
    if (deviceMatch.test(classname)) {
      this.device = deviceMatch.exec(classname)[1];
      classname = classname.replace(this.device, "");
    }

    //-----------------selector- element-class-Pseduo- --hover, -nth, _div_li, __div etc

    let selectorResult = whileMatchNCall(classname);
    this.selector = selectorResult[1];
    classname = selectorResult[0].replace(/^[_-]/, "");

    //------------suffix-flag------ -i,--important

    classname = this.handleSuffix(classname);

    // now pure class name with property and value
    //
    //------------proverty and value---------------
    //-----------------------------------------------
    if (this.cache.propertyAndValue.hasOwnProperty(classname)) {
      this.propertyAndValue = this.cache.propertyAndValue[classname];
    } else {
      this.propertyAndValue = propertyAndValue(classname, this.custom);
      if (!this.propertyAndValue) return false;
      this.cache.propertyAndValue[classname] = this.propertyAndValue;
    }

    if (bool === true)
      return [
        this.device,
        this.selector,
        this.propertyAndValue + (this.hasSuffix ? this.hasSuffix : ""),
      ];

    let statement =
      "." +
      this.classname +
      this.selector +
      "{" +
      this.propertyAndValue +
      (this.hasSuffix ? this.hasSuffix : "") +
      " ;}";

    //handle media quries
    if (this.device) {
      return deviceHandler(this.device, statement);
    }

    return statement;
  },
  extend: function (a, b) {
    if (typeof a === "object") {
      for (let key in a) {
        this.cache.propertyAndValue[key] = a[key];
      }
    } else {
      if (a && b) {
        this.cache.propertyAndValue[a] = b;
      }
    }
  },

  groupForJs: function (string, bool) {
    if (!string.trim()) return "";
    let jsStyle = {};
    let list = string.trim().split(/\s+/);
    list.forEach((e) => {
      let pNv = "";
      if (this.cache.propertyAndValue.hasOwnProperty(e)) {
        pNv = this.cache.propertyAndValue[e];
      } else {
        pNv = propertyAndValue(e, this.custom);
        if (pNv) this.cache.propertyAndValue[e] = pNv;
      }
      if (!pNv) return "";
      let result = pNv.split(":");
      if (result.length === 2) {
        let key = result[0].replace(/-([a-z])/g, function (e, a) {
          return a.toUpperCase();
        });
        let value = bool === true ? result[1].replace(/px$/g, "") : result[1];
        if (value.trim().match(/^[\d\.]+$/)) {
          value = parseFloat(value);
        }

        jsStyle[key] = value;
      }
    });

    return jsStyle;
  },
  groupForStyle: function (str) {
    let container = "";
    let classList = []; //filtering duplicate classNames
    let list = str.trim().split(/\s+/);
    list.forEach((e) => {
      // this.hasSuffix=null;
      // e=this.handleSuffix(e);
      if (this.cache.propertyAndValue.hasOwnProperty(e)) {
        container +=
          this.cache.propertyAndValue[e] +
          (this.hasSuffix ? this.hasSuffix : "") +
          " ;\n";
      } else {
        let pNv = propertyAndValue(e, this.custom);
        if (pNv) {
          this.cache.propertyAndValue[e] = pNv;
          container += pNv + ";"; //+ (this.hasSuffix?this.hasSuffix:'')+" ;\n";
        }
      }
    });

    return container;
  },
  fromString: function (string, group) {
    if (group) {
      return statementMaker.group(string, group);
    }
    let statement = "";
    if (!string.trim()) return false;
    let classList = string.split(/\s+/);
    classList.forEach((eachClass) => {
      let result = this.make(eachClass);
      if (result) {
        statement += result + "\n";
      }
    });
    return statement;
  },
  group: function (str, as) {
    let statement = "";
    let container = "\n";
    //let classList=[];//to filter duplicate filter
    let list = str.trim().split(/\s+/);
    list.forEach((e) => {
      //case.1. when there is no selector or device prefix
      // selector:{match:/^([-|_])/,call:null},
      if (selectorMatch.test(e) || deviceMatch.test(e)) {
        let result = this.make(e, as);
        if (result) statement += result + "\n";
      } else {
        //maked sure to reset hasSuffix
        this.hasSuffix = null;
        e = this.handleSuffix(e);
        if (this.cache.propertyAndValue.hasOwnProperty(e)) {
          container +=
            "\t" +
            this.cache.propertyAndValue[e] +
            (this.hasSuffix ? this.hasSuffix : "") +
            " ;\n";
        } else {
          let pNv = propertyAndValue(e, this.custom);
          if (pNv) {
            this.cache.propertyAndValue[e] = pNv;
            container +=
              "\t" + pNv + (this.hasSuffix ? this.hasSuffix : "") + " ;\n";
          }
        }
      }
    });

    return `${statement} \n .${as} { ${container} }`;
  },
  groupObj: function (obj) {
    if (typeof obj !== "object") return false;
    let statement = "";

    for (let key in obj) {
      let result = this.group(obj[key], key);
      if (result) {
        statement += result + "\n";
      }
    }
    return statement;
  },
};

statementMaker.addCustom("color", customColor);
