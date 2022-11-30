
import {statementMaker}  from "./src/statementMaker.js";
import fg from 'fast-glob';
import fs from 'fs';
import path from 'path';



// export let acssCompiler={
export default {
    styleInline(classnames){ //return String
        return statementMaker.groupForStyle(classnames);

    },
    styleJs(classNames){ //return Object
        return statementMaker.groupForJs(classnames);
    },

    //extract class="dn fs12pc" and acss="" acss-group or className=""
    newRegex:/[\s](acss-)?class(Name)?=['|"]([\w-_\s]+)['|"]([\s]acss-group=['|"][\s]*([\w-_]+)[\s]*['|"])?/,
    newRegexGlobal:/[\s](acss-)?class(Name)?=['|"]([\w-_\s]+)['|"]([\s]acss-group=['|"][\s]*([\w-_]+)[\s]*['|"])?/g,

  //it will hold all the classname list that had been alreay compiled
  classList: [],
  //it hold he group and their classnames
  groups: {},
  //compiles and return statemnt i.e .class{property:value}
  statementMaker: statementMaker,
  //intialize input and out put
  input:null,
  output:null,

//   -----------------------------Core Functions
// extract classnames and assoicated group if avialable return [[classnamesList],{group}] wherer group 'groupname':'classnames
extractClassName(file){
    let data = fs.readFileSync(file, "utf-8");
    let classList = [];
    let groups = {};

    //step 1: find class="" acss-group=""
    let matched = data.match(this.newRegexGlobal);

    if (matched === null) return [[], {}];

    matched.forEach((match) => {
      let extraction = match.match(this.newRegex);
      let classNames = extraction[3];
      let group = extraction[5];

      if (group) {
        if (
          this.groups.hasOwnProperty(group) &&
          this.groups[group] == classNames
        ) {
          //do nothing
        } else {
          this.groups[group] = classNames;
          groups[group] = classNames;
        }
      }

      classNames.split(/\s+/).forEach((e) => {
        if (this.classList.indexOf(e) === -1) {
          this.classList.push(e);
          classList.push(e);
        }
      });
    });

    return [classList.sort(), groups];
},
//--------------Main----------------------
  //compiles given file and return css statement
  compile(file) {
    let compileStatement = "";
    let that = this;
    const [classList, groups] = this.extractClassName(file);

    if (classList.length) {
      // compileStatement=`\n/* AliasCSS : These are classnames compiled  from ${path.basename(file)}*/\n\n`,
      classList.forEach((e) => {
        let statement=this.statementMaker.make(e);
        if (statement ) {
          console.log("\x1b[32m", statement);

          compileStatement += statement + "\n";
        }
      });
    }
    for (let key in groups) {
      let gpStatement = this.statementMaker.group(groups[key], key);
      compileStatement += gpStatement + "\n";
    }
    return compileStatement;
  },
  //----------------------------------------------------------
  //Process Folder if input is folder
  processFolder (folder) {
    const files = fs.readdirSync(folder);

    files.forEach((file) => {
      const filepath = path.join(folder, file);

      fs.stat(filepath, (err, stats) => {
        if (err) throw err;
        if (stats.isDirectory()) {
          this.processFolder(filepath);
        } else if (stats.isFile()) {
          this.writeToFile(filepath);
        }
      });
    });
  },
  //----------------------------------------------------------
  //write css statement to css file
  writeToFile(file) {
    let compileStatement = null;

    // if(!path.extname(file).match(this.test)) return ;

    if ((compileStatement = this.compile(file)) === null) return;

    if (compileStatement === null || !compileStatement) return false;

    try {
      fs.appendFileSync(
        this.output,
        `\n/* AliasCSS : These are classnames compiled  from ${path.basename(
          file
        )}*/\n\n` + compileStatement
      );
      console.log("Successfully  compiled acss from " + file);
    } catch (err) {
      console.log(
        "\x1b[31m",
        "Couldn't able to append compiled acss from " + file
      );
      console.log(err);
    }
  },
  //for config.js file
  writeStatementToFile: function (content) {
    try {
      //----------append or not------

      fs.appendFileSync(
        this.output,
        `\n/* AliasCSS : These are classnames compiled group in config.js file}*/\n\n` +
          content
      );
      console.log("Successfully  compiled acss for  group of config.js");
    } catch (err) {
      console.log(
        "\x1b[31m",
        "Couldn't able to append compiled acss from  group from config.js "
      );
      console.log(err);
    }
  },
  //
  //--------------------RUN---------------------
  //
  run: function (input, output) {
    
    if (this.input && this.output) {
      this.input = fg.sync(this.input, { dot: true });
      if (this.input.length == 0) {
        console.error(
          "Not a Valid input: No files found wtih the given input: Please Check your input @congif file"
        );
        return;
      }
      //case 1: if its array
      if (Array.isArray(this.input)) {
        this.input.forEach((entry) => {
          fs.stat(entry, (err, stats) => {
            if (err) throw err;

            if (stats.isDirectory()) {
              this.processFolder(entry);
              return;
            }
            if (stats.isFile()) {
              this.writeToFile(entry);
              return;
            }
          });
        });

        return;
      }

      //case @: file or folder
      // if(fs.existsSync(this.input)) //console.log('file yes');
      fs.stat(this.input, (err, stats) => {
        if (err) throw err;

        if (stats.isDirectory()) {
          this.processFolder(this.input);
          return;
        }
        if (stats.isFile()) {
          this.writeToFile(this.input);
          return;
        }
      });
    } else {
      console.error("\x1b[31m", "Please provide, entry or/and output file/s");
    }
  },//EORUN
//   ----------------WATCH-------------------------------
 watch() {
    console.log("\x1b[37m", "Files are being Watched!");
    if (Array.isArray(this.input)) {
      this.input.forEach((entry) => {
        fs.watch(entry, (eventType, filename) => {
          if (filename) {
            console.log(`--processing file : ${filename}`);
            this.run();
            // console.log('Done! ');
          } else {
            console.log("\x1b[31m", "filename not provided");
          }
        });
      });
    } else {
      fs.watch(this.input, (eventType, filename) => {
        if (filename) {
          console.log(`--processing file : ${filename}`);
          this.run();
          // console.log('Done! ');
        } else {
          console.log("\x1b[31m", "filename not provided");
        }
      });
    }
  },//EOWATCH
  

}