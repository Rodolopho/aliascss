export default (value:string) => {
    // Remove - before value
    value=value.replace(/^-/,'');
    // initialize compilerValue

    let compileValue='';
    // check for multiple value

    value.split(/__(?=[a-z])/).forEach((e)=>{
        // extract function
        const result=transformEach(e);

        if(result) compileValue+= result +" ";

    })

    if(compileValue.trim()) return compileValue.trim();

}
function transformEach(data: string) {
    if(data.match(/--[a-z]/)){
        const [func, cssVar]=data.split('--');
        if(tfAlias.hasOwnProperty(func)) return `${tfAlias[func]}(var(--${cssVar}))`
        return ;
        
    }
  const match = /([a-zA-z]+(3d)?)(([-]?[-]?[0-9]+[d]?[0-9]*[a-z]*))+/;
  const exfunc = data.match(match);
  let func = null;
  if (exfunc) {
    func = exfunc[1];
  }
  if (!func) return;
  let statement = '';
  if (tfAlias.hasOwnProperty(func)) {
    statement += tfAlias[func] + '(';
    statement +=
      data
        .replace(func, '').replace(/--/g,'-Minus').replace(/^-/,'')
        .replace(/-/g, ', ').replace(/Minus/g,'-')
        .replace(/(?<=[0-9])[d](?=[0-9])/g, '.')
        .replace(/(?<=[0-9])[p](?=[\s|,])/g, '%')
        .replace(/p$/, '%') + ')';
    return statement;
  } else {
    return null;
  }
}

const tfAlias: { [key: string]: string } = {
  m: 'matrix',
  matrix: 'matrix',
  t: 'translate',
  translate: 'translate',
  tx: 'translateX',
  translateX: 'translateX',
  ty: 'translateY',
  translateY: 'translateY',
  s: 'scale',
  scale: 'scale',
  sx: 'scaleX',
  scaleX: 'scaleX',
  sy: 'scaleY',
  scaleY: 'scaleY',
  r: 'rotate',
  rotate: 'rotate',
  sk: 'skew',
  skew: 'skew',
  skx: 'skewX',
  skewX: 'skewX',
  sky: 'skewY',
  skewY: 'skewY',
  m3d: 'matrix3d',
  matrix3d: 'matrix3d',
  t3d: 'translate3d',
  translate3d: 'translate3d',
  tz: 'translateZ',
  translateZ: 'translateZ',
  s3d: 'scale3d',
  scale3d: 'scale3d',
  sz: 'scaleZ',
  scaleZ: 'scaleZ',
  r3d: 'rotate3d',
  rotate3d: 'rotate3d',
  rx: 'rotateX',
  rotateX: 'rotateX',
  ry: 'rotateY',
  rotateY: 'rotateY',
  rz: 'rotateZ',
  rotateZ: 'rotateZ',
  p: 'perspective',
  perspective: 'perspective',
};


/* Function values */
const ref=`transform-matrix-1-2-3-4-5-6
transform-matrix3d-1-0-0-0-0-1-0-0-0-0-1-0-0-0-0-1
transform-perspective-17px
transform-rotate-0.5turn
transform-rotate3d-1-2-3-10deg
transform-rotateX-10deg
transform-rotateY-10deg
transform-rotateZ-10deg
transform-translate-12px-50%
transform-translate3d-12px-50%-3em
transform-translateX-2em
transform-translateY-3in
transform-translateZ-2px
transform-scale-2-0.5
transform-scale3d-2.5-1.2-0.3
transform-scaleX-2
transform-scaleY-0.5
transform-scaleZ-0.3
transform-skew-30deg-20deg
transform-skewX-30deg
transform-skewY-1.07rad

/* Multiple function values */
transform-translateX-10px--rotate-10deg--translateY-5px
transform-perspective-500px--translate-10px-0-20px--rotateY-3deg
`
