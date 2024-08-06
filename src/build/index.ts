import statementMaker, { classPrinter } from '../classPrinter.js'
const AliasCSS = {
  pushURL: null,
  // compile class and returns class statement i.e .br5px{.br5px{border-radius:5px ;}}
  compile(className: string) {
    return this.statementMaker.make(className);
  },

  print() {
    return this.classPrinter.compile();
  },
  // style="{AliasCSS.inline('fs10px br5px)}"
  // inline(str: string) {
  //   return this.statementMaker.groupForStyle(str);
  // },
  run(el: any) {
    if (typeof el === 'string') el = document.querySelector(el);
    if (el && el.toString().includes('HTML')) {
      AliasCSS.classPrinter.run(el);
    }
  },
  // compileEle(el: any) {
  //   if (typeof el === 'string') el = document.querySelector(el) || '';
  //   if (el && el.toString().includes('HTML')) {
  //     return AliasCSS.classPrinter.returnStatement(el);
  //   }
 // },

  toString() {
    return 'AliasCSS Object';
  },
  classPrinter,

  // takes custom className and defination  key,value or {key:value} //{'outline-color':'outline-color: blue;'}
  // no Psedu or anythings
  extend(a: any, b: any, c: any) {
    this.statementMaker.prebuild(a, b, c);
  },
  // Live editor
  // liveEditor: openAcssRibbionBar,
  // close live editor in browser
  // closeEditor() {
  //   const ele: any = document.getElementById('quickChangeBox');
  //   if (ele) ele.parentNode.removeChild(ele);
  // },
  // // string can be passed with psedu and selector, group is optional
  // appendCSS(str: string, group: string) {
  //   this.classPrinter.appendToStyleTag(this.statementMaker.fromString(str, group));
  // },
  addCustom(custom: { [key: string]: any }) {
    Object.keys(custom).forEach((key) => {
      this.statementMaker.addCustom(key, custom[key]);
    });
  },
  statementMaker,
};

// @ts-ignore
if (!window.AliasCSS) {
  // @ts-ignore
  window.AliasCSS = AliasCSS;
}

window.addEventListener('load', () => {
  AliasCSS.classPrinter.run();
  console.log(' AliasCSS is running');
});
