import extractClassNamesFromFile from "./extractClassNamesFromFile.js";
import { compiler as statementMaker} from "../returnStatement.js";
import config from '../config.js'
import fs from "fs";
import fg from "fast-glob";
import path from 'path';
import postcss from 'postcss';
import postcssDiscardDuplicates from 'postcss-discard-duplicates';
import cssnano from 'cssnano';
import chokidar from 'chokidar';

const init={
    classList:[], // hold className for MasterCSS to avoid repeating
    groups:[],
    input:'', // input glob pattern 
    output:'', // location off output
    '--file':false, // if set true compileFileByFile to [filename].css
    statementMaker,
    config,
    '--module':false,
    rawCSS:'',
    customGroupStatement:'',
    minify:false,
    globPattern:'',// Use this to check valid new created file to add to watch during watch.on

}

export default function main(config:{['input']:string|string[],[key:string]:any}){
    // initialize 
    initialize(config);
    if(init.config.prefix) init.statementMaker.prefix=init.config.prefix;

    if(init.input && (init.output || init['--file'])){
    
     const input=fg.sync(init.input, { dot: true })
     // console.log(input);
     input.forEach((file)=>{
        createCSSFileByFile(file);
     })
     postify(init.output,[postcssDiscardDuplicates],init.minify);
    }else{
        console.error("Please Provide input, output or set '--file' to true");
    }

}

export  function globalCSSCompiler(){
      const classList:string[]=[];
    if(init.globPattern && init.output){
      fs.truncateSync(init.output);
    
     const input=fg.sync(init.globPattern, { dot: true })
     // console.log(input);
     input.forEach((file)=>{
        const [gbContent,] =compileFile(file,config,statementMaker,classList);
        try {
        fs.writeFileSync(
            init.output,

            `\n/* Start :-----------ACSS ${path.basename(file)}------------------------*/\n${
            gbContent
            }
            \n/* End :-----------ACSS ${path.basename(file)}----------------------------*/\n
            `,
            {flag:'a+'}
            );
        console.log('AliasCSS compiled', path.basename(file), 'to main css file :'+init.output);
      } catch (error) {
        console.log('\x1b[31m', "Couldn't able to append/create to main css file :"+init.output);
        console.log(error);
      }
     })

     postify(init.output,[postcssDiscardDuplicates],init.minify);

    }else{
        console.error("Please Provide input, output or set '--file' to true");
    }

}

export function compileFile(file:string,config:any,statementMaker:{['make']:(a:string)=>string,group:(a:string,b:string)=>string},globalClassList:string[],){
    let [globalStatement,compiledStatement,moduleStatement]=['','',''];
    const [classList,groups,keyframe]= extractClassNamesFromFile(file,config)
    


    // 2. group
     for (const key in groups) {

            if(groups.hasOwnProperty(key)){
              // --------------ModuleStatement
              if(/^module=/.test(key)){

                const mdStatement =statementMaker.group(groups[key], key.replace(/module=/,''));

                moduleStatement += mdStatement + '\n';
                
              }
              // -------------EndOfModule

              else{
                const gpStatement =statementMaker.group(groups[key], key);

                globalStatement += gpStatement + '\n';
                
                compiledStatement += gpStatement + '\n';
              }
                
            }
        }
    // 2. ClassList
    classList.forEach((e: string) => {
        const statement = statementMaker.make(e);
        if (statement) {
          console.log('\x1b[32m', statement);
          if (globalClassList.indexOf(e) === -1) {
            globalStatement += statement + '\n';
            globalClassList.push(e);
            // console.log(e);
          }
          compiledStatement += statement + '\n';
        }
      });

    // 3. Keyframe 
        for (const key in keyframe) {
            if (keyframe.hasOwnProperty(key)) {
                const kfStatement=keyframesStatement(key,keyframe[key],statementMaker)
                 globalStatement += kfStatement + '\n';
                
                compiledStatement += kfStatement + '\n';
            }
        }

        return [globalStatement,compiledStatement,moduleStatement];
    
}

export function groupStatement(name:string,classNames:string,statementMaker:{['group']:(a:string,b:string)=>string}){
        return statementMaker.group(classNames, name) + '\n';
}

export function keyframesStatement(name:string,timeLine:string,statementMaker:{['make']:(a:string,b?:string|null,c?:boolean)=>string}){
        let kfStatement='@keyframes '+ name +"{\n";
        const split=timeLine.split(/\s+/);
        split.forEach((each:string) => {
          try {
            const[at,pNv]=each.replace("-","=").split("=");
            kfStatement+=` ${at.replace('@','').replace(/:/g,',').replace(/,/g,"%,").replace(/[\[|\]]/g,'')}% {${statementMaker.make(pNv,null,true)}}`    
          } catch (error) {
            console.error('Not a valid entry for AliasCSS keyframes processor : '+each, error)
          }
          
        });
        return kfStatement+"\n}\n";

}

export function createCSSFileByFile(file:string,bool:boolean=false){
    const [gbContent, content,module] =compileFile(file,config,statementMaker,init.classList);
    // console.log(init.classList);


    // If its fileByFile 
    if(init["--module"] && module.trim()){
        try {
                fs.writeFileSync(file+'.module.css',module);
                // console.log(content);
                console.log('AliasCSS compiled', path.basename(file), 'module Locally ');
            } catch (error) {
                console.log('\x1b[31m', "Couldn't able to append/create locally from " + file);
                console.log(error);
            }
    }
    if(init["--file"]){
        try {
                fs.writeFileSync(file+'.css',content);
                // console.log(content);
                console.log('AliasCSS compiled', path.basename(file), 'Locally');
            } catch (error) {
                console.log('\x1b[31m', "Couldn't able to append/create locally from " + file);
                console.log(error);
            }
    }
    
    // Check for Global
      if( !bool && init.output){
        try {
        fs.writeFileSync(
            init.output,

            `\n/* Start :-----------ACSS ${path.basename(file)}------------------------*/\n${
            postcss([postcssDiscardDuplicates]).process(gbContent)
            }
            \n/* End :-----------ACSS ${path.basename(file)}----------------------------*/\n
            `,
            {flag:'a+'}
            );
        console.log('AliasCSS compiled', path.basename(file), 'to main css file :'+init.output);
      } catch (error) {
        console.log('\x1b[31m', "Couldn't able to append/create to main css file :"+init.output);
        console.log(error);
      }
      }

}

export function postify(file:string,plugin:any[],minify:boolean=false){
    const data = fs.readFileSync(file, 'utf-8');
    if(fs.existsSync(file)){
        if(minify===true) plugin.push(cssnano)
        postcss(plugin).process(data).then(
            result=>{
                fs.truncateSync(file);
                fs.writeFileSync(file,result.css);
            }
        )
    }
   
//     fs.readFile(file, (err, css) => {
//   postcss(plugin)
//     .process(css, { from: file, to: file+"post.css" })
//     .then(result => {
//       fs.writeFile(file+"post.css", result.css, () => true)
//     //   if ( result.map ) {
//     //     fs.writeFile(file+'.map', result.map.toString(), () => true)
//     //   }
//     })
// })
}



export function writeStatementToFile(file:string,content:string){
      // Check for Global
      if(init.output){
        try {
        fs.writeFileSync(
            init.output,

            `\n/* Start :-----------ACSS:From aliasCSSConfig.statement------------------------*/\n${content}
            \n/* End :-----------ACSS aliasCSSConfig.statement----------------------------*/\n
            `,
            {flag:'a+'}
            );
        console.log('AliasCSS compiled', '[aliasCSSConfig.statement]', 'aliascss.config.js');
      } catch (error) {
        console.log('\x1b[31m', "Couldn't able to append/create [key:statement] from alias.config.js  " );
        console.log(error);
      }
      }
    
}

// Initialize 
export function initialize(configFile: { [key: string]: any }) {

    // ----------------input-------------------
    if (configFile.hasOwnProperty('input')) {
      init.input = configFile.input;
      init.globPattern=configFile.input;
    }

    // ----------------Prefix-------------------
    if (configFile.hasOwnProperty('prefix')) {
      init.config.prefix = configFile.prefix;
    }

    // ----------------output-------------------
    if (configFile.hasOwnProperty('output')) {
      const op=configFile.output;
      if(op.hasOwnProperty('location')){
        init.output = op.location;
      }
      if(op.hasOwnProperty('--file') && op['--file']===true ){
        init["--file"]=true;
      }
      
    }
    // --module
    if (configFile.hasOwnProperty('--module') && configFile.hasOwnProperty('importModuleAs') ){
      init["--module"]=true; 
      init.config.useCSSModule = init["--module"]?true:false;
      if(init.config.useCSSModule) init.config.matchCSSModuleFunction=init.config.createCSSModuleRegex(configFile.importModuleAs);  
    } 
    // ---------output Minify
    if (configFile.hasOwnProperty('minify')) {
      init.minify = configFile.minify;
    }

    // ------------Extractor function-------
    if (configFile.hasOwnProperty('extractorFunction')) {
      init.config.useExtractorFunction = configFile.extractorFunction.trim()?true:false;
      if(init.config.useExtractorFunction) init.config.matchExtractorFunction=init.config.createExtractorRegex(configFile.extractorFunction);
    }

    // ---------Extend----------------
    if(configFile.hasOwnProperty('extend') && typeof configFile.extend === 'object'){

      const filteredObj:{[key:string]:{}}={};

      Object.keys(configFile.extend).map((key)=>{
          // if (configFile.extend[key].hasOwnProperty('compiler') && (typeof configFile.extend[key].compiler === 'function')){
            filteredObj[key]=configFile.extend[key];
          // }
      })
      init.statementMaker.extend(filteredObj);
      
    }
// -----------------useColon----------------------------
    if(configFile.hasOwnProperty('useColon')){
        init.config.useColon=configFile.useColon;
    }


    // ---------------addMedia----------------
    if (configFile.hasOwnProperty('media') && typeof configFile.media === 'object') {
      init.statementMaker.addMedia(configFile.media);
    }
    //  /Truncate File every time we bundle
    if (configFile.hasOwnProperty('truncate') && configFile.truncate === false) {
      // do nothing
    } else{
        if(fs.existsSync(init.output)) fs.truncateSync(path.resolve(init.output));
    }
    // Custom CSS statement
    if (configFile.hasOwnProperty('statement')) {
      init.rawCSS = configFile.statement;
      writeStatementToFile(init.output,configFile.statement);
    }
    // Custom Groups bundling acss classnames in single class name
    if (configFile.hasOwnProperty('group')) {
      init.customGroupStatement = init.statementMaker.groupObj(configFile.group);
      if (init.customGroupStatement) writeStatementToFile(init.output,init.customGroupStatement);
    }
    // Adding Custom color, length etc
    if (configFile.hasOwnProperty('custom') && typeof configFile.custom === 'object') {
      Object.keys(configFile.custom).forEach((key) => {
        init.statementMaker.addCustom(key, configFile.custom[key]);
      });
    }
    // Extend custom class name define {'border-color-native":'border-color: skyBlue',}
    if (configFile.hasOwnProperty('prebuild')) {
      init.statementMaker.prebuild(configFile.prebuild);
    }

    // Ignore these class name
    if (configFile.hasOwnProperty('ignore')) {
      if (Array.isArray(configFile.ignore)) {
        configFile.ignore.forEach((each: string) => init.config.ignore.push(each.trim()));
      }
    }
  }

   //    ----------------WATCH-------------------------------
  export function watch(config:{['input']:string|string[],[key:string]:any}){

    main(config);
    const watcher = chokidar.watch(init.input, {
      ignored: '*.css', // ignore dot-files
      persistent: true
    });
      const compileFile=(file:any)=>{
        console.log(`--processing file : ${file}`);
        createCSSFileByFile(file,true);
        globalCSSCompiler();
        postify(init.output,[postcssDiscardDuplicates],init.minify);
        console.log('Done! ');
      }


   // Something to use when events are received.
  const log = console.log.bind(console);
// Add event listeners.
watcher
  .on('add', path => log(`File ${path} has been added to watch`))
  .on('change', path => compileFile(path))
  // .on('unlink', path => log(`File ${path} has been removed`));

// More possible events.
watcher
  .on('addDir', path => log(`Directory ${path} has been added`))
  .on('unlinkDir', path => log(`Directory ${path} has been removed`))
  // .on('error', error => log(`Watcher error: ${error}`))
  // .on('ready', () => log('Initial scan complete. Ready for changes'))
  .on('raw', (event, path, details) => { // internal
    // log('Raw event info:', event, path, details);
    if(event==='created' && details.type==='file'){
      if(init.globPattern){
         const files=fg.sync(init.globPattern,{absolute:true});
         if(files.indexOf(path)!==-1){
            watcher.add(path);
            console.log(path,123123);
         }
      }else{
        watcher.add(path);
      }
    }
  });

  }