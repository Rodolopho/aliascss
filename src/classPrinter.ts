import { compiler as statementMaker} from './returnStatement.js';

export default statementMaker;
type ClassPrinter = { [key: string]: any };
export let classPrinter: ClassPrinter = {
  invalidLists: [],
  classLists: [],
  styleTagExists: false,
  customCheck: false,
  useColon:true,

  styleTag: null,
  createStyleTag() {
    if (this.styleTagExists === true) {
      return this.styleTag;
    }
    const styleTag = document.createElement('style');
    styleTag.id = 'styleAlias';
    document.getElementsByTagName('head')[0].appendChild(styleTag);
    this.styleTag = styleTag;
    this.styleTagExists = true;
    return styleTag;
  },
  // you can always append a class if you like modify the look here if you want
  appendToStyleTag(classStatement: string) {
    const createNewClass = document.createTextNode(classStatement);
    this.createStyleTag().appendChild(createNewClass);
  },
  // compile dom stylesheet
  // show current style statement
  compile() {
    const classes = document.getElementById('styleAlias');
    if (classes) {
      const prettyPrint = classes.innerHTML
        .replace(/\}/g, '</br>}</br>')
        .replace(/\{/g, '{</br>&nbsp;&nbsp;&nbsp;&nbsp;');
      document.write(prettyPrint);
    } else {
      console.warn('There is not ACSS used in this document!!');
      alert('Could not found acss statements  in this Document!');
    }
  },

  // print className of el to style tag; gets statement from statementMaker.make(eachClass);
  print(el: HTMLElement) {
    // initialize class or acss-class value container
    let attrValue = '';
    const testRegExp=this.useColon? /class[-_:]/: /class[-_]/;
    const testRegExpKF=this.useColon? /keyframes[-_:]/: /keyframes[-_]/;

    // if class
    if (el.getAttribute('class')) attrValue += ' ' + el.getAttribute('class');
    // if acss-class
    // if (el.getAttribute('acss-class')) attrValue += ' ' + el.getAttribute('acss-class');
    // new Update
    [...el.attributes].map((each)=>{
      // ------------
      // class-group
      if( testRegExp.test(each.name)){
            let value=each.value;
            let group=each.name.replace(testRegExp,'');
            const match=group.match(/\[(.)+\]/);
                  if(match){
                    group=group.replace(match[0],'');
                    value=value.trim().split(/\s+/).map(e=>match[0].replace(/^\[/,'').replace(/\]$/,'')+(/^[_-]/.test(e)?'':'-')+e).join(" ");  
                  }
              const result = statementMaker.group(value, group);
              if (result) {
                  this.appendToStyleTag(result);
                //  return true;
              }
           }
      // -------
          //  if( testRegExp.test(each.name)){
          //     const result = statementMaker.group(each.value, each.name.replace(testRegExp,''));
          //     if (result) {
          //         this.appendToStyleTag(result);
          //       //  return true;
          //     }
          //  }  
           if( testRegExpKF.test(each.name)){
            const key=each.name.replace(testRegExpKF,'');
              let kfStatement='@keyframes '+ key +"{\n";
              const returnPnV=(e:string[])=>e.map((i)=>statementMaker.make(i,undefined,true)).join(";");
              const split=each.value.trim().split(/\s+/);
              split.forEach((each:string) => {
                try {
                  const[at,pNv]=each.replace(/\]\[/,']-[').replace("-","=").split("=");
                  const result=returnPnV(pNv.replace(/^\[|\]$/g,'').split(','));
                  kfStatement+=` ${at.replace('@','').replace(/:/g,',').replace(/,/g,"%,").replace(/[\[|\]]/g,'')}% {${result?result:''}}`
                } catch (error) {
                  console.log('invalid Entry for AliasCSS keyframes processor : '+each,error);
                }
                
              });
               this.appendToStyleTag(kfStatement+ "\n}");
           }  
             
        })

    // if has value to process
    if (!attrValue.trim()) return;

    // has-test-group(for live update only)
    /* if (el.getAttribute('acss-group-test')) {
      const result = statementMaker.group(attrValue, el.getAttribute('acss-group-test')||'');
      const styleTag = document.querySelector('style#' + el.getAttribute('acss-group-test'));
      if (result) {
        if (styleTag) {
          styleTag.innerHTML = '';
          const createNewGroup = document.createTextNode(result);
          styleTag.appendChild(createNewGroup);
          //  return true;
        } else {
          const styleTag: any = document.createElement('style');
          styleTag.id = el.getAttribute('acss-group-test');
          document.getElementsByTagName('head')[0].appendChild(styleTag);
          const createNewGroup = document.createTextNode(result);
          styleTag.appendChild(createNewGroup);
        }
      }
    } */
    // -----------------------end of for live update

    // get class and trim out white spaces
    const tmpClassList = attrValue.trim().split(/\s+/);

    // looping class
    tmpClassList.forEach((eachClass: string) => {
      // escape repeated class name

      if (this.classLists.indexOf(eachClass) === -1 && this.invalidLists.indexOf(eachClass) === -1) {
        // add to classlist for reference
        this.classLists.push(eachClass);

        //  var result=compiler.main(eachClass);
        const result = statementMaker.make(eachClass);
        //  console.log(result);

        if (result) {
          this.appendToStyleTag(result);
        } else {
          // not a valid ACSS classNames
          this.invalidLists.push(eachClass);
        }
      }
    });
  }, // end-of-main
  // returns css statement from current element
  compileElement(el: HTMLElement, list: [] = []) {
    const classList: string[] = list;
    let statement = ' ';
    // initialize class or acss-class value container
    let attrValue = '';
    const testRegExp=this.useColon? /class[-_:]/: /class[-_]/;
    // matchRegExp:/(?:(class|className|class[-_][\w-\[\]=_]+))=[\s*]?(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/,
  // matchRegExpWithColon:/(?:(class|className|class[-_:][\w-\[\]=_]+))=[\s*]?(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/,

    // if class
    if (el.getAttribute('class')) attrValue += ' ' + el.getAttribute('class');
    // New update 2023-aug-03
    
     [...el.attributes].map((each)=>{
      
           if( testRegExp.test(each.name)){
            let value=each.value;
            let group=each.name.replace(testRegExp,'');
            const match=group.match(/\[(.)+\]/);
                  if(match){
                    group=group.replace(match[0],'');
                    value=value.trim().split(/\s+/).map(e=>match[0].replace(/^\[/,'').replace(/\]$/,'')+(/^[_-]/.test(e)?'':'-')+e).join(" ");  
                  }
              const result = statementMaker.group(value, group);
              if (result) {
                  this.appendToStyleTag(result);
                //  return true;
              }
           }  
             
        })
    // if acss-class
    // if (el.getAttribute('acss-class')) attrValue += ' ' + el.getAttribute('acss-class');

    // if has value to process
    if (!attrValue.trim()) return;

    // get class and trim out whitespace
    const tmpClassList = attrValue.trim().split(/\s+/);

    // looping class
    tmpClassList.forEach((eachClass) => {
      // escape repeated className
      if (classList.indexOf(eachClass) === -1) {
        classList.push(eachClass);
        //  var result=compiler.main(eachClass);
        const result = statementMaker.make(eachClass);
        //  console.log(result);

        if (result) {
          statement += result + ' ';
          //  this.appendToStyleTag(result);
        } else {
          // not a valid ACSS classNames
          console.log('Not a valid Aliascss class name:' + eachClass);
        }
      }
    });

    return statement;
  },
  // returns css statement from given element and child
  returnStatement($el: HTMLElement) {
    let statement = '';
    const classList: [] = [];
    const processOuterHtml= this.compileElement($el, classList);
    statement+=processOuterHtml ? processOuterHtml : '';

    // <template> element
    Array.prototype.forEach.call($el.querySelectorAll('template'), (template) => {
      // Array.prototype.forEach.call(template.content.querySelectorAll('[class],[acss-class]'), (e) => {
      Array.prototype.forEach.call(template.content.querySelectorAll('[class]'), (e) => {
        const result = this.compileElement(e, classList);
        statement += result ? result : '';
      });
    });

    // <html>

    // Array.prototype.forEach.call($el.querySelectorAll('[class],[acss-class]'), (e) => {
    Array.prototype.forEach.call($el.querySelectorAll('[class]'), (e) => {
      const result = this.compileElement(e, classList);
      statement += result ? result : '';
    });

    return statement;
  },
  run(el: HTMLElement) {
    //  const event = new Event('acss:init');

    const $root = el || document;

    //  $root.dispatchEvent(event);
    $root.dispatchEvent(new CustomEvent('acss:init', { bubbles: true , detail:{aliascss:this}}));

    // <template> element
    Array.prototype.forEach.call($root.querySelectorAll('template'), (template) => {
      // Array.prototype.forEach.call(template.content.querySelectorAll('[class],[acss-class]'), (e) => {
      Array.prototype.forEach.call(template.content.querySelectorAll('[class]'), (e) => {
        this.print(e);
      });
    });

    // <html>

    // Array.prototype.forEach.call($root.querySelectorAll('[class],[acss-class]'), (e) => {
    Array.prototype.forEach.call($root.querySelectorAll('[class]'), (e) => {
      this.print(e);
    });
  },
};
