export default function angleTimeFrequencyResolution(data) {
  return data.replace(/([0-9])[d]([0-9])/, "$1.$2");
}
// angleTimeFrequencyResolutionProcessor:function(each){
// 			///deg| grad| rad| turn| dpi| dpcm| dppxHz| kHz|s|ms/;
// 			var matchitonly=/[-]?[0-9]+[d]?[0-9]*(deg|grad|rad|turn|dpi|dpcm|dppx|Hz|hz|kHz|khz|s|ms)/g;
// 			var lengthArray=each.match(matchitonly);
// 			if(!lengthArray){return false;}
// 			var lengthString=lengthArray.toString();

// 			var valueescapedecimal=lengthString.replace(/([0-9])[d]([0-9])/g,"$1.$2");
// 			return valueescapedecimal.replace(/[,]/g," ");
// 		},
