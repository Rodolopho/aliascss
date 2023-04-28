import statementMaker, { classPrinter } from "./src/classPrinter.js";
import openAcssRibbionBar from "./src/acssliveupdate.js";

let AliasCSS = {
  pushURL: null,
  //compile class and returns class statement i.e .br5px{.br5px{border-radius:5px ;}}
  compile: function (classname) {
    return this.statementMaker.make(classname);
  },

  print(){return this.classPrinter.compile()},
  //style="{AliasCSS.inline('fs10px br5px)}"
  inline:function(string){
    return this.statementMaker.groupForStyle(string);
  },
  run:function(el){
    if(typeof el == 'string' ) el=document.querySelector(el);
    if(el && el.toString().includes('HTML')){
      AliasCSS.classPrinter.run(el);
    }
    
  },

  toString: function () {
    return "AliasCSS Object";
  },
  classPrinter: classPrinter,

  //takes custom classname and defination  key,value or {key:value} //{'outline-color':'outline-color: blue;'}
  //no Psedu or anythings
  extend: function (a, b, c) {
    this.statementMaker.extend(a, b, c);
  },
  //Live editor
  liveEditor: openAcssRibbionBar,
  //close live editor in browser
  closeEditor: function () {
    var ele = document.getElementById("quickChangeBox");
    if (ele) ele.parentNode.removeChild(ele);
  },
  //string can be passed with psedu and selector, group is optional
  appendCSS: function (str, group) {
    this.classPrinter.appendToStyleTag(
      this.statementMaker.fromString(str, group)
    );
  },
  addCustom: function (custom) {
    Object.keys(custom).forEach((key) => {
      this.statementMaker.addCustom(key, custom[key]);
    });
  },
  statementMaker: statementMaker,
};

//Adding custom color
// ACSS.addCustom('color',customColor);
if (!window.AliasCSS) {
  window.AliasCSS = AliasCSS;
}

window.addEventListener("load", function () {
  AliasCSS.classPrinter.run();
  console.log(" AliasCSS is running");
});

