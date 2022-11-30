export default function transform(data) {
  data = data.replace(/^-/, "");
  let statement = "";
  data.split(/--/).forEach((e) => {
    if (e) {
      let result = transformEach(e);
      if (result) statement += result + " ";
    }
  });

  if (statement) return statement;
  return null;
  // let match=/([a-zA-z]+(3d)?)(([-]?[0-9]+[d]?[0-9]*[a-z]*))+/;
  // let func=data.match(match)[1];
  // let statement="";
  // if(tfAlias.hasOwnProperty(func)){
  // 	statement+=tfAlias[func]+"(";
  // 	statement+= data.replace(func,"").replace(/_/g,", ").replace(/(?<=[0-9])[d](?=[0-9])/g,".").replace(/(?<=[0-9])[p](?=[\s|,])/g,"%").replace(/p$/,"%")+")";
  // 	return statement;
  // }
}
function transformEach(data) {
  console.log("transform:", data);

  let match = /([a-zA-z]+(3d)?)(([-]?[0-9]+[d]?[0-9]*[a-z]*))+/;
  let func = data.match(match)[1];
  let statement = "";
  if (tfAlias.hasOwnProperty(func)) {
    statement += tfAlias[func] + "(";
    statement +=
      data
        .replace(func, "")
        .replace(/_/g, ", ")
        .replace(/(?<=[0-9])[d](?=[0-9])/g, ".")
        .replace(/(?<=[0-9])[p](?=[\s|,])/g, "%")
        .replace(/p$/, "%") + ")";
    return statement;
  } else {
    return null;
  }
}

let tfAlias = {
  m: "matrix",
  matrix: "matrix",
  t: "translate",
  translate: "translate",
  tx: "translateX",
  translateX: "translateX",
  ty: "translateY",
  translateY: "translateY",
  s: "scale",
  scale: "scale",
  sx: "scaleX",
  scaleX: "scaleX",
  sy: "scaleY",
  scaleY: "scaleY",
  r: "rotate",
  rotate: "rotate",
  sk: "skew",
  skew: "skew",
  skx: "skewX",
  skewX: "skewX",
  sky: "skewY",
  skewY: "skewY",
  m3d: "matrix3d",
  matrix3d: "matrix3d",
  t3d: "translate3d",
  translate3d: "translate3d",
  tz: "translateZ",
  translateZ: "translateZ",
  s3d: "scale3d",
  scale3d: "scale3d",
  sz: "scaleZ",
  scaleZ: "scaleZ",
  r3d: "rotate3d",
  rotate3d: "rotate3d",
  rx: "rotateX",
  rotateX: "rotateX",
  ry: "rotateY",
  rotateY: "rotateY",
  rz: "rotateZ",
  rotateZ: "rotateZ",
  p: "perspective",
  perspective: "perspective",
};

// transformProcessor:function(each){
// 			var each=each.replace("tf","");
// 			var tfAlias={
// 				 m: "matrix",t: "translate" ,tx: "translateX",ty: "translateY",s: "scale" ,sx: "scaleX",
// 				 sy: "scaleY",r: "rotate",skx: "skewX",sky: "skewY",m3d: "matrix3d",t3d: "translate3d",
// 				 tz: "translateZ",s3d: "scale3d",sz: "scaleZ",r3d: "rotate3d",rx: "rotateX",ry: "rotateY",
// 				 rz: "rotateZ",p: "perspective",};
// 			var tfFunc="";
// 			var value="";
// 			(function(){
// 			var mLen=each.match(/^(tx|ty|tz|t3d|t|p)[-]?[0-9]/);
// 			if(mLen){tfFunc=tfAlias[mLen[1]];value=compiler.lengthProcessor(each).replace(/[ ]/g,","); return true;}

// 			var mNum=each.match(/^(m3d|m|sx|sy|sz|s3d|s|r3d)[-]?[0-9]/);
// 			if(mNum){
// 				tfFunc=tfAlias[mNum[1]];
// 				eeach=each.replace(/m3d|s3d|r3d/,"");
// 				if(eeach.match(/_/)){eeach=each.replace(/[_]/g,"px"); }
// 				eeach=eeach.concat("px");
// 				if(compiler.lengthProcessor(eeach)){value=compiler.lengthProcessor(eeach).replace(/px/g,",");}
// 				var a ="";
// 				if(each.match(/r3d/) && compiler.angleTimeFrequencyResolutionProcessor(eeach)){a=","+compiler.angleTimeFrequencyResolutionProcessor(eeach);};
// 				value=value.replace(/[,]$/,"")+a;
// 			 return true;
// 	        }
// 	        var mAng=each.match(/^(rx|ry|rz|r|sky|skx)[-]?[0-9]/);
// 			if(mAng){tfFunc=tfAlias[mAng[1]];value=compiler.angleTimeFrequencyResolutionProcessor(each); return true;}
// 			})();
// 			var tfValue=tfFunc+"("+value+")";
// 			return tfValue;
// 		},
