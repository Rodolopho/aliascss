import shadow from './shadow.js';

type Custom = { [key: string]: { [key: string]: string } };

export default function filter(valuePortion: string, custom: Custom) {
  let compileValue='';
  const matchRegEx=/^[-]?([a-zA-Z]+([-][\w]+)?)(?=[-])/;
  valuePortion.split(/__/).forEach((each)=>{
      let [fn,value]=['',''];
      // css-var
      if(each.match(/--[a-zA-Z]/)){
        const [functionPortion,functionValuePortion]:[string,string]=[each.split(/--/)[0]?.replace(/^-/,''),each.split(/--/)[1]];
      
        if(funcAlias.hasOwnProperty(functionPortion)){

           compileValue+=`${functionPortion}(var(--${functionValuePortion})) `
           return
        }
      }

      const extractFnV = each.match(matchRegEx);

      if(extractFnV){
        if(funcAlias.hasOwnProperty(extractFnV[1])){
          fn=funcAlias[extractFnV[1]];
        }

        if(fn==='drop-shadow'){
          value=shadow(each.replace(matchRegEx,''),custom) 
          value=value?value:''
        }else{
          value=each.replace(matchRegEx,'').replace(/-(-)?/g,'$1').replace(/p$/, '%').replace(/(?<=[0-9])[d](?=[0-9])/, '.');
        }
      }

      compileValue+= `${fn}(${value}) `;




  })

  return compileValue.replace(/[\s]$/, '');
}

const funcAlias: { [key: string]: string } = {
  b: 'blur',
  blur: 'blur',
  br: 'brightness',
  brightness: 'brightness',
  'drop-shadow': 'drop-shadow',
  ds: 'drop-shadow',
  c: 'contrast',
  contrast: 'contrast',
  g: 'grayscale',
  grayscale: 'grayscale',
  hr: 'hue-rotate',
  'hue-rotate': 'hue-rotate',
  i: 'invert',
  invert: 'invert',
  o: 'opacity',
  opacity: 'opacity',
  saturate: 'saturate',
  s: 'saturate',
  se: 'sepia',
  sepia: 'sepia',
};
