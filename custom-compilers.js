import {getCompiler} from './lib/index.js'
export const compilers={
    'import-var':{
        type:'group',
        groups:{
                'spacing':`
                --space-1:4px;
                --space-2:8px;
                --space-3:12px;
                --space-4:16px;
                --space-5:24px;
                --space-6:32px;
                --space-7:40px;
                --space-8:48px;
                --space-9:64px;
                `,
                theme:`
                
                `
            },

    },
    'Text':{
            
            compiler:(value)=>{
                let result='';
                const match=/-([-]?[\w\.]+)/;
                const property=['font-size','line-height','letter-spacing','font-weight'];
                value.match(new RegExp(match,'g')).forEach((e,i)=>{
                    if(i<property.length){
                        result+=`${property[i]}:${e.replace(match,'$1').replace(/(\d)d(\d)/,'$1.$2').replace(/([\d])p([\s]|$)/,'$1%$2')};`;
                    }
                    
                })
                return result;
                
            },
            groups:{
                xs:'font-size:12px;line-height:18px;letter-spacing:0.0025em',
                '1':'font-size:12px;letter-spacing:0.0025em;line-height:16px;',
                '2':'font-size:14px;letter-spacing:0em;line-height:20px;',
                '3':'font-size:16px;letter-spacing:0em;line-height:24px;',
                '4':'font-size:18px;letter-spacing:-0.0025em;line-height:26px;',
                '5':'font-size:20px;letter-spacing:-0.005em;line-height:28px;',
                '6':'font-size:24px;letter-spacing:-0.00625em;line-height:30px;',
                '7':'font-size:28px;letter-spacing:-0.0075em;line-height:36px;',
                '8':'font-size:35px;letter-spacing:-0.01em;line-height:40px;',
                '9':'font-size:60px;letter-spacing:-0.025em;line-height:60px;',
            },
            
            
        },
    Box:{
        compiler:(value)=>{
                let result='';
                const match=/-([-]?[\w\.]+)/;
                const property=['width','height','padding'];
                value.match(new RegExp(match,'g')).forEach((e,i)=>{
                    if(i<property.length){
                        result+=`${property[i]}:${e.replace(match,'$1').replace(/(\d)d(\d)/,'$1.$2').replace(/([\d])p([\s]|$)/,'$1%$2')};`;
                    }else{
            
                        result=result.replace(/;$/,` ${e.replace(match,'$1').replace(/(\d)d(\d)/,'$1.$2').replace(/([\d])p([\s]|$)/,'$1%$2')};`)
                    }
                    
                })
                return result;
                
            },
        type:'group',
        groups:{

        }
    },
    Position:{
        'alias':'pos',
        compiler:(value)=>{
                let result='';
                const match=/-([-]?[\w\.]+)/;
                const property=['position','top','right','bottom','left'];
                value.match(new RegExp(match,'g')).forEach((e,i)=>{
                    if(i<property.length){
                        result+=`${property[i]}:${e.replace(match,'$1').replace(/(\d)d(\d)/,'$1.$2').replace(/([\d])p([\s]|$)/,'$1%$2')};`;
                    }
                    
                })
                return result;
                
            },
        type:'group',
        groups:{

        }
    }, 
    Colorize:{
        'alias':'pos',
        compiler:(value,custom)=>{
                let result='';
                const match=/-([-]?[\w\.]+)/;
                const property=['background-color','border-color','color',];
                value.match(new RegExp(match,'g')).forEach((e,i)=>{
                    
                    if(i<property.length){
                        if(e.match(/^--[a-zA-Z]/)){
                            result+=`${property[i]}:var(${e});`
                        }else{
                            result+=`${property[i]}:${getCompiler('color').compiler(e,custom)};`;
                        }          
                    }
                    
                })
                return result;
                
            },
        type:'group',
        groups:{

        }
    },  
    Container:{
        type:"group",
        compiler:(value)=>value,
        groups:{
            '1':'display:block;margin:auto;width:var(--container-1,448px)',
            '2':'display:block;margin:auto;width:var(--container-2,688px)',
            '3':'display:block;margin:auto;width:var(--container-3,880px)',
            '4':'display:block;margin:auto;width:var(--container-4,1136px)',
            'xs':'display:block;margin:auto;width:var(--container-xs,448px)',
            'sm':'display:block;margin:auto;width:var(--container-sm,688px)',
            'md':'display:block;margin:auto;width:var(--container-md,880px)',
            'lg':'display:block;margin:auto;width:var(--container-lg,1136px)',
        }
    },
    Section:{
        type:"group",
        compiler:(value)=>value,
        groups:{
            '1':'display:block;padding:var(--section-padding-1,24px) auto',
            '2':'display:block;padding:var(--section-padding-2,40px) auto',
            '3':'display:block;padding:var(--section-padding-3,64px) auto',
            '4':'display:block;padding:var(--section-padding-4,80px) auto',
            'xs':'display:block;padding:var(--section-padding-xs,24px) auto',
            'sm':'display:block;padding:var(--section-padding-sm,40px) auto',
            'md':'display:block;padding:var(--section-padding-md,64px) auto',
            'lg':'display:block;padding:var(--section-padding-lg,80px) auto',

        }
    }                 
}
