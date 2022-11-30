export default function timingFunction(data) {
  let holder = "";
  let cbm = /(cubic-bezier|cb)[-_]?(([0-9][d]?[0-9]*[-|_]?){4})/;
  if (cbm.test(data)) {
    let fData = cbm.exec(data)[2];
    return (
      "cubic-bezier(" + fData.replace(/[-_]/g, ",").replace(/d/g, ".") + " )"
    );
  } else if (
    /^(e|ease|l|linear|ei|ease-in|eo|ease-out|eio|ease-in-out|ss|step-start|se|step-end)$/.test(
      data
    )
  ) {
    return func[data];
  }
}
let func = {
  e: "ease",
  ease: "ease",
  linear: "linear",
  l: "linear",
  ei: "ease-in",
  "ease-in": "ease-in",
  eo: "ease-out",
  "ease-out": "ease-out",
  eio: "ease-in-out",
  "ease-in-out": "ease-in-out",
  ss: "step-start",
  "step-start": "step-start",
  se: "step-end",
  "step-end": "step-end",
};
// /(cubic-bezier[_-]?[0-9]|cb[-_]?[0-9]|e|ease|l|linear|ei|ease-in|eo|ease-out|eio|ease-in-out|ss|step-start|se|step-end)
// ///((cubic-bezier|cb)[-_]?(([0-9][d]?[0-9]*[-|_]?){4}))|(e|ease|l|linear|ei|ease-in|eo|ease-out|eio|ease-in-out|ss|step-start|se|step-end)
// animation_transition_tf:function(data){
// 	 		console.log(data);
// 			var func="";
// 			var N="";
// 			 var funcAlias={e:"ease",l:"linear",ei:"ease-in",eo:"ease-out",eio:"ease-in-out",ss:"step-start",se:"step-end"};
// 			 if(data.match(/cb[-]?[0-9]/)){
// 			 	if(data.match(/cb[-]/)){N="-"};
// 			 	var getN=data.match(/cb[-]?([0-9]+[d]?[0-9]*[-|_][-|_]?[0-9]+[d]?[0-9]*[-|_][-|_]?[0-9]+[d]?[0-9]*[-|_][-|_]?[0-9]+[d]?[0-9]*)/)[1];
// 			 		var value=getN.replace(/[-|_]([-]?)/g,",$1");
// 			 	value=value.replace(/d/g,".");
// 			 	func="cubic-bezeir("+N+value+")";
// 			 }else{

// 			 if(data.match(/[0-9]?[s|ms]?(e|l|ei|eo|eio|ss|se|s[0-9]+[s|e])/)){
// 			 	if(data.match(/s[0-9]+[s|e]/)){
// 			 		var se="";
// 			 		var eors=data.match(/s([0-9]+)([s|e])/);
// 			 			if(eors[2].match("s")){se="start";}else{se="end";}

// 			 		func="steps("+eors[1]+" ,"+ se+")";
// 			 	}else{
// 			 		func=data.match(/^(l|eo|eio|ss|se|ei|e)/)[1];
// 			 		func=funcAlias[func];
// 		    	}
// 		   	 }
// 			};
// 			return func;
// 		},
