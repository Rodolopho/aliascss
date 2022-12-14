import propertyAndValue from "./provertyAndValue.js";
export default function keyframes(data,custom) {
  let statement="{\n";
  let section =data.split('__');

  section.forEach((each,i)=>{
      let result=eachSection(each,i+1,section.length,custom);
      if(result){
        statement+=result;
      }else{
        console.log("Invalid Section:"+each+" @keyframes:"+data);
      }
  });

  return statement + "}";
}

  function eachSection(eachPart,index,totalLength,custom){
    let time;
    if(/^[0-9][0-9|d|p]*[0-9]?[p]/.test(eachPart)){
      let extractTime=eachPart.match(/^[0-9][0-9|d|p]*[0-9]?[p]/)[0];
      time=extractTime.replace(/p/g, "% ,").replace(/[,]$/, "").replace('d',".");
      eachPart=eachPart.replace(extractTime+'-',"");

    }else if(index==totalLength){
      time="100%";
    }else if(index==1){
      time='0%';
    }else{
      console.log('Provide percentage information in your animation keyframes: '+eachPart);
      return false;
    }

    let statement="{"

  let eachPnv=eachPart.split('---');
    eachPnv.forEach(e => {
        let pnv=propertyAndValue(e,custom);
        if(pnv){
          statement=statement+ pnv +";";
        }else{
          console.log("cannot find property and value for :"+e +"@keyframe:"+eachPart);
        }
    });

    return time +" "+ statement + "}\n ";
  }

function at(data, propertyValue, custom) {
  if (!data.match(/^(from|to|[0-9]+[p])/)) return false;
  let statement = "";
  let when = data.match(/^(from|to|[0-9p]+[p])/)[0];
  data = data.replace(when + "-", "");
  data.split("---").forEach((e) => {
    let pnv = propertyValue(e, custom);
    if (pnv) statement += "\n\t\t" + pnv + ";";
  });

  if (statement)
    return (
      when.replace(/p/g, "% ,").replace(/[,]$/, "") +
      "{\n" +
      statement +
      "\n\t}\n"
    );
  return false;
}

// keyframes-name__from-propertyvalue---propertyvalue__to
// keyframes-name__0px-
// keyframes-name__0p10p50p-

// @keyframes bouncing {
//     0%, 50%, 100% { /* OR from, 50%, to */
//         top: 0;
//     }
//     25%, 75% {
//         top: 100px;
//     }
// }

// keyframes-bouncing-0p50p100p-t0p
// @keyframes bouncing {
//     0% {
//         top: 0;
//     }
//     25% {
//         top: 100px;
//     }
//     50% {
//         top: 0;
//     }
//     75% {
//         top: 100px;
//     }
//     100% {
//         top: 0;
//     }
// }

// @keyframes jump {
//     0% {
//         left: 0; top: 0;
//     }
//     50% {
//         left: 200px; top: -200px;
//     }
//     100% {
//         left: 400px; top: 0;
//     }
// }

// @keyframes bounce {
//   from {
//     top: 100px;
//     animation-timing-function: ease-out;
//   }
//   25% {
//     top: 50px;
//     animation-timing-function: ease-in;
//   }
//   50% {
//     top: 150px;
//     animation-timing-function: ease-out;
//   }
//   75% {
//     top: 75px;
//     animation-timing-function: ease-in;
//   }
//   to {
//     top: 100px;
//   }
// }

// @keyframes fall {
//     from {
//         transform: rotate(0) translateX(0);
//         opacity: 1;
//     }
//     /* ... */
//     to {
//         transform: rotate(90deg) translateX(200px);
//         opacity: 0;
//     }
// }
