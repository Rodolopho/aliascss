import { staticClassNames } from "./static/staticClassNames.js";
// import {matcher} from "./matcher.js";
import valueCompiler from "./valueCompiler.js";
import { propertyAlias } from "./static/propertyAlias.js";
import { propertyAliasCompiler } from "./static/propertyAliasCompiler.js";
import { customStaticClassNames } from "./static/customStaticClassNames.js";
//---------------------------Notes-----------------------------------------------------------------
// Responsible for statisClassname retrival, customClassName, --var--variable, extract property name
//calls valueCompiler(valueportion), provide either empty custom or forward custom value 


export default function propertyAndValue(classname, custom, events) {
  // console.info("%c"+classname+":",'color:red')
  if (!custom) custom = {};

  // 1.STATICCLASSNAMES

  if (staticClassNames.hasOwnProperty(classname)) {
    return staticClassNames[classname];
  }

  //2.CustomStaticClassNAme

  if (customStaticClassNames.hasOwnProperty(classname)) {
    return customStaticClassNames[classname];
  }

  //3. CSS Variable Classname
  if (/--var--/.test(classname)) {
    let pnv = classname.split("--var--");
    let property = propertyAlias[pnv[0]];
    if (property) {
      return property + ": var(--" + pnv[1] + ")";
    } else {
      console.log("unable to retrieve property:" + pnv[0]);
      return null;
    }
  }

  //4. Dyanamic ClassName

  //----EXTRACT AND VALIDATE PROPERTYALIAS
  let extracttPossiblePropertyPortion = classname.match(/^[a-z-]+/);

  //Not a valid Acss classname
  if (!extracttPossiblePropertyPortion) return;

  let propertyPortion = extracttPossiblePropertyPortion[0]
    .replace(/-$/, "")
    .trim();

  // ---------------------------------------------
  //----Process Dyanamic Classnane-------------------
  //--------------------------------------------------

  //Step 1. Retrive propertyAlias and property

  let propertyHolder;

  //try to match whole portion with property alias
  if (propertyAlias.hasOwnProperty(propertyPortion)) {
    propertyHolder = propertyAlias[propertyPortion];
    // console.log(classname,0);
  } else {
    while (/[-][a-z]+$/.test(propertyPortion)) {
      propertyPortion = propertyPortion.replace(/[-][a-z]+$/, "");

      if (propertyAlias.hasOwnProperty(propertyPortion)) {
        propertyHolder = propertyAlias[propertyPortion];
        // console.log(classname,1);
        break;
      }

      // console.log(classname, 2);
    }
  }

  if (!propertyHolder) return;

  let propertyAliasDetails = propertyAliasCompiler[propertyHolder];

  //Step 2. Retrive Value

  let valueProtion = classname.replace(new RegExp("^" + propertyPortion), "");

   //console.log(classname,":" ,valueProtion,propertyAliasDetails);

  // return
  let value;

  value = valueCompiler(classname, propertyAliasDetails, valueProtion, custom);

  // return;
  //Step 3. Return properyAndValue

  if (value) {
    return propertyHolder + ":" + value;
  } else {
    console.log(
      "\x1b[35m",
      `Cannot find  value for classname: '${classname} @ ${propertyAliasDetails}' `
    );
    return null;
  }

  
} //
