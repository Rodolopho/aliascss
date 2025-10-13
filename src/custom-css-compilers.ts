

type Property = {
    alias?:string,
    property?: string,
    test?:RegExp,
    type?:string,
    values?:string[],
    groups?:{[key:string]:string},
    compiler?:(a:string, b:{ [key: string]: { [key: string]: string}})=>any,

}



const cssCustomCompilers:{
    [key:string]:Property
}={ 


// padding, margin
'padding-x':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `padding-left:var(${y});padding-right:var(${y})`;
        }
        const value=y.split('-');
        if(value.length===3){
            return `padding-left:${value[1]};padding-right:${value[2]}`;
        }else if(value.length===2){
            return `padding-left:${value[1]};padding-right:${value[1]}`;
        }
        // else{
        //     return `padding-left:${y};padding-right:${y}`;
        // }
        },
    groups:{
        0:"padding-left:0;padding-right:0",
    },
},
'px':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `padding-left:var(${y});padding-right:var(${y})`;
        }
        const value=y.split('-');
        if(value.length===3){
            return `padding-left:${value[1]};padding-right:${value[2]}`;
        }else if(value.length===2){
            return `padding-left:${value[1]};padding-right:${value[1]}`;
        }
        // else{
        //     return `padding-left:${y};padding-right:${y}`;
        // }
        },
    groups:{
        0:"padding-left:0;padding-right:0",
    },
},

'padding-y':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `padding-top:var(${y});padding-bottom:var(${y})`;
        }
        const value=y.split('-');
        if(value.length===3){
            return `padding-top:${value[1]};padding-bottom:${value[2]}`;
        }else if(value.length===2){
            return `padding-top:${value[1]};padding-bottom:${value[1]}`;
        }
        // else{
        //     return `padding-top:${y};padding-bottom:${y}`;
        // }
        },
    groups:{
        0:"padding-top:0;padding-bottom:0",
    },
},
'py':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `padding-top:var(${y});padding-bottom:var(${y})`;
        }
        const value=y.split('-');
        if(value.length===3){
            return `padding-top:${value[1]};padding-bottom:${value[2]}`;
        }else if(value.length===2){
            return `padding-top:${value[1]};padding-bottom:${value[1]}`;
        }
        // else{
        //     return `padding-top:${y};padding-bottom:${y}`;
        // }
        },
    groups:{
        0:"padding-top:0;padding-bottom:0",
    },
},
// Margin
'margin-x':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `margin-left:var(${y});margin-right:var(${y})`;
        }
        const value=y.replace(/--/g,'-M').split('-');
        if(value.length===3){
            return `margin-left:${value[1].replace("M",'-')};margin-right:${value[2].replace("M",'-')}`;
        }else if(value.length===2){
            return `margin-left:${value[1].replace("M",'-')};margin-right:${value[1].replace("M",'-')}`;
        }
        // else{
        //     return `margin-left:${y};margin-right:${y}`;
        // }
        },
    groups:{
        0:"margin-left:0;margin-right:0",
    },
},
'mx':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `margin-left:var(${y});margin-right:var(${y})`;
        }
        const value=y.replace(/--/g,'-M').split('-');
        if(value.length===3){
            return `margin-left:${value[1].replace("M",'-')};margin-right:${value[2].replace("M",'-')}`;
        }else if(value.length===2){
            return `margin-left:${value[1].replace("M",'-')};margin-right:${value[1].replace("M",'-')}`;
        }
        // else{
        //     return `margin-left:${y};margin-right:${y}`;
        // }
        },
    groups:{
        0:"margin-left:0;margin-right:0",
    },
},

'margin-y':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `margin-top:var(${y});margin-bottom:var(${y})`;
        }
        const value=y.replace(/--/g,'-M').split('-');
        if(value.length===3){
            return `margin-top:${value[1].replace("M",'-')};margin-bottom:${value[2].replace("M",'-')}`;
        }else if(value.length===2){
            return `margin-top:${value[1].replace("M",'-')};margin-bottom:${value[1].replace("M",'-')}`;
        }
        // else{
        //     return `margin-top:${y};margin-bottom:${y}`;
        // }
        },
    groups:{
        0:"margin-top:0;margin-bottom:0",
    },
},
'my':{
    type:'group',
    compiler:(y)=>{
        if(/^--[a-z]/.test(y)){
            return `margin-top:var(${y});margin-bottom:var(${y})`;
        }
        const value=y.replace(/--/g,'-M').split('-');
        if(value.length===3){
            return `margin-top:${value[1].replace("M",'-')};margin-bottom:${value[2].replace("M",'-')}`;
        }else if(value.length===2){
            return `margin-top:${value[1].replace("M",'-')};margin-bottom:${value[1].replace("M",'-')}`;
        }
        // else{
        //     return `margin-top:${y};margin-bottom:${y}`;
        // }
        },
    groups:{
        0:"margin-top:0;margin-bottom:0",
    },
},

//---------------------x-custom-compiler
'x-square':{
    type:'group',
    compiler:(value)=>{
        const v=value.replace(/^-([-]?[\d])/g,'$1');
        return `width:calc(${v} + var(--x-square-grow,0px) - var(--x-square-shrink,0px)); flex-basis:calc(${v} + var(--x-square-grow,0px) - var(--x-square-shrink,0px)); flex-shrink:0;flex-grow:0;height:calc(${v} + var(--x-square-grow,0px) - var(--x-square-shrink,0px))`;
    },
   },
   'x-circle':{
    type:'group',
    compiler:(value)=>{
         const v=value.replace(/^-([-]?[\d])/g,'$1');
        return `width:calc(${v} + var(--x-circle-grow,0px) - var(--x-circle-shrink,0px)); height:calc(${v} + var(--x-circle-grow,0px) - var(--x-circle-shrink,0px)); border-radius:50%;`;
    },
   },
   'x-width':{
    property:'width',
    compiler:(value)=>{
        if(/^--[a-zA-Z]/.test(value)){
            if(value.includes(':')){
            let val=value.slice(value.indexOf(':')).replace(':','');
                const cssVar=value.replace(val,'').replace(':','');
                return `calc(var(${cssVar},${val}) + var(--x-width-grow,0px) - var(--x-width-shrink,0px))`
            }
            return `calc(var(${value}) + var(--x-width-grow,0px) - var(--x-width-shrink,0px))`
            
        }
        return `calc(${value.replace(/^-([-]?[\d])/g,'$1')} + var(--x-width-grow,0px) - var(--x-width-shrink,0px))`
    },
   },
   'x-height':{
    property:'height',
    compiler:(value)=>{
        if(/^--[a-zA-Z]/.test(value)){
            if(value.includes(':')){
            let val=value.slice(value.indexOf(':')).replace(':','');
                const cssVar=value.replace(val,'').replace(':','');
                return `calc(var(${cssVar},${val}) + var(--x-height-grow,0px) - var(--x-height-shrink,0px))`
            }
            return `calc(var(${value}) + var(--x-height-grow,0px) - var(--x-height-shrink,0px))`
            
        }
        return `calc(${value.replace(/^-([-]?[\d])/g,'$1')} + var(--x-height-grow,0px) - var(--x-height-shrink,0px))`;
    },
   },
   

}

export default cssCustomCompilers;


