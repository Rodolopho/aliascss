export default function animation(data) {}
let alias = {
  bw: "backwards",
  bo: "both",
  fw: "forwards",
  ar: "alternative-reverse",
  nl: "normal",
  re: "reverse",
  al: "alternative",
  i: "infinitive",
};

// animationProcessor:function(each){

// 			var name="",du="",dl="",direction="",playstate="",aic="",fillmode="",atf="";
// 			var matchName=/^an_([A-Za-z0-9]+)[-|_]?/;
// 			name=each.match(matchName)[1];
// 			each=each.replace("an_"+name,"");
// 			var evaluateObj={fillmode:{bw:"backwards",bo:"both",fw:"forwards"},
// 							  direction:{ar:"alternative-reverse",nl:"normal",re:"reverse",al:"alternative"}
// 								};
// 			if(each.match(/[-|_](bw|bo|fw)/)){fillmode=evaluateObj.fillmode[each.match(/[-|_](bw|bo|fw)/)[1]];}
// 			if(each.match(/[-|_](ar|nl|re|al)/)){ direction=evaluateObj.direction[each.match(/[-|_](ar|nl|re|al)/)[1]];}
// 			//if(each.match(/[-|_](cb[0-9]+[d]?[0-9][-]?+))
// 			//var atf=this.animation_transition_tf(each);

// 			var time=(this.angleTimeFrequencyResolutionProcessor(each))?this.angleTimeFrequencyResolutionProcessor(each).replace(/-/g,"").trim().split(" "):"";
// 			if(time[0]){du=time[0];}
// 			if(time[1]){dl=time[1];}
// 			if(each.match(/[-|_][r|p]$/)){playstate=(each.match(/r$/))?"running":"paused";
// 			}
// 			if(each.match(/c[0-9|i]+/)){aic=(each.match(/c([0-9]+)/))?each.match(/c([0-9]+)/)[1]:"infinite";}

// 			return name+" "+du+" "+atf+" "+dl+" "+aic+" "+direction+" "+fillmode+" "+playstate;
// 		},
