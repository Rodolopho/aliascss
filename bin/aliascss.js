#!/usr/bin/env node
import path from 'path';
import fs from 'fs'
import  acssCompiler  from "../index.js";

//Case 1 node aliascss input output [--watch]
//Case 1 node aliascss --config [--watch]
//Check for Watch  and config
let argSupplied=process.argv;
let watch=argSupplied.indexOf('--watch')==-1?false:true;
let isConfigFile=argSupplied.indexOf('--config')==-1?false:true;
let isModule=argSupplied.indexOf('--module')==-1?false:true;
let configFileName='aliascss.config.js';

if(!isConfigFile && argSupplied.length<4){
    console.error("Insufficient argument Provided; Required atleast [input] and [output] or --config flag");
    process.exit();
} 
if(isModule){
    configFileName='aliascss.config.mjs';
}
if(isConfigFile && fs.existsSync(path.resolve(configFileName))){
    let configFile=await import(path.resolve(configFileName));
    //check if it has input and out file
    if(configFile.config.hasOwnProperty('output') && fs.existsSync(path.resolve(configFile.config.output))){

        //check for input in config file
        if(!configFile.config.input){
            console.error('No Input to Process : Povide input (glob-pattern) in input property of aliascss.config.js');
            process.exit();
        }
      //Truncate File everytime we bundle
        if (configFile.config.hasOwnProperty("truncate") && configFile.config.truncate === false) {
      //do nothing
        } else {
            fs.truncateSync(path.resolve(configFile.config.output));
        }

        //Initialize Compiler we config date
        acssCompiler.input=configFile.config.input;
        acssCompiler.output=configFile.config.output;
        //Inject Custom StyleSheet Statement
        if (configFile.config.hasOwnProperty("statement")) {
            acssCompiler.writeStatementToFile(configFile.config.statement);
        }
        //Ignore these classname 
        if (configFile.config.hasOwnProperty("ignore")) {
        if (Array.isArray(configFile.config.ignore)) {
                 configFile.config.ignore.forEach((each) =>
                    acssCompiler.classList.push(each.trim())
                    );
                 }
            // acssCompiler.statementMaker.ignore=config.ignore;
            }
         //Adding Custom color, lengh etc  
         if (configFile.config.hasOwnProperty("custom") && typeof configFile.config.custom == "object") {
            Object.keys(configFile.config.custom).forEach((key) => {
                acssCompiler.statementMaker.addCustom(key, configFile.config.custom[key]);
            });
            
            }
        //Extend custom classname defination {'border-color-native":'border-color: Skyblue',}
        if (configFile.config.hasOwnProperty("extend")) {
             acssCompiler.statementMaker.extend(configFile.config.extend);
            }  
        //Group classnames in single classname    
        if (configFile.config.hasOwnProperty("group")) {
            let content = acssCompiler.statementMaker.groupObj(configFile.config.group);
            if (content) acssCompiler.writeStatementToFile(content);
             
        }
            //Run the Compiler/Processor with config data
            acssCompiler.run();
            //watch for updates
            watch?acssCompiler.watch():null;

 }else{
    console.error('Please check  if there is output property in aliascss.config.js and it has valid path to the output file');
    process.exit();
}

}else if(isConfigFile){
    console.error('Makesure you have aliascss.config.js in your root directory');
    process.exit();
}else{
    let input=argSupplied[2];
    // console.log(argSupplied[2]);
    let output=argSupplied[3];
    if(fs.existsSync(path.resolve(output)) && input){

        acssCompiler.input=input;
        acssCompiler.output=output;
         console.log('AliasCSS is compiling............started')
        acssCompiler.run();
        // console.log(1234)
        if(watch){
             acssCompiler.append=true;
             acssCompiler.watch();
            }

    }else{
        console.error("Provide Valid Input or/and Output path");
        process.exit();
    }
}
//--------------------end of ifelse isConfigFile.......



