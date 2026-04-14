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
 

  toString() {
    return 'AliasCSS Object';
  },
  classPrinter,

  // takes custom className and defination  key,value or {key:value} //{'outline-color':'outline-color: blue;'}
  // no Psedu or anythings
  extend(a: any, b: any, c: any) {
    this.statementMaker.prebuild(a, b, c);
  },
  
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


(() => {
  const runScript = () => {
    AliasCSS.classPrinter.run();
  };

  // 1. Run after initial DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runScript);
  } else {
    runScript(); // DOM already parsed, run immediately
  }

  // 2. Re-run on every DOM change and attribute change
  const observer = new MutationObserver(() => {
    observer.disconnect();       // pause to avoid infinite loop
    runScript();
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeOldValue: true,
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeOldValue: true,
  });
})();