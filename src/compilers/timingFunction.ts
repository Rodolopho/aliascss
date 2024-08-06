export default function timingFunction(data: string, custom: { [key: string]: { [key: string]: string } }) {
  data = data.replace(/^[-_]/, '');

  const func: { [key: string]: string } = {
  e: 'ease',
  ease: 'ease',
  linear: 'linear',
  l: 'linear',
  ei: 'ease-in',
  'ease-in': 'ease-in',
  eo: 'ease-out',
  'ease-out': 'ease-out',
  eio: 'ease-in-out',
  'ease-in-out': 'ease-in-out',
  ss: 'step-start',
  'step-start': 'step-start',
  se: 'step-end',
  'step-end': 'step-end',
};

        let result:string='';
        const test1=/(cubic-bezier|cb)(([-_][-]?[0-9][d]?[0-9]?){4})/;
        const test2=/(steps|s)[-_]([0-9]+)[-]((jump)?[-]?(start|end|none|both))/;
        data.split('__').forEach((e)=>{
            if(test1.test(e)){
                result= result+ e.replace(test1,(e,f,g)=>'cubic-bezier'+"("+g.replace(/-/,"").replace(/--/g,'-Minus').replace(/-/g,", ").replace(/d/g,".").replace(/Minus/g,'-')+")") +", ";
            }else if(test2.test(e)){
                result=result+e.replace(test2,(e,f,g,h)=>"steps"+"("+g+", " + h+")")+", ";      
            }else if(/^(e|ease|l|linear|ei|ease-in|eo|ease-out|eio|ease-in-out|ss|step-start|se|step-end)$/.test(e)){
                result=result+func[e]+", ";
            }
        })
        if(result.trim()) return result.trim().replace(/[,]$/,'');

    }


